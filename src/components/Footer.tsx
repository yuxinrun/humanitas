import { Link } from 'react-router-dom'
import { BrandMark, Divider } from '../assets/svg'
import { navItems } from '../data/navigation'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="footer-brand-head">
            <BrandMark size={40} />
            <div>
              <div className="footer-brand-name">Humanitas</div>
              <div className="footer-brand-sub">世界人文艺术 · World Humanities &amp; Arts</div>
            </div>
          </div>
          <p className="footer-intro">
            以人文理解世界，以艺术感知文明，以思想连接历史。这里是关于人类文明、思想与创造的数字人文知识平台。
          </p>
          <p className="footer-motto">以人文理解世界，以艺术感知文明，以思想连接历史。</p>
        </div>

        <div className="footer-column">
          <h3>内容分类</h3>
          <ul>
            {navItems.slice(1, 8).map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>探索</h3>
          <ul>
            <li><Link to="/articles">全部文章</Link></li>
            <li><Link to="/books">书籍典藏</Link></li>
            <li><Link to="/search">全站搜索</Link></li>
            <li><Link to="/about">关于我们</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>联系</h3>
          <ul>
            <li>
              <a href="https://github.com/yuxinrun/humanitas" target="_blank" rel="noreferrer">
                GitHub 仓库 ↗
              </a>
            </li>
            <li><a href="mailto:hello@humanitas.example">编辑部邮箱</a></li>
            <li><Link to="/about">内容与授权说明</Link></li>
          </ul>
        </div>
      </div>

      <div className="container">
        <Divider wide />
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Humanitas · 世界人文艺术。内容仅供学习与研究使用。</p>
          <p>本站图片来自 Wikimedia Commons 等开放资源，具体来源见 image-sources.md。</p>
        </div>
      </div>
    </footer>
  )
}
