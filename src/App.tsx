import { useEffect } from 'react'
import { HashRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BackToTop, ScrollProgress } from './components/ScrollUI'
import { HomePage } from './pages/HomePage'
import { CategoryPage } from './pages/CategoryPage'
import { ArticlesPage } from './pages/ArticlesPage'
import { ArticlePage } from './pages/ArticlePage'
import { BooksPage } from './pages/BooksPage'
import { SearchPage } from './pages/SearchPage'
import { AboutPage } from './pages/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'

function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <a className="skip-link" href="#main">跳转到主要内容</a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/civilizations" element={<CategoryPage category="civilizations" />} />
          <Route path="/philosophy" element={<CategoryPage category="philosophy" />} />
          <Route path="/literature" element={<CategoryPage category="literature" />} />
          <Route path="/art" element={<CategoryPage category="art" />} />
          <Route path="/architecture" element={<CategoryPage category="architecture" />} />
          <Route path="/music" element={<CategoryPage category="music" />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
