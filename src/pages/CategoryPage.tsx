import { Link } from 'react-router-dom'
import type { CategoryId, ProfileCard, TopicCard } from '../types'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ArticleCard, ProfileCardView, TopicTile } from '../components/Cards'
import { Divider, Icon } from '../assets/svg'
import { getArticlesByCategory } from '../content/articles'
import { categoryMeta, navItems } from '../data/navigation'
import {
  architectureLandmarks,
  artMovements,
  civilizationTopics,
  literatureClassics,
  musicProfiles,
  philosopherProfiles,
} from '../data/home'
import { useDocumentMeta } from '../utils/useDocumentMeta'

const categoryExtras: Partial<
  Record<CategoryId, { topics?: TopicCard[]; profiles?: ProfileCard[] }>
> = {
  civilizations: { topics: civilizationTopics },
  philosophy: { profiles: philosopherProfiles },
  literature: { topics: literatureClassics },
  art: { topics: artMovements },
  architecture: { topics: architectureLandmarks },
  music: { profiles: musicProfiles },
}

export function CategoryPage({ category }: { category: CategoryId }) {
  const meta = categoryMeta[category]
  const articles = getArticlesByCategory(category)
  const extras = categoryExtras[category]
  useDocumentMeta(meta.name, meta.description)

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: meta.name }]} />
      </div>

      <header className="category-hero">
        <div className="container category-hero-inner">
          <div className="category-hero-label">{meta.en}</div>
          <h1>{meta.name}</h1>
          <div className="category-tagline">{meta.tagline}</div>
          <p className="category-description">{meta.description}</p>
          <Divider wide />
          <div className="category-nav">
            {navItems.slice(1, 8).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={item.path === `/${category}` ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <section className="container category-articles">
        <div className="section-head compact">
          <div>
            <div className="section-kicker">深度阅读 / Long Read</div>
            <h2 className="section-title">{meta.name} · 精选文章</h2>
          </div>
          <span className="result-count">{articles.length} 篇</span>
        </div>
        <Divider />
        <div className="article-grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {extras?.topics && (
        <section className="content-section tone-paper">
          <div className="container">
            <div className="section-head compact">
              <div>
                <div className="section-kicker">知识地图 / Atlas</div>
                <h2 className="section-title">按主题探索</h2>
              </div>
            </div>
            <Divider />
            <div className="topic-grid topic-grid-four">
              {extras.topics.map((topic, index) => (
                <TopicTile key={topic.id} topic={topic} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {extras?.profiles && (
        <section className="content-section tone-paper">
          <div className="container">
            <div className="section-head compact">
              <div>
                <div className="section-kicker">人物志 / Portraits</div>
                <h2 className="section-title">关键人物</h2>
              </div>
            </div>
            <Divider />
            <div className="profile-grid">
              {extras.profiles.map((profile) => (
                <ProfileCardView key={profile.id} profile={profile} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container category-cross-links">
        <div className="section-kicker">继续探索 / Continue</div>
        <div className="cross-links">
          {navItems.slice(1, 8).filter((item) => item.path !== `/${category}`).map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label} <Icon name="arrow" size={15} />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
