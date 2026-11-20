import type { Article, CategoryId } from '../../types'
import { civilizationArticles } from './civilizations'
import { philosophyArticles } from './philosophy'
import { artArticles } from './art'
import { literatureArticles } from './literature'
import { heritageArticles } from './heritage'

export const articles: Article[] = [
  ...civilizationArticles,
  ...philosophyArticles,
  ...artArticles,
  ...literatureArticles,
  ...heritageArticles,
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getArticlesByCategory(category: CategoryId): Article[] {
  return articles.filter((article) => article.category === category)
}

export function getFeaturedArticles(limit = 6): Article[] {
  return articles.filter((article) => article.featured).slice(0, limit)
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return articles
    .filter(
      (candidate) =>
        candidate.slug !== article.slug &&
        (candidate.category === article.category ||
          candidate.tags.some((tag) => article.tags.includes(tag))),
    )
    .slice(0, limit)
}

export function getAdjacentArticles(slug: string): { prev?: Article; next?: Article } {
  const index = articles.findIndex((article) => article.slug === slug)
  if (index === -1) return {}
  return {
    prev: index > 0 ? articles[index - 1] : undefined,
    next: index < articles.length - 1 ? articles[index + 1] : undefined,
  }
}

export function getAllTags(): string[] {
  return Array.from(new Set(articles.flatMap((article) => article.tags))).sort((a, b) =>
    a.localeCompare(b, 'zh-CN'),
  )
}
