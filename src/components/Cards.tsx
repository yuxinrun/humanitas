import { Link } from 'react-router-dom'
import type { Article, Book, ProfileCard, TopicCard } from '../types'
import { Icon } from '../assets/svg'
import { SmartImage } from './SmartImage'

export function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  return (
    <article className={`article-card ${compact ? 'compact' : ''}`}>
      <Link to={`/articles/${article.slug}`} className="card-image-link" tabIndex={-1} aria-hidden="true">
        <SmartImage src={article.cover} alt={article.coverAlt} className="card-image" />
      </Link>
      <div className="card-body">
        <div className="card-meta">
          <span className="card-category">{article.categoryLabel}</span>
          <span className="card-dot">·</span>
          <span>{article.readingTime} 分钟阅读</span>
        </div>
        <h3 className="card-title">
          <Link to={`/articles/${article.slug}`}>{article.title}</Link>
        </h3>
        {!compact && <p className="card-excerpt">{article.excerpt}</p>}
        <div className="card-footer">
          <span className="card-author">{article.author}</span>
          <Link to={`/articles/${article.slug}`} className="card-read">
            阅读全文 <Icon name="arrow" size={15} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function TopicTile({ topic, index }: { topic: TopicCard; index?: number }) {
  const content = (
    <>
      <div className="topic-image-wrap">
        <SmartImage src={topic.image} alt={topic.name} className="topic-image" />
        <span className="topic-period">{topic.period}</span>
      </div>
      <div className="topic-body">
        {index !== undefined && <span className="topic-index">{String(index + 1).padStart(2, '0')}</span>}
        <h3>{topic.name}</h3>
        <div className="topic-en">{topic.nameEn}</div>
        <p>{topic.description}</p>
      </div>
    </>
  )

  if (topic.articleSlug) {
    return (
      <Link to={`/articles/${topic.articleSlug}`} className="topic-tile">
        {content}
      </Link>
    )
  }
  return <div className="topic-tile">{content}</div>
}

export function ProfileCardView({ profile }: { profile: ProfileCard }) {
  const content = (
    <>
      <div className="profile-portrait">
        <SmartImage src={profile.image ?? ''} alt={profile.name} className="profile-image" />
      </div>
      <div className="profile-info">
        <div className="profile-period">{profile.period}</div>
        <h3>{profile.name}</h3>
        <div className="profile-en">{profile.nameEn}</div>
        <p>{profile.description}</p>
        <div className="profile-works">代表：{profile.works}</div>
      </div>
    </>
  )

  if (profile.articleSlug) {
    return (
      <Link to={`/articles/${profile.articleSlug}`} className="profile-card">
        {content}
      </Link>
    )
  }
  return <div className="profile-card">{content}</div>
}

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="book-card">
      <div className="book-cover" aria-hidden="true">
        <div className="book-cover-inner">
          <div className="book-cover-top">HUMANITAS · 典藏</div>
          <div className="book-cover-title">{book.title}</div>
          <div className="book-cover-line" />
          <div className="book-cover-author">{book.author}</div>
          <div className="book-cover-year">{book.year}</div>
        </div>
      </div>
      <div className="book-info">
        <div className="book-category">{book.category}</div>
        <h3>{book.title}</h3>
        <div className="book-original">{book.originalTitle}</div>
        <p className="book-summary">{book.summary}</p>
        <div className="book-field">{book.field}</div>
      </div>
    </article>
  )
}
