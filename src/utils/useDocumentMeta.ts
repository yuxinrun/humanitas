import { useEffect } from 'react'

const SITE = 'Humanitas 世界人文艺术'

/** 同步页面标题、描述与 Open Graph 元信息。 */
export function useDocumentMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | World Humanities & Arts`

    const update = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector)
      if (!element) {
        element = document.createElement('meta')
        const [key, val] = selector.replace('meta[', '').replace(']', '').split('="')
        element.setAttribute(key, val.replace(/["']$/, ''))
        document.head.appendChild(element)
      }
      element.setAttribute(attribute, value)
    }

    if (description) {
      update('meta[name="description"]', 'content', description)
      update('meta[property="og:description"]', 'content', description)
    }
    if (title) {
      update('meta[property="og:title"]', 'content', `${title} | ${SITE}`)
    }
  }, [title, description])
}
