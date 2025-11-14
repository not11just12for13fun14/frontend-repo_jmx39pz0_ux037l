import React, { useEffect, useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, Code2, Sparkles, Layout, PenTool, Rocket } from 'lucide-react'

function useScroll() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const onScroll = () => setY(window.scrollY || window.pageYOffset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return y
}

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl border border-white/20 bg-white/60 dark:bg-black/40 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 via-violet-500 to-fuchsia-500" />
              <span className="font-bold text-lg">BlueWave Studio</span>
            </a>
            <div className="hidden md:flex items-center gap-1">
              {links.map(l => (
                <a key={l.href} href={l.href} className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/70 transition">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow hover:opacity-95">
                Start a project <ArrowRight size={16} />
              </a>
            </div>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/70" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 grid gap-2">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/70 transition">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow">
                Start a project <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const y = useScroll()
  const layers = useMemo(() => ({
    far: y * 0.1,
    mid: y * 0.2,
    near: y * 0.35,
  }), [y])

  return (
    <section id="home" className="relative min-h-[120vh] flex items-center overflow-hidden">
      {/* Background gradient layers */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -top-1/3 -left-1/4 h-[80vh] w-[80vh] rounded-full bg-blue-500/20 blur-3xl" style={{ transform: `translateY(${layers.far}px)` }} />
        <div className="absolute -bottom-1/4 -right-1/4 h-[70vh] w-[70vh] rounded-full bg-fuchsia-500/20 blur-3xl" style={{ transform: `translateY(${layers.mid}px)` }} />
        <div className="absolute top-1/4 right-1/3 h-64 w-64 rounded-full bg-indigo-500/30 blur-2xl" style={{ transform: `translateY(${layers.near}px)` }} />
      </div>

      <div className="mx-auto grid max-w-7xl w-full grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pt-28 lg:pt-36">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 backdrop-blur px-3 py-1 text-xs font-semibold text-gray-700">
              <Sparkles size={14} className="text-indigo-600" /> Interactive. Playful. Modern.
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              We craft delightful web experiences
            </h1>
            <p className="mt-5 max-w-xl text-gray-600 text-base sm:text-lg">
              A full‑stack web development agency building fast, scalable products with cutting‑edge design and playful 3D interactions.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow">
                Get a free proposal <ArrowRight size={16} />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-white">
                View our work
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Code2 className="text-blue-600" size={18} /> Next.js / React</div>
              <div className="flex items-center gap-2"><Layout className="text-violet-600" size={18} /> Tailwind UI</div>
              <div className="flex items-center gap-2"><Rocket className="text-fuchsia-600" size={18} /> Fast delivery</div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] -mb-24 lg:mb-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 rounded-3xl overflow-hidden border border-white/20 bg-white/40 backdrop-blur-xl shadow-2xl">
            {/* Spline scene as hero object */}
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
          </motion.div>
        </div>
      </div>

      {/* Floating decorative shapes parallax */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-24 h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 opacity-70" style={{ transform: `translateY(${layers.far}px)` }} />
        <div className="absolute right-20 top-40 h-16 w-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 opacity-60" style={{ transform: `translateY(${layers.mid}px)` }} />
        <div className="absolute left-1/2 bottom-16 h-12 w-12 -translate-x-1/2 rotate-12 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 opacity-70" style={{ transform: `translateY(${layers.near}px)` }} />
      </div>
    </section>
  )
}

function Services() {
  const y = useScroll()
  const t = (speed) => ({ transform: `translateY(${(y * speed).toFixed(2)}px)` })
  const items = [
    { icon: <Layout />, title: 'Product Design', desc: 'UX research, wireframes, and high‑fidelity UI with motion.' },
    { icon: <Code2 />, title: 'Web Engineering', desc: 'Modern stacks, scalable APIs, and cloud‑ready deployments.' },
    { icon: <PenTool />, title: 'Brand & Visuals', desc: 'Crisp brand systems with playful 3D and micro‑interactions.' },
  ]
  return (
    <section id="services" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/0 to-white" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-extrabold text-center">
          What we do
        </motion.h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">End‑to‑end product teams building experiences your users will love.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div key={it.title} style={t(0.05 * (i + 1))} whileHover={{ y: -4 }} className="group rounded-2xl border border-white/30 bg-white/70 backdrop-blur-xl p-6 shadow-lg">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                {it.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                Learn more <ArrowRight size={14} className="group-hover:translate-x-0.5 transition" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const y = useScroll()
  const t = (speed) => ({ transform: `translateY(${(y * speed).toFixed(2)}px)` })
  const projects = [
    { name: 'Nova Commerce', tag: 'E‑commerce', color: 'from-indigo-500 to-purple-500' },
    { name: 'Pulse SaaS', tag: 'Dashboard', color: 'from-blue-500 to-cyan-500' },
    { name: 'Orbit Studio', tag: 'Portfolio', color: 'from-fuchsia-500 to-rose-500' },
  ]
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Selected work</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">A peek at the kind of polish and performance we bring to every build.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={p.name} className="rounded-2xl overflow-hidden border border-white/30 bg-white/70 backdrop-blur-xl shadow-lg">
              <div className={`h-44 bg-gradient-to-br ${p.color}`} style={t(0.04 * (i + 1))} />
              <div className="p-5">
                <span className="text-xs font-semibold text-gray-500">{p.tag}</span>
                <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { title: 'Discover', desc: 'We align on goals, audience, and measure of success.' },
    { title: 'Design', desc: 'Wireframes → UI kit → motion → design system.' },
    { title: 'Build', desc: 'Composable components, clean code, CI/CD.' },
    { title: 'Launch', desc: 'Perf audits, analytics, and a celebratory deploy.' },
  ]
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Our process</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i, duration: 0.4 }} className="rounded-2xl border border-white/30 bg-white/70 backdrop-blur-xl p-6 text-center shadow-lg">
              <div className="mx-auto h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600" />
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/30 bg-white/80 backdrop-blur-xl p-8 shadow-2xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold">Let’s build something brilliant</h2>
              <p className="mt-3 text-gray-600">Tell us about your goals and we’ll put together a tailored plan, timeline, and cost estimate.</p>
              <div className="mt-6 space-y-2 text-sm text-gray-600">
                <p>Response within 24 hours</p>
                <p>Average project kickoff in 7 days</p>
              </div>
            </div>
            <form className="grid gap-4">
              <input className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
              <input className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" />
              <input className="w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company / Website (optional)" />
              <textarea className="min-h-[120px] w-full rounded-xl border border-gray-300 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your project" />
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow hover:opacity-95">
                Request proposal <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative pb-12 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 via-violet-500 to-fuchsia-500" />
            <span className="font-semibold">BlueWave Studio</span>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} BlueWave Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.08),transparent_40%)]">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}
