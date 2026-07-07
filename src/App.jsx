import { useState } from 'react'
import './App.css'


const stats = [
  { value: '24k+', label: 'members in the circle' },
  { value: '180+', label: 'curated mentors' },
  { value: '97%', label: 'satisfaction rate' },
]

import dadImage from '../daddy.jpg'

const leaders = [
  {
    name: 'Mina Alvarez',
    role: 'Founder & Business Director',
    bio: 'Global business strategist with a record of launching high-impact ventures across continents.',
    expertise: ['Business strategy', 'Brand growth'],
    image: dadImage,
  },
  {
    name: 'Theo Bennett',
    role: 'Head of Community & Growth',
    bio: 'Builds literary ecosystems that connect authors, agents, and readers with lasting momentum.',
    expertise: ['Community design', 'Publishing partnerships'],
  },
  {
    name: 'Selene Park',
    role: 'Creative Innovation Lead',
    bio: 'Shapes immersive experiences for books, podcasts, and digital publishing campaigns.',
    expertise: ['Editorial systems', 'Audience expansion'],
  },
]

const teamMembers = [
  {
    name: 'Aisha Rowe',
    role: 'Book Coach',
    bio: 'Guides emerging authors through concept, structure, and voice refinement.',
    skills: ['Developmental editing', 'Voice coaching'],
  },
  {
    name: 'Luca Mendes',
    role: 'Ghostwriter',
    bio: 'Creates polished memoirs and thought leadership books with a cinematic cadence.',
    skills: ['Memoir', 'Executive thought leadership'],
  },
  {
    name: 'Nadia Bhatt',
    role: 'Literary Strategist',
    bio: 'Aligns publishing plans with audience insight and market readiness.',
    skills: ['Positioning', 'Launch planning'],
  },
]

const communityMembers = [
  {
    name: 'Rory Chen',
    focus: 'Historical fiction',
    bio: 'Crafting emotionally rich novels that explore memory and belonging.',
  },
  {
    name: 'Leila Ortiz',
    focus: 'Essay & memoir',
    bio: 'Building intimate voices for personal narratives and cultural reflection.',
  },
  {
    name: 'Jules Mercer',
    focus: 'Children’s publishing',
    bio: 'Designing story worlds with warmth, wonder, and educational depth.',
  },
]

const directoryEntries = [
  { name: 'Mina Alvarez', role: 'Editor', genre: 'Literary', location: 'London', status: 'Featured' },
  { name: 'Theo Bennett', role: 'Mentor', genre: 'Business', location: 'Toronto', status: 'New' },
  { name: 'Nadia Bhatt', role: 'Publisher', genre: 'Commercial', location: 'Dubai', status: 'Featured' },
]

const books = [
  { title: 'The Quiet Atlas', author: 'Rory Chen', genre: 'Historical Fiction', status: 'Bestseller' },
  { title: 'Ink & Air', author: 'Leila Ortiz', genre: 'Memoir', status: 'New Release' },
  { title: 'The Lantern Guild', author: 'Jules Mercer', genre: 'Children’s', status: 'Award Shortlist' },
]

const posts = [
  { title: 'How premium authors build trust before launch', readTime: '6 min read' },
  { title: 'The modern editorial workflow for global audiences', readTime: '5 min read' },
  { title: 'Why community-led publishing beats isolated launches', readTime: '7 min read' },
]

const resources = [
  { title: 'Writing Guide', type: 'PDF' },
  { title: 'Publishing Checklist', type: 'Template' },
  { title: 'Story Structure Lab', type: 'Video Lesson' },
]

const events = [
  { title: 'Author Circle Live', date: '12 Aug · London' },
  { title: 'Book Launch Masterclass', date: '20 Sep · Online' },
  { title: 'Publishing Summit', date: '04 Oct · New York' },
]

const testimonials = [
  {
    quote: 'AuthorGuide gave our team the editorial confidence to launch with clarity and prestige.',
    author: 'Elena Moris',
    role: 'Publisher, Northstar House',
  },
  {
    quote: 'The mentorship experience felt as elevated as a luxury studio session.',
    author: 'Marcus Vale',
    role: 'Author & Speaker',
  },
  {
    quote: 'Every touchpoint was thoughtful, polished, and deeply strategic.',
    author: 'Priya Shah',
    role: 'Founder, StoryCraft Lab',
  },
]

const faqs = [
  {
    question: 'Who is AuthorGuide for?',
    answer: 'We support authors, editors, ghostwriters, publishers, mentors, and literary professionals seeking premium guidance.',
  },
  {
    question: 'Can I access resources as a member?',
    answer: 'Yes. Members receive curated templates, workshops, and editorial frameworks built for growth.',
  },
  {
    question: 'Do you support international teams?',
    answer: 'Absolutely. Our network spans major publishing markets and offers remote collaboration at scale.',
  },
]

function App() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="AuthorGuide home">
          <img className="brand-logo" src="/logo-black.svg" alt="AuthorGuide logo" />
          <span>
            <strong>AuthorGuide</strong>
            <small>by Delight Team</small>
          </span>
        </a>
        <nav className="topnav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#leadership">Leadership</a>
          <a href="#directory">Directory</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="ghost-btn" href="#contact">
          Join the Circle
        </a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Global community for authors, editors & publishing leaders</p>
            <h1>Where visionary stories meet a world-class literary network.</h1>
            <p className="lead">
              AuthorGuide is a premium ecosystem for writers, mentors, editors, and publishers building exceptional books and lasting influence.
            </p>
            <p className="subline">Proudly developed by Delight Team.</p>
            <div className="hero-actions">
              <a className="primary-btn" href="#directory">
                Explore the Directory
              </a>
              <a className="secondary-btn" href="#leadership">
                Meet the Leadership
              </a>
            </div>
            <div className="stats-grid" aria-label="AuthorGuide impact statistics">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="glass-panel hero-panel">
              <div className="panel-top">
                <span className="pill">Featured Voices</span>
                <span className="pill alt">Trusted by 120+ publishers</span>
              </div>
              <ul className="featured-list">
                <li>
                  <strong>Rory Chen</strong>
                  <span>Historical fiction · London</span>
                </li>
                <li>
                  <strong>Selene Park</strong>
                  <span>Creative strategy · New York</span>
                </li>
                <li>
                  <strong>Mina Alvarez</strong>
                  <span>Editorial direction · Madrid</span>
                </li>
              </ul>
              <div className="panel-bottom">
                <span>Live mentorship rooms</span>
                <strong>Every week</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-grid" id="about">
          <div className="section-heading">
            <p className="eyebrow">About AuthorGuide</p>
            <h2>A luxurious platform for excellence in business and publishing.</h2>
            <p>
              We combine editorial discipline, community energy, and modern strategy to help talented voices stand out with distinction.
            </p>
          </div>
          <div className="about-grid">
            <article className="info-card">
              <h3>Mission</h3>
              <p>Elevate authorship with world-class mentorship, thoughtful collaboration, and publishing depth.</p>
            </article>
            <article className="info-card">
              <h3>Vision</h3>
              <p>Build a global, inspiring network where literary excellence becomes visible, sustainable, and celebrated.</p>
            </article>
            <article className="info-card">
              <h3>Values</h3>
              <p>Craft, trust, originality, mentorship, and enduring community shape every experience we create.</p>
            </article>
          </div>
        </section>

        <section className="section" id="leadership">
          <div className="section-heading">
            <p className="eyebrow">Leadership</p>
            <h2>Curated guidance from the architects of literary growth.</h2>
          </div>
          <div className="card-grid three-up">
            {leaders.map((leader) => (
              <article className="glass-card" key={leader.name}>
                {leader.image ? (
                  <img className="leader-image" src={leader.image} alt={leader.name} />
                ) : (
                  <div className="avatar">{leader.name.split(' ').map((part) => part[0]).join('')}</div>
                )}
                <h3>{leader.name}</h3>
                <p className="role">{leader.role}</p>
                <p>{leader.bio}</p>
                <div className="chip-row">
                  {leader.expertise.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="team">
          <div className="section-heading">
            <p className="eyebrow">Team Members</p>
            <h2>Specialists across strategy, writing, and publishing.</h2>
          </div>
          <div className="card-grid three-up">
            {teamMembers.map((member) => (
              <article className="feature-card" key={member.name}>
                <div className="mini-avatar">{member.name.split(' ').map((part) => part[0]).join('')}</div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p>{member.bio}</p>
                <div className="chip-row">
                  {member.skills.map((skill) => (
                    <span className="chip" key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="community">
          <div className="section-heading">
            <p className="eyebrow">Community</p>
            <h2>Members shaping the next generation of stories.</h2>
          </div>
          <div className="card-grid three-up">
            {communityMembers.map((member) => (
              <article className="community-card" key={member.name}>
                <h3>{member.name}</h3>
                <p className="role">{member.focus}</p>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="directory">
          <div className="section-heading">
            <p className="eyebrow">Directory</p>
            <h2>Searchable access to mentors, publishers, and creative collaborators.</h2>
          </div>
          <div className="directory-toolbar">
            <input aria-label="Search directory" placeholder="Search by name or specialty" />
            <div className="chip-row">
              <span className="chip">Genre</span>
              <span className="chip">Country</span>
              <span className="chip">Experience</span>
              <span className="chip">Featured</span>
            </div>
          </div>
          <div className="card-grid three-up">
            {directoryEntries.map((entry) => (
              <article className="directory-card" key={entry.name}>
                <div className="directory-top">
                  <h3>{entry.name}</h3>
                  <span className="status">{entry.status}</span>
                </div>
                <p>{entry.role}</p>
                <p>{entry.genre} · {entry.location}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="books">
          <div className="section-heading">
            <p className="eyebrow">Books</p>
            <h2>Elegant showcases for the stories shaping the literary landscape.</h2>
          </div>
          <div className="card-grid three-up">
            {books.map((book) => (
              <article className="book-card" key={book.title}>
                <div className="book-cover" />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.genre}</p>
                <span className="status">{book.status}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="blog">
          <div className="section-heading">
            <p className="eyebrow">Blog</p>
            <h2>Editorial thinking for authors building enduring influence.</h2>
          </div>
          <div className="card-grid three-up">
            {posts.map((post) => (
              <article className="blog-card" key={post.title}>
                <h3>{post.title}</h3>
                <p>{post.readTime}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="resources">
          <div className="section-heading">
            <p className="eyebrow">Resources</p>
            <h2>Downloadable frameworks and lessons created for ambitious writers.</h2>
          </div>
          <div className="card-grid three-up">
            {resources.map((resource) => (
              <article className="resource-card" key={resource.title}>
                <h3>{resource.title}</h3>
                <p>{resource.type}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="events">
          <div className="section-heading">
            <p className="eyebrow">Events</p>
            <h2>Immersive gatherings, workshops, and global publishing moments.</h2>
          </div>
          <div className="card-grid three-up">
            {events.map((event) => (
              <article className="event-card" key={event.title}>
                <h3>{event.title}</h3>
                <p>{event.date}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="section-heading">
            <p className="eyebrow">Testimonials</p>
            <h2>Trusted by leaders who value polish, strategy, and culture.</h2>
          </div>
          <div className="card-grid three-up">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.author}>
                <p>“{item.quote}”</p>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Answers for members, collaborators, and future partners.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <article className={`faq-item ${isOpen ? 'open' : ''}`} key={item.question}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                    <span>{item.question}</span>
                    <span>{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen ? <p>{item.answer}</p> : null}
                </article>
              )
            })}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s shape the next chapter of your literary career.</h2>
              <p>Book a private consultation with our editorial team and discover the right next step.</p>
            </div>
            <form className="contact-form">
              <input placeholder="Your name" />
              <input placeholder="Email address" />
              <textarea placeholder="Tell us about your project" rows="4" />
              <button type="button" className="primary-btn">Request a Consultation</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>AuthorGuide</strong>
          <p>Premium publishing collaboration for ambitious stories.</p>
        </div>
        <div>
          <a href="#about">About</a>
          <a href="#directory">Directory</a>
          <a href="#blog">Blog</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
          <a href="#resources">Resources</a>
          <a href="#events">Events</a>
        </div>
      </footer>

      <button
        type="button"
        className="fab"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  )
}

export default App
