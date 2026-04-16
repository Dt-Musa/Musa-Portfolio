import { useEffect, useState } from 'react'
import profileImage from './assets/Profile/Musa.jpeg'
import projectDigitalSphereImage from './assets/projects/digitalsphere.jpg'
import projectShoebillImage from './assets/projects/shoebill.jpg'
import projectMusezeroImage from './assets/projects/musezero.jpg'
import projectJolricImage from './assets/projects/jolric.jpg'

const navLinks = ['Home', 'Work', 'About', 'Writing', 'Contact']

const projects = [
  {
    id: '01',
    title: 'DigitalSphere',
    category: 'Web3 Education Platform',
    description:
      "Africa's Home for BlockChain & Web3, focused on onboarding the next generation of blockchain builders in East Africa.",
    stack: ['React', 'Vite', 'Web3 Education'],
    live: 'https://digitalsphereug.tech',
    image: projectDigitalSphereImage,
    featured: true,
  },
  {
    id: '02',
    title: 'Shoebill Adventure',
    category: 'Tourism Website',
    description:
      'Wildlife and eco-tourism platform for Uganda experiences, designed to convert discovery into bookings with clear storytelling.',
    stack: ['HTML/CSS/JS', 'Tourism', 'Performance'],
    live: 'https://shoebilladventure.com',
    image: projectShoebillImage,
  },
  {
    id: '03',
    title: 'Musezero Foundation',
    category: 'NGO Platform',
    description:
      'Foundation website built to support community development storytelling with a clear path for partners and donors.',
    stack: ['HTML/CSS/JS', 'NGO', 'Community'],
    live: 'https://musezerofoundation.org',
    image: projectMusezeroImage,
  },
  {
    id: '04',
    title: 'JolRic Designs',
    category: 'Creative Business Site',
    description:
      'Creative business website for custom decor and fashion, deployed on Cloudflare Workers with an AI-powered assistant.',
    stack: ['Cloudflare Workers', 'AI Chatbot', 'Creative Business'],
    live: 'https://jolricdesigns.irankundamusa17.workers.dev',
    image: projectJolricImage,
  },
]

const capabilities = [
  'Frontend Product Design',
  'Responsive UI Systems',
  'Web3 Learning Products',
  'AI-assisted Experiences',
  'Deployment and Domain Setup',
  'User-first Information Architecture',
]

const currentProjects = [
  {
    title: 'DigitalSphere',
    summary:
      "Actively building and expanding DigitalSphere, Africa's Home for BlockChain & Web3, with improved onboarding, stronger content structure, and clearer learning pathways for students.",
  },
  {
    title: 'UI Refinement Initiative',
    summary:
      'Leading continuous UI refinement to improve visual clarity, accessibility, and overall product experience across current web projects.',
  },
  {
    title: 'MintLearn AI Blockchain Study Guide',
    summary:
      'Building MintLearn, an AI-powered blockchain study guide platform that helps learners generate structured study guides; once completed, learners can mint an on-chain certificate on Celo.',
  },
]

const learningFocus = [
  'React',
  'Next.js',
  'Advanced frontend architecture and performance optimization',
  'TypeScript for scalable product development',
  'Smart contract development and Web3 integration workflows',
]

const writing = [
  {
    title: 'The Room Laughed, I Stayed. Now We Are Building.',
    excerpt:
      'A personal story about conviction, resilience, and why long-term builders keep showing up.',
    link: 'https://paragraph.com/@digitalsphereug/the-room-laughed-i-stayed-now-were-building',
    image:
      'https://img.paragraph.com/cdn-cgi/image/format=auto,width=1200,quality=85/https://storage.googleapis.com/papyrus_images/f59f1c5ce50f3c1a9eecccc31fa5ebfb4e6ca5c3356a7d6c1f4189e80b579bae.jpg',
  },
  {
    title: 'DigitalSphereUg Showed Up at Kyambogo',
    excerpt:
      'What happened on campus, why momentum is growing, and why people do not want to miss what comes next.',
    link: 'https://paragraph.com/@digitalsphereug/digitalsphereug-showed-up-at-kyambogo-%E2%80%94-and-nobody-wants-to-miss-what-comes-next',
    image:
      'https://img.paragraph.com/cdn-cgi/image/format=auto,width=1200,quality=85/https://storage.googleapis.com/papyrus_images/ec7ff4475da538779f15c3a4ad300aa51cce41dc5c696736a83b48363e56754d.jpg',
  },
  {
    title: 'Celo Proof of Ship Season 2 Is Live',
    excerpt:
      'A call to action for builders who want to ship, grow publicly, and build real on-chain products.',
    link: 'https://paragraph.com/@digitalsphereug/celo-proof-of-ship-season-2-is-live-%E2%80%94-and-you-cannot-afford-to-sit-this-one-out',
    image:
      'https://img.paragraph.com/cdn-cgi/image/format=auto,width=1200,quality=85/https://storage.googleapis.com/papyrus_images/946032ade5c5e1d81e5ccfc27460a1b4a74e6bcc39e7f95bd1bb8a8ba6bd9bc2.jpg',
  },
  {
    title: 'From Meetup Confusion to Africa On-Chain Moment',
    excerpt:
      'Why RWA tokenization feels different in 2026 and what that shift means for Uganda builders.',
    link: 'https://paragraph.com/@digitalsphereug/from-confusion-in-meetups-to-africas-on-chain-moment-why-rwa-tokenization-hits-different-in-2026-%E2%80%94-and-what-it-means-for-uganda',
    image:
      'https://img.paragraph.com/cdn-cgi/image/format=auto,width=1200,quality=85/https://storage.googleapis.com/papyrus_images/1e868042e3252e8fdce739b375b8fab1b2e7a21bb8bba1463f8bc7bb138572eb.jpg',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen text-stone-100">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-zinc-800 bg-[#0c0c0f]/80 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
          <a href="#home" className="text-base font-extrabold tracking-tight text-stone-100">
            IM
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="group relative text-xs uppercase tracking-[0.08em] text-zinc-400 transition hover:text-stone-100"
              >
                {link}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9f64a] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="/cv.pdf"
              className="rounded-sm border border-[#c9f64a] px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-[#c9f64a] transition hover:bg-[#c9f64a] hover:text-black"
            >
              Resume
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:border-[#c9f64a] hover:text-[#c9f64a] md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-zinc-800 bg-[#0c0c0f]/95 transition-all duration-300 md:hidden ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-300 transition hover:text-[#c9f64a]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="home" className="mx-auto w-full max-w-7xl px-4 pb-20 pt-20 sm:px-5 md:px-10 md:pt-32">
        <section className="relative border-b border-zinc-800 pb-14 md:pb-20">
          <div className="grid items-start gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12">
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.12em] text-[#c9f64a]">
                Frontend Developer · Kampala, Uganda
              </p>
              <h1 className="mt-5 text-[3rem] leading-[0.92] font-extrabold tracking-[-0.04em] text-stone-100 sm:text-[5.2rem] md:text-[7rem]">
                Irankunda
                <br />
                <span className="text-zinc-500">Musa</span>
                <span className="text-[#c9f64a]">.</span>
              </h1>
              <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-zinc-400 md:mx-0 md:text-base">
                I build clean interfaces, practical products, and user-friendly web
                systems. I am currently exploring AI and blockchain through real projects.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href="#work"
                  className="rounded-sm bg-[#c9f64a] px-7 py-3 text-xs uppercase tracking-[0.08em] text-black transition hover:opacity-90"
                >
                  See my work
                </a>
                <a
                  href="#contact"
                  className="rounded-sm border border-zinc-700 px-7 py-3 text-xs uppercase tracking-[0.08em] text-zinc-300 transition hover:border-zinc-500 hover:text-stone-100"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div className="mx-auto mt-1 md:mx-0 md:mt-0 md:justify-self-end">
              <div className="w-[78vw] max-w-[19rem] sm:w-full sm:max-w-[18rem] md:max-w-[22rem] lg:max-w-[24rem]">
                <img
                  src={profileImage}
                  alt="Musa Irankunda"
                  className="aspect-[4/5] w-full rounded-2xl border border-zinc-800/80 object-cover object-top shadow-[0_20px_42px_-28px_rgba(0,0,0,0.85)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="border-b border-zinc-800 py-16 md:py-24" data-reveal>
          <div className="mb-10 md:mb-14">
            <p className="text-xs uppercase tracking-[0.12em] text-[#c9f64a]">Featured Work</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-100 md:text-5xl">Selected Projects</h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Product-focused work with clear outcomes, strong storytelling, and real-world deployment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`rounded-3xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-zinc-700 sm:p-6 md:p-8 ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.1em] text-[#c9f64a]">{project.id}</p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-stone-100 sm:text-2xl">{project.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.08em] text-zinc-500">{project.category}</p>

                <div className="relative mt-5 overflow-hidden rounded-2xl border border-zinc-700">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-52 w-full object-cover transition duration-500 hover:scale-[1.02] md:h-56"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-zinc-700/70 bg-black/45 px-4 py-2 backdrop-blur-sm">
                    <span className="text-[10px] uppercase tracking-[0.1em] text-zinc-300">Live Site</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] text-[#c9f64a]">{project.id}</span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300">{project.description}</p>

                {project.note ? <p className="mt-4 text-sm text-zinc-400">{project.note}</p> : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={`${project.title}-${item}`} className="rounded-full border border-zinc-700 px-3 py-1 text-[11px] text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center text-xs uppercase tracking-[0.08em] text-[#c9f64a] transition hover:text-[#dafd7b]"
                >
                  Visit Live Site {'->'}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-b border-zinc-800 py-16 md:py-24" data-reveal>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[#c9f64a]">About</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-100 md:text-5xl">Building For Real Use</h2>
              <p className="mt-6 text-sm leading-relaxed text-zinc-400 md:text-base">
                I am a self-driven frontend developer based in Kampala, Uganda. I focus on
                clean interfaces and practical user experiences.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
                Beyond client work, I lead digitalSphere, Africa&apos;s Home for BlockChain &amp; Web3,
                supporting practical Web3 learning for students across East Africa.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[#c9f64a]">Capabilities</p>
              <div className="mt-5 grid gap-3">
                {capabilities.map((item) => (
                  <div key={item} className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-800 py-16 md:py-24" data-reveal>
          <div className="mb-10 md:mb-14">
            <p className="text-xs uppercase tracking-[0.12em] text-[#c9f64a]">Current Focus</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-100 md:text-5xl">
              What I Am Building and Learning
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6 md:p-7">
              <h3 className="text-xl font-bold tracking-tight text-stone-100">Currently Building</h3>
              <div className="mt-5 space-y-4">
                {currentProjects.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
                    <p className="text-sm font-semibold text-stone-100">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.summary}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6 md:p-7">
              <h3 className="text-xl font-bold tracking-tight text-stone-100">Currently Learning</h3>
              <div className="mt-5 space-y-3">
                {learningFocus.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="writing" className="border-b border-zinc-800 py-16 md:py-24" data-reveal>
          <div className="mb-10 md:mb-14">
            <p className="text-xs uppercase tracking-[0.12em] text-[#c9f64a]">Writing & Insights</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-100 md:text-5xl">Design Thoughts</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {writing.map((article) => (
              <article key={article.title} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
                <div className="mb-5 overflow-hidden rounded-xl border border-zinc-800">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-44 w-full object-cover transition duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-stone-100">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{article.excerpt}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex text-xs uppercase tracking-[0.08em] text-[#c9f64a] transition hover:text-[#dafd7b]"
                >
                  Read Article {'->'}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24" data-reveal>
          <div className="grid gap-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-7 md:grid-cols-2 md:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[#c9f64a]">Get in Touch</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-stone-100 md:text-5xl">Let&apos;s Build Something Great</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
                Great ideas deserve exceptional execution. Send a message and I will respond.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
              <label className="block text-sm text-zinc-300">
                Name
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-zinc-700 bg-black/20 px-4 py-2.5 text-sm text-stone-100 outline-none transition focus:border-[#c9f64a]"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm text-zinc-300">
                Email
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-zinc-700 bg-black/20 px-4 py-2.5 text-sm text-stone-100 outline-none transition focus:border-[#c9f64a]"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block text-sm text-zinc-300">
                Message
                <textarea
                  rows="4"
                  className="mt-2 w-full resize-none rounded-xl border border-zinc-700 bg-black/20 px-4 py-2.5 text-sm text-stone-100 outline-none transition focus:border-[#c9f64a]"
                  placeholder="Tell me about your project"
                />
              </label>
              <button
                type="submit"
                className="inline-flex rounded-sm bg-[#c9f64a] px-6 py-2.5 text-xs uppercase tracking-[0.08em] text-black transition hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-700 bg-zinc-950 px-5 py-10 md:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-2xl font-extrabold tracking-tight text-stone-100">MUSA</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
              Frontend developer building clear, high-impact digital experiences and practical Web3 learning products.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/musa-irankunda-2073a2322?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:border-[#c9f64a] hover:text-[#c9f64a]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3C4.14 3 3.24 3.9 3.24 5.01S4.14 7.02 5.25 7.02s2.01-.9 2.01-2.01S6.36 3 5.25 3zM20.76 13.35c0-3.14-1.68-4.6-3.92-4.6-1.8 0-2.61.99-3.06 1.69V8.5h-3.38V20h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.9-1.38 1.95-1.38 1.38 0 1.93 1.05 1.93 2.59V20h3.38v-6.65z" />
                </svg>
              </a>

              <a
                href="https://github.com/Dt-Musa"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:border-[#c9f64a] hover:text-[#c9f64a]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.21.68-.48v-1.67c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.45-1.11-1.45-.9-.62.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.88 1.52 2.31 1.08 2.88.82.09-.64.34-1.08.62-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.11-.25-.45-1.27.1-2.64 0 0 .85-.27 2.78 1.03a9.68 9.68 0 015.06 0c1.93-1.3 2.77-1.03 2.77-1.03.56 1.37.22 2.39.11 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.35.3.67.9.67 1.82v2.7c0 .27.18.58.69.48A10 10 0 0012 2z" />
                </svg>
              </a>

              <a
                href="https://x.com/irankundaMusa"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:border-[#c9f64a] hover:text-[#c9f64a]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M18.9 2H22l-6.77 7.73L23 22h-6.1l-4.77-6.23L6.67 22H3.56l7.24-8.28L1 2h6.25l4.31 5.71L18.9 2zm-1.07 18h1.69L6.31 3.9H4.5L17.83 20z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.1em] text-zinc-500">Navigation</p>
              <div className="mt-3 space-y-2 text-sm text-zinc-300">
                <a href="#home" className="block transition hover:text-[#c9f64a]">Home</a>
                <a href="#work" className="block transition hover:text-[#c9f64a]">Work</a>
                <a href="#about" className="block transition hover:text-[#c9f64a]">About</a>
                <a href="#writing" className="block transition hover:text-[#c9f64a]">Writing</a>
                <a href="#contact" className="block transition hover:text-[#c9f64a]">Contact</a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.1em] text-zinc-500">Contact</p>
              <div className="mt-3 space-y-2 text-sm text-zinc-300">
                <a href="mailto:irankundamusa17@gmail.com" className="block transition hover:text-[#c9f64a]">
                  irankundamusa17@gmail.com
                </a>
                <p>Kampala, Uganda</p>
                <a href="/cv.pdf" className="inline-flex text-sm transition hover:text-[#c9f64a]">Download Resume</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-start justify-between gap-2 border-t border-zinc-800 pt-4 text-xs text-zinc-500 md:flex-row md:items-center">
          <p>Copyright 2026 Irankunda Musa</p>
          <p>Designed with intention and clarity.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
