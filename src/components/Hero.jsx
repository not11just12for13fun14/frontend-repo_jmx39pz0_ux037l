import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability (doesn't block 3D interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Building delightful web experiences
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
        >
          We build modern, fast, and playful websites
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-4 max-w-2xl text-pretty text-white/80 sm:mt-6 sm:text-lg"
        >
          A full‑stack web agency crafting interactive products with performance, accessibility, and polish.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-medium text-slate-900 shadow-lg shadow-white/10 transition hover:scale-[1.02] hover:shadow-white/20"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            See our work
          </a>
        </motion.div>
      </div>

      {/* subtle foreground sparkles */}
      <div className="pointer-events-none absolute inset-0 -translate-y-10 bg-[radial-gradient(closest-side,rgba(255,255,255,0.08),transparent)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
    </section>
  )
}
