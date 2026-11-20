import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Divider, Icon, Laurel, TempleOutline } from '../assets/svg'
import { useDocumentMeta } from '../utils/useDocumentMeta'

export function AboutPage() {
  useDocumentMeta(
    '关于我们',
    'Humanitas 是一个以人文理解世界、以艺术感知文明、以思想连接历史的数字人文知识平台。',
  )

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ label: '关于我们' }]} />
      </div>

      <header className="page-hero about-hero">
        <div className="container about-hero-grid">
          <div>
            <div className="page-hero-label">About Humanitas</div>
            <h1>关于 Humanitas</h1>
            <p className="about-lead">
              以人文理解世界，以艺术感知文明，以思想连接历史。
            </p>
          </div>
          <TempleOutline size={160} />
        </div>
      </header>

      <section className="container about-section">
        <div className="about-intro">
          <div className="section-kicker">我们的愿景 / Our Vision</div>
          <h2>一个属于中文读者的数字人文博物馆</h2>
          <p>
            Humanitas（世界人文艺术）是一个以世界文明、历史、哲学、文学、艺术、建筑、音乐与思想为核心的数字人文知识平台。我们希望做的不是又一座内容聚合站，而是一间安静、严谨、有温度的阅览室：文章经过结构与事实梳理，图片保留来源与授权记录，知识以可浏览、可检索、可延伸的方式组织。
          </p>
          <p>
            网站以编辑式设计为基调，融合数字博物馆与深度阅读杂志的气质。我们相信，内容的品质不只在于信息量，更在于结构、语境与判断力。因此，每篇文章都试图回答的不只是"是什么"，还有"为什么重要"以及"与我们此刻有何关系"。
          </p>
        </div>
        <Divider wide />
      </section>

      <section className="container about-grid-section">
        <div className="about-grid">
          <div className="about-block">
            <span className="about-number">01</span>
            <h3>编辑原则</h3>
            <p>
              所有文章都由编辑部围绕明确主题组织：引言、历史背景、发展脉络、核心人物、代表作品、分析、跨文化比较、历史影响与当代意义。我们避免虚构引文与未经核实的出版信息，并在文末列出参考资料与延伸阅读。
            </p>
          </div>
          <div className="about-block">
            <span className="about-number">02</span>
            <h3>知识体系</h3>
            <p>
              网站设有七个主要领域：世界文明、哲学思想、文学世界、视觉艺术、建筑空间、音乐与戏剧、书籍典藏。各领域下再细分主题与标签，形成可交叉检索的知识网络。
            </p>
          </div>
          <div className="about-block">
            <span className="about-number">03</span>
            <h3>图像伦理</h3>
            <p>
              本站所有图片均保存于本地，优先采用 Wikimedia Commons、The Met Open Access 等明确开放授权的公有领域资源。每张图片的来源、作者、授权方式与原始页面都记录在 image-sources.md 中。无法获得可靠图片时，我们自制 SVG 插画替代，并如实标注。
            </p>
          </div>
          <div className="about-block">
            <span className="about-number">04</span>
            <h3>技术立场</h3>
            <p>
              网站采用 Vite、React、TypeScript 与原生 CSS 构建，内容以本地结构化数据管理，不依赖后端服务或数据库。静态部署到 GitHub Pages，路由使用 HashRouter 以确保任意页面刷新都能正常访问。
            </p>
          </div>
        </div>
      </section>

      <section className="content-section tone-paper">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-kicker">Explore / 内容分类</div>
              <h2 className="section-title">从这里开始探索</h2>
            </div>
          </div>
          <Divider />
          <div className="about-category-links">
            {[
              ['/civilizations', '世界文明'],
              ['/philosophy', '哲学思想'],
              ['/literature', '文学世界'],
              ['/art', '视觉艺术'],
              ['/architecture', '建筑空间'],
              ['/music', '音乐与戏剧'],
              ['/books', '书籍典藏'],
              ['/articles', '全部文章'],
            ].map(([to, label]) => (
              <Link key={to} to={to}>
                {label} <Icon name="arrow" size={15} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container about-closing">
        <Laurel size={44} />
        <h2>知识的价值，在于被继续讨论。</h2>
        <p>
          如果你发现事实错误、图片来源问题，或希望贡献一篇文章，欢迎通过 GitHub 仓库发起 Issue 或 Pull Request。
        </p>
        <a href="https://github.com/yuxinrun/humanitas" target="_blank" rel="noreferrer" className="btn btn-primary">
          访问 GitHub 仓库 <Icon name="arrow" size={16} />
        </a>
      </section>
    </>
  )
}
