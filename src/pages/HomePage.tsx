import { Link } from 'react-router-dom'
import { Section } from '../components/Section'
import { ArticleCard, BookCard, ProfileCardView, TopicTile } from '../components/Cards'
import { SmartImage } from '../components/SmartImage'
import { Divider, Icon, Laurel, MeanderPattern } from '../assets/svg'
import { getFeaturedArticles } from '../content/articles'
import { books } from '../content/books'
import {
  architectureLandmarks,
  artMovements,
  civilizationTopics,
  featuredTopic,
  literatureClassics,
  musicProfiles,
  philosopherProfiles,
} from '../data/home'
import { useDocumentMeta } from '../utils/useDocumentMeta'

export function HomePage() {
  useDocumentMeta(
    undefined,
    '从古老文明到现代思想，从艺术杰作到文学经典，在文明的长河中重新发现人类的精神世界。',
  )

  const featured = getFeaturedArticles(6)
  const recommendedBooks = books.slice(0, 4)

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker">THE WORLD OF HUMANITIES &amp; ARTS</div>
            <h1 className="hero-title">
              在文明的长河中，<br />
              重新发现人类的<span className="hero-accent">精神世界</span>。
            </h1>
            <p className="hero-subtitle">
              从古老文明到现代思想，从艺术杰作到文学经典，探索人类创造、思考与表达的无限可能。
            </p>
            <div className="hero-actions">
              <Link to="/civilizations" className="btn btn-primary">
                开始探索 <Icon name="arrow" size={17} />
              </Link>
              <Link to="/articles" className="btn btn-outline">
                阅读精选
              </Link>
            </div>
            <div className="hero-stats">
              <div><strong>24</strong><span>深度文章</span></div>
              <div><strong>22</strong><span>经典著作</span></div>
              <div><strong>7</strong><span>知识领域</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <SmartImage
                src="images/hero/hero-school-of-athens.jpg"
                alt="拉斐尔《雅典学院》，古典人文精神的视觉象征"
                className="hero-image"
                eager
              />
              <div className="hero-image-caption">
                <span>fig. 01</span>
                拉斐尔，《雅典学院》，1509—1511 年 · 梵蒂冈签字厅
              </div>
            </div>
            <Laurel size={48} />
          </div>
        </div>
        <div className="hero-meander"><MeanderPattern width={480} /></div>
      </section>

      <Section
        kicker="编辑精选 / Editor's Selection"
        title="值得慢读的深度文章"
        en="Selected Reading"
        description="每一篇都经过资料核查与思想梳理，试图在信息碎片之外，提供可沉淀的理解。"
        actionLabel="全部文章"
        actionTo="/articles"
        tone="paper"
      >
        <div className="featured-grid">
          {featured.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Section>

      <Section
        kicker="文明图谱 / Civilizations"
        title="探索人类文明"
        en="A Map of Civilizations"
        description="十条文明线索，勾勒人类从河流走向帝国、从神话走向理性的漫长旅程。"
        actionLabel="世界文明"
        actionTo="/civilizations"
      >
        <div className="topic-grid topic-grid-five">
          {civilizationTopics.map((topic, index) => (
            <TopicTile key={topic.id} topic={topic} index={index} />
          ))}
        </div>
      </Section>

      <Section
        kicker="思想者 / Thinkers"
        title="思想与哲学"
        en="Philosophy & Thought"
        description="十位哲人，十种理解世界的方式。他们的追问跨越千年，至今仍在回应我们的生活。"
        actionLabel="哲学思想"
        actionTo="/philosophy"
        tone="paper"
      >
        <div className="profile-grid">
          {philosopherProfiles.map((profile) => (
            <ProfileCardView key={profile.id} profile={profile} />
          ))}
        </div>
      </Section>

      <Section
        kicker="风格史 / Movements"
        title="世界艺术长廊"
        en="A Gallery of Art Movements"
        description="从古典到当代，九个艺术流派构成一部观看方式的演变史。"
        actionLabel="视觉艺术"
        actionTo="/art"
      >
        <div className="movement-grid">
          {artMovements.map((movement, index) => (
            <TopicTile key={movement.id} topic={movement} index={index} />
          ))}
        </div>
      </Section>

      <Section
        kicker="文学经典 / Literature"
        title="文学与经典"
        en="The Literary Canon"
        description="那些被反复阅读、翻译与争论的作品，保存了人类经验中最幽微的部分。"
        actionLabel="文学世界"
        actionTo="/literature"
        tone="paper"
      >
        <div className="classic-grid">
          {literatureClassics.map((item) => (
            <TopicTile key={item.id} topic={item} />
          ))}
        </div>
      </Section>

      <Section
        kicker="空间诗学 / Architecture"
        title="建筑与空间"
        en="Architecture & Space"
        description="石头与光写成的史书。六座建筑，六个时代对永恒的不同理解。"
        actionLabel="建筑空间"
        actionTo="/architecture"
      >
        <div className="classic-grid">
          {architectureLandmarks.map((item) => (
            <TopicTile key={item.id} topic={item} />
          ))}
        </div>
      </Section>

      <Section
        kicker="声音的记忆 / Music"
        title="音乐与戏剧"
        en="Music & Theatre"
        description="从巴赫的对位到马勒的宇宙，音乐家用声音建构了人类情感的历史。"
        actionLabel="音乐与戏剧"
        actionTo="/music"
        tone="paper"
      >
        <div className="profile-grid profile-grid-three">
          {musicProfiles.map((profile) => (
            <ProfileCardView key={profile.id} profile={profile} />
          ))}
        </div>
      </Section>

      <Section
        kicker="典藏书架 / The Library"
        title="经典书籍推荐"
        en="Recommended Classics"
        description="经过时间筛选的著作，每一本都曾改变过人们理解世界的方式。"
        actionLabel="书籍典藏"
        actionTo="/books"
      >
        <div className="book-grid">
          {recommendedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </Section>

      <section className="feature-topic tone-paper">
        <div className="container feature-topic-grid">
          <div className="feature-topic-image">
            <SmartImage src={featuredTopic.image} alt="本期专题：光的历史" className="feature-image" />
            <div className="feature-badge">{featuredTopic.number}</div>
          </div>
          <div className="feature-topic-copy">
            <div className="section-kicker">{featuredTopic.kicker}</div>
            <h2>{featuredTopic.title}</h2>
            <div className="feature-subtitle">{featuredTopic.subtitle}</div>
            <p>{featuredTopic.description}</p>
            <Divider />
            <ol className="feature-chapters">
              {featuredTopic.sections.map((section, index) => (
                <li key={section.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{section.title}</strong>
                    <p>{section.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/articles" className="btn btn-primary">
              阅读相关专题 <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="container manifesto-inner">
          <Laurel size={40} />
          <p>以人文理解世界，以艺术感知文明，以思想连接历史。</p>
          <Link to="/about" className="text-link">了解 Humanitas <Icon name="arrow" size={15} /></Link>
        </div>
      </section>
    </>
  )
}
