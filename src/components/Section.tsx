import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Divider, Icon } from '../assets/svg'

interface SectionProps {
  kicker: string
  title: string
  en?: string
  description?: string
  actionLabel?: string
  actionTo?: string
  children: ReactNode
  tone?: 'light' | 'paper'
}

export function Section({
  kicker,
  title,
  en,
  description,
  actionLabel,
  actionTo,
  children,
  tone = 'light',
}: SectionProps) {
  return (
    <section className={`content-section tone-${tone}`}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">{kicker}</div>
            <h2 className="section-title">{title}</h2>
            {en && <div className="section-en">{en}</div>}
            {description && <p className="section-description">{description}</p>}
          </div>
          {actionLabel && actionTo && (
            <Link to={actionTo} className="section-action">
              {actionLabel} <Icon name="arrow" size={16} />
            </Link>
          )}
        </div>
        <Divider />
        {children}
      </div>
    </section>
  )
}
