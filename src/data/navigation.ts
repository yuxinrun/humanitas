import type { NavItem } from '../types'

export const navItems: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '文明史', path: '/civilizations' },
  { label: '哲学思想', path: '/philosophy' },
  { label: '文学世界', path: '/literature' },
  { label: '视觉艺术', path: '/art' },
  { label: '建筑空间', path: '/architecture' },
  { label: '音乐与戏剧', path: '/music' },
  { label: '书籍典藏', path: '/books' },
  { label: '关于我们', path: '/about' },
]

export const categoryMeta: Record<
  string,
  { name: string; en: string; tagline: string; description: string }
> = {
  civilizations: {
    name: '世界文明',
    en: 'World Civilizations',
    tagline: '在时间的长河中辨认人类的共同起点',
    description:
      '从尼罗河畔到爱琴海岸，从黄河流域到印度河谷，文明如同多条河流，最终汇入人类共同的精神海洋。这里记录它们的诞生、交融与回响。',
  },
  philosophy: {
    name: '哲学思想',
    en: 'Philosophy & Thought',
    tagline: '追问存在、知识与生活的意义',
    description:
      '哲学不是远离生活的玄思，而是人类面对世界时最诚实的追问。从雅典的广场到先秦的竹林，从康德的哥尼斯堡到尼采的阿尔卑斯，思想跨越时空彼此应答。',
  },
  literature: {
    name: '文学世界',
    en: 'Literature & Classics',
    tagline: '在语言的深处遇见人类的灵魂',
    description:
      '文学是人类经验的储蓄所。小说、诗歌与戏剧以想象为方法，保存了那些无法被史料记载的恐惧、渴望与顿悟，让不同时代的人得以互相理解。',
  },
  art: {
    name: '视觉艺术',
    en: 'Visual Arts',
    tagline: '观看的方式，就是理解世界的方式',
    description:
      '从洞窟壁画到当代装置，视觉艺术不断重新定义"看"的含义。每个时代的画作、雕塑与影像，都是那个时代观察自身与世界的一份视觉档案。',
  },
  architecture: {
    name: '建筑空间',
    en: 'Architecture & Space',
    tagline: '凝固的音乐，石头的史书',
    description:
      '建筑将信仰、权力与日常生活凝固为空间。神庙、教堂、宫殿与民居，既是技术的成就，也是一个时代世界观的立体表达。',
  },
  music: {
    name: '音乐与戏剧',
    en: 'Music & Theatre',
    tagline: '声音与舞台上的情感考古',
    description:
      '音乐与戏剧把最难以言说的情感变成可听、可见的形式。从交响乐的宏大结构到歌剧的命运冲突，它们记录了人类情感史最细腻的纹理。',
  },
  books: {
    name: '书籍典藏',
    en: 'The Library',
    tagline: '人类思想最持久的载体',
    description:
      '书籍让思想越过个体生命的界限。这里的每一本经典都曾改变过某些人理解世界的方式，并仍在继续改变着后来者。',
  },
  topics: {
    name: '本期专题',
    en: 'Special Feature',
    tagline: '一个主题，多种目光',
    description: '每期聚焦一个具有深度的人文议题，从多个学科与文明视角展开交叉观察。',
  },
}
