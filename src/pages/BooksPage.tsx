import { useState } from 'react'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Divider } from '../assets/svg'
import { bookCategories, getBooksByCategory } from '../content/books'
import { useDocumentMeta } from '../utils/useDocumentMeta'

export function BooksPage() {
  const [category, setCategory] = useState('全部')
  const [expanded, setExpanded] = useState<string | null>(null)
  const visible = getBooksByCategory(category)
  useDocumentMeta('书籍典藏', '世界经典著作典藏：哲学、文学、历史、艺术、建筑与人类学，含内容介绍与核心思想。')

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: '书籍典藏' }]} />
      </div>
      <header className="page-hero">
        <div className="container">
          <div className="page-hero-label">The Library</div>
          <h1>书籍典藏</h1>
          <p>人类思想最持久的载体。这里的每一本经典都曾改变过某些人理解世界的方式，并仍在继续改变着后来者。</p>
        </div>
      </header>

      <section className="container books-section">
        <div className="filter-bar">
          <div className="filter-group">
            <span className="filter-label">分类</span>
            <div className="filter-options">
              {bookCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={category === item ? 'filter-chip active' : 'filter-chip'}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="archive-meta">
          <span>共 <strong>{visible.length}</strong> 本著作</span>
        </div>
        <Divider />

        <div className="book-list">
          {visible.map((book, index) => {
            const isOpen = expanded === book.id
            return (
              <article key={book.id} className={`book-detail ${isOpen ? 'open' : ''}`}>
                <div className={`book-detail-cover shade-${index % 4}`} aria-hidden="true">
                  <div className="book-detail-cover-inner">
                    <span className="book-detail-cover-series">HUMANITAS LIBRARY</span>
                    <span className="book-detail-cover-title">{book.title}</span>
                    <span className="book-detail-cover-rule" />
                    <span className="book-detail-cover-author">{book.author}</span>
                  </div>
                </div>
                <div className="book-detail-body">
                  <div className="book-detail-top">
                    <span className="book-category">{book.category}</span>
                    <span className="book-year">{book.year}</span>
                  </div>
                  <h2>{book.title}</h2>
                  <div className="book-original">{book.originalTitle}</div>
                  <div className="book-byline">作者：{book.author} · 领域：{book.field}</div>
                  <p className="book-summary">{book.summary}</p>

                  {isOpen && (
                    <div className="book-extra">
                      <div className="book-extra-block">
                        <h4>核心思想</h4>
                        <ul>
                          {book.ideas.map((idea) => <li key={idea}>{idea}</li>)}
                        </ul>
                      </div>
                      <div className="book-extra-block">
                        <h4>推荐阅读理由</h4>
                        <p>{book.reason}</p>
                      </div>
                      <div className="book-extra-block">
                        <h4>相关人物</h4>
                        <p>{book.figures.join(' · ')}</p>
                      </div>
                      <div className="book-extra-block">
                        <h4>延伸阅读</h4>
                        <p>{book.furtherReading.join(' · ')}</p>
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    className="book-toggle"
                    onClick={() => setExpanded(isOpen ? null : book.id)}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? '收起详情' : '展开详情'} <span aria-hidden="true">{isOpen ? '↑' : '↓'}</span>
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
