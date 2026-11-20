import { useMemo, useState } from 'react'
import type { CategoryId } from '../types'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { ArticleCard } from '../components/Cards'
import { Divider } from '../assets/svg'
import { articles, getAllTags } from '../content/articles'
import { categoryMeta } from '../data/navigation'
import { useDocumentMeta } from '../utils/useDocumentMeta'

const filters: { id: CategoryId | 'all'; label: string }[] = [
  { id: 'all', label: '全部' },
  { id: 'civilizations', label: '世界文明' },
  { id: 'philosophy', label: '哲学思想' },
  { id: 'literature', label: '文学世界' },
  { id: 'art', label: '视觉艺术' },
  { id: 'architecture', label: '建筑空间' },
  { id: 'music', label: '音乐与戏剧' },
]

export function ArticlesPage() {
  const [category, setCategory] = useState<CategoryId | 'all'>('all')
  const [tag, setTag] = useState<string>('all')
  const tags = useMemo(() => getAllTags(), [])

  const filtered = articles.filter((article) => {
    const categoryOk = category === 'all' || article.category === category
    const tagOk = tag === 'all' || article.tags.includes(tag)
    return categoryOk && tagOk
  })

  useDocumentMeta('全部文章', '浏览 Humanitas 全部深度文章，按文明、哲学、文学、艺术、建筑与音乐分类筛选。')

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: '全部文章' }]} />
      </div>
      <header className="page-hero">
        <div className="container">
          <div className="page-hero-label">The Archive</div>
          <h1>全部文章</h1>
          <p>按领域与标签浏览 Humanitas 的深度阅读档案。每篇文章都包含完整的结构、注释与延伸阅读。</p>
        </div>
      </header>

      <section className="container archive-section">
        <div className="filter-bar">
          <div className="filter-group">
            <span className="filter-label">领域</span>
            <div className="filter-options">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={category === item.id ? 'filter-chip active' : 'filter-chip'}
                  onClick={() => setCategory(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <span className="filter-label">标签</span>
            <select
              className="tag-select"
              value={tag}
              onChange={(event) => setTag(event.target.value)}
              aria-label="按标签筛选"
            >
              <option value="all">全部标签</option>
              {tags.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="archive-meta">
          <span>
            当前显示 <strong>{filtered.length}</strong> / {articles.length} 篇文章
            {category !== 'all' && ` · ${categoryMeta[category].name}`}
            {tag !== 'all' && ` · ${tag}`}
          </span>
          {(category !== 'all' || tag !== 'all') && (
            <button
              type="button"
              className="text-button"
              onClick={() => { setCategory('all'); setTag('all') }}
            >
              清除筛选
            </button>
          )}
        </div>

        <Divider />
        {filtered.length > 0 ? (
          <div className="article-grid">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>没有找到符合条件的文章。</p>
            <button type="button" className="btn btn-outline" onClick={() => { setCategory('all'); setTag('all') }}>
              查看全部文章
            </button>
          </div>
        )}
      </section>
    </>
  )
}
