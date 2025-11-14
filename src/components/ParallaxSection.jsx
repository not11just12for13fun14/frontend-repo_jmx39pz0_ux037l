import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxSection({ id, eyebrow, title, copy, cta, accent = '#22d3ee', bg = 'from-slate-950 via-slate-900 to-slate-950' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id={id} ref={ref} className={`relative isolate overflow-hidden py-28 sm:py-36 bg-gradient-to-b ${bg}`}>
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <motion.div style={{ y: y1 }} className="absolute -left-24 top-10 h-72 w-72 rounded-full" style={{ background: `radial-gradient(circle at 30% 30%, ${accent}, transparent 60%)` }} />
        <motion.div style={{ y: y2 }} className="absolute -right-24 bottom-10 h-96 w-96 rounded-full" style={{ background: `radial-gradient(circle at 70% 70%, ${accent}, transparent 60%)` }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.span style={{ opacity }} className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70 backdrop-blur">
          {eyebrow}
        </motion.span>
        <motion.h2 style={{ y: y1, opacity }} className="mt-2 text-balance text-3xl font-semibold text-white sm:text-5xl">
          {title}
        </motion.h2>
        <motion.p style={{ y: y2, opacity }} className="mt-4 max-w-2xl text-white/80">
          {copy}
        </motion.p>
        {cta && (
          <motion.div style={{ opacity }} className="mt-8">
            <a href={cta.href} className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-medium text-slate-900 shadow-lg shadow-white/10 transition hover:scale-[1.02] hover:shadow-white/20">
              {cta.label}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
