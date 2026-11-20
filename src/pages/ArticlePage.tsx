import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ArticleCard } from '../components/Cards'
import { SmartImage } from '../components/SmartImage'
import { Divider, Icon, TimelineNode } from '../assets/svg'
import {
  getAdjacentArticles,
  getArticleBySlug,
  getRelatedArticles,
} from '../content/articles'
import { useDocumentMeta } from '../utils/useDocumentMeta'
import { NotFoundPage } from './NotFoundPage'

export function ArticlePage() {
  const { slug = '' } = useParams()
  const article = getArticleBySlug(slug)
  const [activeSection, setActiveSection] = useState('')

  useDocumentMeta(article ? article.title : '页面未找到', article?.excerpt)

  useEffect(() => {
    if (!article) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -68% 0px', threshold: 0 },
    )
    article.sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [article])

  if (!article) return <NotFoundPage />

  const related = getRelatedArticles(article, 3)
  const adjacent = getAdjacentArticles(article.slug)

  const jumpTo = (event: MouseEvent, id: string) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(id)
  }

  return (
    <>
      <div className="container">
        <Breadcrumbs
          items={[
            { label: article.categoryLabel, to: `/${article.category}` },
            { label: article.title },
          ]}
        />
      </div>

      <header className="article-header">
        <div className="container article-header-inner">
          <div className="article-kicker">
            <span>{article.categoryLabel}</span>
            <span className="kicker-line" />
            <span>Long Read</span>
          </div>
          <h1>{article.title}</h1>
          <div className="article-title-en">{article.titleEn}</div>
          <p className="article-excerpt">{article.excerpt}</p>
          <div className="article-byline">
            <span>作者：{article.author}</span>
            <span className="byline-dot">·</span>
            <time dateTime={article.date}>{article.date.replace(/-/g, '.')}</time>
            <span className="byline-dot">·</span>
            <span>{article.readingTime} 分钟阅读</span>
          </div>
          <div className="article-tags">
            {article.tags.map((tag) => (
              <Link key={tag} to={`/search?q=${encodeURIComponent(tag)}`} className="tag">
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <div className="container article-cover-wrap">
        <figure className="article-cover">
          <SmartImage src={article.cover} alt={article.coverAlt} className="article-cover-image" eager />
          <figcaption>fig. 01 · {article.coverAlt}</figcaption>
        </figure>
      </div>

      <div className="container article-layout">
        <aside className="article-toc" aria-label="文章目录">
          <div className="toc-inner">
            <div className="toc-title">目录 / Contents</div>
            <ol>
              {article.sections.map((section, index) => (
                <li key={section.id} className={activeSection === section.id ? 'active' : ''}>
                  <TimelineNode active={activeSection === section.id} />
                  <a href={`#${section.id}`} onClick={(event) => jumpTo(event, section.id)}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
            <button
              type="button"
              className="toc-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Icon name="top" size={15} /> 回到文首
            </button>
          </div>
        </aside>

        <article className="article-content">
          <p className="article-lead">{article.lead}</p>
          <Divider />

          {article.sections.map((section) => (
            <section key={section.id} id={section.id} className="article-section">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="article-bullets">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
              {section.quote && (
                <blockquote className="article-quote">
                  <span className="quote-mark" aria-hidden="true">“</span>
                  <p>{section.quote.text}</p>
                  <cite>— {section.quote.attribution}</cite>
                </blockquote>
              )}
              {section.image && (
                <figure className="article-inline-figure">
                  <SmartImage src={section.image.src} alt={section.image.alt} />
                  <figcaption>{section.image.caption}</figcaption>
                </figure>
              )}
            </section>
          ))}

          <Divider />

          <div className="article-sideboxes">
            <div className="sidebox">
              <h3>相关人物</h3>
              <ul>
                {article.figures.map((figure) => (
                  <li key={figure.name}><strong>{figure.name}</strong><span>{figure.role}</span></li>
                ))}
              </ul>
            </div>
            <div className="sidebox">
              <h3>代表作品</h3>
              <ul>
                {article.works.map((work) => (
                  <li key={work.name}><strong>{work.name}</strong><span>{work.meta}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="article-reading-list">
            <div>
              <h3>延伸阅读</h3>
              <ol>
                {article.furtherReading.map((item) => (
                  <li key={item.title}>{item.title} <span>— {item.author}</span></li>
                ))}
              </ol>
            </div>
            <div>
              <h3>参考资料</h3>
              <ol className="reference-list">
                {article.references.map((reference) => (
                  <li key={reference}>{reference}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="article-endmark" aria-hidden="true">◆</div>
        </article>
      </div>

      <section className="container article-related">
        <div className="section-head compact">
          <div>
            <div className="section-kicker">继续阅读 / Related</div>
            <h2 className="section-title">相关文章</h2>
          </div>
          <Link to="/articles" className="section-action">全部文章 <Icon name="arrow" size={16} /></Link>
        </div>
        <Divider />
        <div className="article-grid">
          {related.map((item) => <ArticleCard key={item.slug} article={item} />)}
        </div>
      </section>

      <nav className="container article-pagination" aria-label="上一篇与下一篇">
        {adjacent.prev ? (
          <Link to={`/articles/${adjacent.prev.slug}`} className="pagination-link prev">
            <span>← 上一篇</span>
            <strong>{adjacent.prev.title}</strong>
          </Link>
        ) : <div className="pagination-placeholder" />}
        {adjacent.next ? (
          <Link to={`/articles/${adjacent.next.slug}`} className="pagination-link next">
            <span>下一篇 →</span>
            <strong>{adjacent.next.title}</strong>
          </Link>
        ) : <div className="pagination-placeholder" />}
      </nav>
    </>
  )
}
