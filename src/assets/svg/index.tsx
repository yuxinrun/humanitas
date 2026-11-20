import type { ReactNode, SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

/** 品牌标记：古典柱廊与顶部山花，取自古典建筑语法。 */
export function BrandMark({ size = 40, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 13h34M9 10h30" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 13v22M19 13v22M29 13v22M38 13v22" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 35h36M4 38h40" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M24 4l3.4 5h-6.8L24 4z" fill="#B39A69" />
      <path d="M17 18h14" stroke="#B39A69" strokeWidth="1.2" />
    </svg>
  )
}

/** 编辑式分割线：两端细线，中央菱形。 */
export function Divider({ wide = false }: { wide?: boolean }) {
  return (
    <svg
      className="svg-divider"
      viewBox="0 0 240 12"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ width: wide ? '100%' : 160 }}
    >
      <path d="M0 6h104M136 6h104" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <path d="M120 1l5 5-5 5-5-5z" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

/** 角落纹样：回纹变体，用作卡片与章节的装饰。 */
export function CornerOrnament({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M2 2h24v24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M7 7h14v14" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <path d="M12 12h4v4h-4z" fill="none" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  )
}

/** 时间线节点：内圆与外环。 */
export function TimelineNode({ active = false }: { active?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="9" cy="9" r="3" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

/** 月桂枝：古典胜利与荣誉纹样。 */
export function Laurel({ size = 42 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 44V12" stroke="currentColor" strokeWidth="1" />
      <path d="M24 14c-6-2-10-7-10-12 5 0 10 4 10 12zM24 22c-6-1-10-5-11-10 5 1 9 4 11 10zM24 30c-5 0-9-4-10-9 5 1 8 4 10 9z" stroke="currentColor" strokeWidth="1" />
      <path d="M24 14c6-2 10-7 10-12-5 0-10 4-10 12zM24 22c6-1 10-5 11-10-5 1-9 4-11 10zM24 30c5 0 9-4 10-9-5 1-8 4-10 9z" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

/** 古典柱式：多立克、爱奥尼、科林斯的抽象轮廓。 */
export function ClassicalColumns({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path d="M10 20h100M14 24h92" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 28h24v62H16zM48 28h24v62H48zM80 28h24v62H80z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M18 40h20M50 40h20M82 40h20M18 46h20M50 46h20M82 46h20" stroke="currentColor" strokeWidth="0.7" opacity="0.6" />
      <path d="M12 90h96M8 96h104" stroke="currentColor" strokeWidth="1.2" />
      <path d="M60 28V8M54 14l6-6 6 6" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    </svg>
  )
}

/** 建筑轮廓：神庙山花与柱廊。 */
export function TempleOutline({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.72} viewBox="0 0 140 100" fill="none" aria-hidden="true">
      <path d="M70 8L14 44h112L70 8z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 48h100M24 54h92" stroke="currentColor" strokeWidth="1.2" />
      <path d="M28 54v34M50 54v34M70 54v34M90 54v34M112 54v34" stroke="currentColor" strokeWidth="1.1" />
      <path d="M16 88h108M10 94h120" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="70" cy="30" r="5" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  )
}

/** 几何装饰：连续回纹带。 */
export function MeanderPattern({ width = 260 }: { width?: number }) {
  const unit = 20
  const count = Math.floor(width / unit)
  const path = Array.from({ length: count }, (_, i) => {
    const x = i * unit
    return `M${x} 14h14V4H${x + 4}v6h6`
  }).join(' ')
  return (
    <svg width={width} height="18" viewBox={`0 0 ${width} 18`} fill="none" aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  )
}

const iconPaths: Record<string, ReactNode> = {
  civilizations: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
    </>
  ),
  philosophy: (
    <>
      <path d="M12 3v18M5 7l7 3 7-3M4 20h16" />
      <path d="M8 13c0 3-1.5 5-4 6M16 13c0 3 1.5 5 4 6" />
    </>
  ),
  literature: (
    <>
      <path d="M4 5h6a3 3 0 013 3v12a3 3 0 00-3-3H4V5zM20 5h-6a3 3 0 00-3 3v12a3 3 0 013-3h6V5z" />
    </>
  ),
  art: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 16l5-5 4 4 3-3 6 6M8 8.5a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
    </>
  ),
  architecture: (
    <>
      <path d="M12 3L3 10h18L12 3zM5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V6l10-2v12" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="16" cy="16" r="3" />
    </>
  ),
  books: (
    <>
      <path d="M4 4h7v16H4zM13 4h7v16h-7z" />
      <path d="M6 8h3M15 8h3" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L21 21" />
    </>
  ),
  arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
  close: <path d="M5 5l14 14M19 5L5 19" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  top: <path d="M12 20V5M6 11l6-6 6 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
}

export function Icon({ name, size = 20, ...props }: IconProps & { name: keyof typeof iconPaths | string }) {
  return (
    <svg {...base(size)} {...props}>
      {iconPaths[name] ?? iconPaths.arrow}
    </svg>
  )
}

/** 阅读进度环，由外部传入 0—1 的进度值。 */
export function ProgressRing({ progress = 0, size = 36 }: { progress?: number; size?: number }) {
  const radius = (size - 4) / 2
  const circumference = 2 * Math.PI * radius
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - Math.min(1, Math.max(0, progress)))}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeLinecap="round"
      />
    </svg>
  )
}
