import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Icon } from '../assets/svg'
import { articles } from '../content/articles'
import { books } from '../content/books'
import {
  artMovements,
  architectureLandmarks,
  civilizationTopics,
  literatureClassics,
  musicProfiles,
  philosopherProfiles,
} from '../data/home'
import { useDocumentMeta } from '../utils/useDocumentMeta'

type ResultType = '文章' | '人物' | '书籍' | '专题'

interface SearchResult {
  type: ResultType
  title: string
  subtitle: string
  excerpt: string
  to?: string
}

const allEntries: SearchResult[] = [
  ...articles.map((article) => ({
    type: '文章' as const,
    title: article.title,
    subtitle: `${article.categoryLabel} · ${article.readingTime} 分钟`,
    excerpt: article.excerpt,
    to: `/articles/${article.slug}`,
  })),
  ...philosopherProfiles.map((profile) => ({
    type: '人物' as const,
    title: profile.name,
    subtitle: `${profile.nameEn} · ${profile.period}`,
    excerpt: profile.description,
    to: profile.articleSlug ? `/articles/${profile.articleSlug}` : undefined,
  })),
  ...musicProfiles.map((profile) => ({
    type: '人物' as const,
    title: profile.name,
    subtitle: `${profile.nameEn} · ${profile.period}`,
    excerpt: profile.description,
    to: profile.articleSlug ? `/articles/${profile.articleSlug}` : undefined,
  })),
  ...books.map((book) => ({
    type: '书籍' as const,
    title: book.title,
    subtitle: `${book.author} · ${book.year}`,
    excerpt: book.summary,
    to: '/books',
  })),
  ...[...civilizationTopics, ...artMovements, ...literatureClassics, ...architectureLandmarks].map((topic) => ({
    type: '专题' as const,
    title: topic.name,
    subtitle: `${topic.nameEn} · ${topic.period}`,
    excerpt: topic.description,
    to: topic.articleSlug ? `/articles/${topic.articleSlug}` : undefined,
  })),
]

const typeFilters: (ResultType | '全部')[] = ['全部', '文章', '人物', '书籍', '专题']

export function SearchPage() {
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const [input, setInput] = useState(query)
  const [type, setType] = useState<ResultType | '全部'>('全部')
  useDocumentMeta('全站搜索', '搜索 Humanitas 的文章、人物、书籍与专题。')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return allEntries.filter((entry) => {
      const haystack = `${entry.title} ${entry.subtitle} ${entry.excerpt}`.toLowerCase()
      const matched = haystack.includes(q)
      const typeOk = type === '全部' || entry.type === type
      return matched && typeOk
    })
  }, [query, type])

  const submit = (event: FormEvent) => {
    event.preventDefault()
    setParams(input.trim() ? { q: input.trim() } : {})
  }

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: '全站搜索' }]} />
      </div>
      <header className="page-hero">
        <div className="container">
          <div className="page-hero-label">Search the Archive</div>
          <h1>全站搜索</h1>
          <p>在文章、人物、书籍与专题中查找。搜索基于本地数据，无需后端服务。</p>
        </div>
      </header>

      <section className="container search-section">
        <form className="search-form" onSubmit={submit} role="search">
          <label className="sr-only" htmlFor="search-input">搜索关键词</label>
          <Icon name="search" size={22} className="search-form-icon" />
          <input
            id="search-input"
            type="search"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="输入关键词，如「柏拉图」「印象派」「神曲」"
            autoComplete="off"
          />
          <button type="submit" className="btn btn-primary">搜索</button>
        </form>

        <div className="filter-bar search-filters">
          <div className="filter-group">
            <span className="filter-label">类型</span>
            <div className="filter-options">
              {typeFilters.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={type === item ? 'filter-chip active' : 'filter-chip'}
                  onClick={() => setType(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {query ? (
          <>
            <div className="archive-meta">
              <span>关于「<strong>{query}</strong>」找到 <strong>{results.length}</strong> 条结果</span>
            </div>
            {results.length > 0 ? (
              <div className="search-results">
                {results.map((result, index) => {
                  const inner = (
                    <>
                      <div className="result-type">{result.type}</div>
                      <div className="result-content">
                        <h3>{result.title}</h3>
                        <div className="result-subtitle">{result.subtitle}</div>
                        <p>{result.excerpt}</p>
                      </div>
                      <Icon name="arrow" size={18} className="result-arrow" />
                    </>
                  )
                  return result.to ? (
                    <Link key={`${result.title}-${index}`} to={result.to} className="search-result">
                      {inner}
                    </Link>
                  ) : (
                    <div key={`${result.title}-${index}`} className="search-result">
                      {inner}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="empty-state">
                <p>没有找到与「{query}」相关的内容。</p>
                <p className="muted">试试更短的关键词，或浏览 <Link to="/articles">全部文章</Link>。</p>
              </div>
            )}
          </>
        ) : (
          <div className="search-suggestions">
            <div className="section-kicker">热门关键词 / Suggested</div>
            <div className="suggestion-list">
              {['柏拉图', '文艺复兴', '印象派', '莎士比亚', '道德经', '哥特式建筑'].map((word) => (
                <button key={word} type="button" onClick={() => { setInput(word); setParams({ q: word }) }}>
                  {word}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}
