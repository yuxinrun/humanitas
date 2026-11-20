import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems } from '../data/navigation'
import { BrandMark, Icon } from '../assets/svg'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Humanitas 首页">
          <BrandMark size={34} className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">Humanitas</span>
            <span className="brand-sub">世界人文艺术</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="主导航">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/search" className="icon-button" aria-label="全站搜索">
            <Icon name="search" size={19} />
          </Link>
          <button
            type="button"
            className="icon-button menu-toggle"
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={21} />
          </button>
        </div>
      </div>

      <nav className={`mobile-nav ${open ? 'open' : ''}`} aria-label="移动端导航">
        <div className="mobile-nav-inner">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
            >
              <span className="mobile-nav-number">{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </NavLink>
          ))}
          <Link to="/articles" className="mobile-nav-link">
            <span className="mobile-nav-number">10</span>
            全部文章
          </Link>
          <Link to="/search" className="mobile-nav-link">
            <span className="mobile-nav-number">11</span>
            全站搜索
          </Link>
        </div>
      </nav>
    </header>
  )
}
