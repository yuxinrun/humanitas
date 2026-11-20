import { Link } from 'react-router-dom'

interface Crumb {
  label: string
  to?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="面包屑导航">
      <Link to="/">首页</Link>
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="crumb-item">
          <span className="crumb-sep" aria-hidden="true">/</span>
          {item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  )
}
