import { useState } from 'react'
import { asset } from '../utils/assets'

interface SmartImageProps {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

/** 本地图片加载失败时以自制 SVG 插画替代，避免出现破图。 */
export function SmartImage({ src, alt, className, eager = false }: SmartImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`image-fallback ${className ?? ''}`} role="img" aria-label={alt}>
        <svg viewBox="0 0 320 200" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
          <rect width="320" height="200" fill="currentColor" opacity="0.06" />
          <circle cx="248" cy="52" r="18" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
          <path d="M0 168l78-74 56 52 46-44 140 108M0 200h320" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
          <path d="M18 20h44M18 26h28" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <path d="M258 172h44M270 180h32" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        </svg>
        <span className="image-fallback-label">{alt}</span>
      </div>
    )
  }

  return (
    <img
      src={asset(src)}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
