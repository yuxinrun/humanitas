import { Link } from 'react-router-dom'
import { Icon, TempleOutline } from '../assets/svg'
import { useDocumentMeta } from '../utils/useDocumentMeta'

export function NotFoundPage() {
  useDocumentMeta('页面未找到')
  return (
    <section className="container not-found">
      <TempleOutline size={150} />
      <div className="not-found-number">404</div>
      <h1>这页还在文明的缝隙里</h1>
      <p>你访问的页面不存在，或已经移动到别处。不妨从首页重新出发。</p>
      <div className="not-found-actions">
        <Link to="/" className="btn btn-primary">返回首页 <Icon name="arrow" size={16} /></Link>
        <Link to="/articles" className="btn btn-outline">浏览文章</Link>
      </div>
    </section>
  )
}
