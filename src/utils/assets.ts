/** 将 public 目录下资源路径转换为兼容 GitHub Pages 子路径的绝对地址。 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const clean = path.replace(/^\/+/, '')
  return `${base}${clean}`
}
