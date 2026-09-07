import { ArrowUpRight, Check, Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import './App.css'
import { initHeroAnimation } from './animations/heroAnimations'
import { personal } from './data/personal'
import { skills } from './data/skills'
import { experience } from './data/experience'
import { education } from './data/education'
import { certifications } from './data/certifications'
import { socialLinks } from './data/socialLinks'

const navItems = ['about', 'skills', 'experience', 'education', 'contact']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('idle')

  useEffect(() => initHeroAnimation(), [])

  const submitForm = async (event) => {
    event.preventDefault()
    setFormStatus('submitting')

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'New portfolio contact from Abhishek Mane')
    formData.append('from_name', 'Abhishek Mane Portfolio')

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const result = await response.json()
      if (!result.success) throw new Error(result.message)
      form.reset()
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#top">AM<span>.</span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </div>
        <a className="resume-link" href="/assets/resume/Abhishek_Resume.pdf">Resume <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-copy reveal-hero"><p className="eyebrow">01 / AVAILABLE FOR OPPORTUNITIES</p><h1>Front-end<br /><em>developer</em></h1><p className="hero-intro">Building responsive, scalable interfaces that make complex systems feel simple.</p><a className="circle-link" href="#contact" aria-label="Go to contact"><ArrowUpRight size={22} /></a></div>
        <div className="portrait-wrap reveal-hero"><div className="portrait-ring"></div><img src="/assets/images/profile.png" alt="Abhishek Mane, Front-End Developer" /></div>
        <div className="hero-meta reveal-hero"><span className="meta-label">BASED IN</span><strong>Pune, India</strong><span className="meta-label">SPECIALIZING IN</span><strong>React.js<br />TypeScript<br />REST APIs</strong><div className="hero-status"><i></i> Open to work</div></div><div className="scroll-cue"><span>SCROLL TO EXPLORE</span><b></b></div>
      </section>
      <section className="section about-section" id="about"><div className="section-label">// 01 PROFILE</div><div className="section-content"><h2>Building interfaces.<br /><span>Understanding systems.</span></h2><div className="about-bottom"><p className="lead">I am a Front-End Developer focused on building responsive, scalable and business-oriented web applications using React and TypeScript.</p><div className="facts"><div><span>ROLE</span><strong>Front-End Developer</strong></div><div><span>DOMAIN</span><strong>Co-operative Banking</strong></div><div><span>EXPERIENCE</span><strong>1 year hands-on</strong></div></div></div></div></section>
      <section className="section skills-section" id="skills"><div className="section-label">// 02 TOOLKIT</div><div className="section-content"><h2>Tools for turning<br /><span>ideas into interfaces.</span></h2><div className="skill-grid">{skills.map((group, index) => <article className="skill-card" key={group.title}><span className="card-index">0{index + 1}</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
      <section className="section experience-section" id="experience"><div className="section-label">// 03 EXPERIENCE</div><div className="section-content"><h2>Working where<br /><span>details matter.</span></h2><article className="experience-card"><div className="experience-head"><div><span className="eyebrow">{experience.role}</span><h3>{experience.company}</h3></div><span className="date">{experience.startDate} — Present</span></div><p className="experience-summary">Frontend contributor for a co-operative banking application, translating business workflows into dependable product experiences.</p><ul className="responsibilities">{experience.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></article></div></section>
      <section className="section project-section"><div className="section-label">// 04 FEATURED WORK</div><div className="section-content"><div className="project-panel"><div className="project-top"><span className="eyebrow">PROFESSIONAL EXPERIENCE / 2025</span><ArrowUpRight size={30} /></div><h2>Co-operative<br /><span>Banking Application</span></h2><p>A frontend contribution to day-to-day banking operations and workflows, with a focus on API integration and reusable React architecture.</p><div className="project-tags">{['Client Management', 'Accounts', 'Authentication', 'Dashboard', 'Fixed Deposit', 'Loans'].map((tag) => <span key={tag}>{tag}</span>)}</div><div className="tech-line">React.js <b>•</b> TypeScript <b>•</b> REST APIs <b>•</b> Swagger</div></div></div></section>
      <section className="section education-section" id="education"><div className="section-label">// 05 EDUCATION</div><div className="section-content"><h2>Always in<br /><span>learning mode.</span></h2><div className="education-list">{education.map((item) => <div className="education-item" key={item.degree}><span>{item.period}</span><div><h3>{item.degree}</h3><p>{item.institution}</p><strong>{item.score}</strong></div></div>)}</div><div className="certs">{certifications.map((item) => <div key={item.title}><span>CERTIFICATION</span><strong>{item.title}</strong><p>{item.issuer}</p></div>)}</div></div></section>
      <section className="contact-section" id="contact"><div className="contact-intro"><div className="section-label">// CONTACT SESSION</div><h2>Let's build something<br /><em>exceptional.</em></h2><p>Have an opportunity, project or technical discussion? Let's connect.</p><div className="social-links"><a href={`mailto:${personal.email}`}><Mail size={16} /> Email</a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><span>in</span> LinkedIn</a><a href={socialLinks.github} target="_blank" rel="noreferrer"><span>gh</span> GitHub</a></div></div><form className="contact-form" onSubmit={submitForm}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows="4" placeholder="Tell me about your project"></textarea></label><button type="submit" disabled={formStatus === 'submitting'}>{formStatus === 'success' ? <><Check size={16} /> Message sent</> : formStatus === 'submitting' ? 'Sending...' : formStatus === 'error' ? 'Try again' : 'Send message'} <ArrowUpRight size={17} /></button></form></section>
      <footer><span>© 2026 Abhishek Mane</span><span>Front-End Developer <b>•</b> React <b>•</b> TypeScript</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}

export default App
