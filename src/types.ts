export type CategoryId =
  | 'civilizations'
  | 'philosophy'
  | 'literature'
  | 'art'
  | 'architecture'
  | 'music'
  | 'books'
  | 'topics'

export interface ArticleSection {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  quote?: {
    text: string
    attribution: string
  }
  image?: {
    src: string
    caption: string
    alt: string
  }
}

export interface RelatedFigure {
  name: string
  role: string
}

export interface RelatedWork {
  name: string
  meta: string
}

export interface Article {
  slug: string
  title: string
  titleEn: string
  category: CategoryId
  categoryLabel: string
  excerpt: string
  author: string
  date: string
  readingTime: number
  cover: string
  coverAlt: string
  tags: string[]
  featured: boolean
  lead: string
  sections: ArticleSection[]
  figures: RelatedFigure[]
  works: RelatedWork[]
  furtherReading: { title: string; author: string }[]
  references: string[]
}

export interface Book {
  id: string
  title: string
  originalTitle: string
  author: string
  year: string
  category: string
  field: string
  summary: string
  ideas: string[]
  reason: string
  figures: string[]
  furtherReading: string[]
}

export interface ProfileCard {
  id: string
  name: string
  nameEn: string
  period: string
  description: string
  works: string
  image?: string
  articleSlug?: string
}

export interface TopicCard {
  id: string
  name: string
  nameEn: string
  period: string
  description: string
  image: string
  articleSlug?: string
}

export interface NavItem {
  label: string
  path: string
}
