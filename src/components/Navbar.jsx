import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/60 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-gradient-to-tr from-cyan-400 to-emerald-400" />
          <span className="text-sm font-semibold tracking-wide text-white/90">Flames Agency</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <button className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/20 sm:text-sm">
          <Menu className="h-4 w-4" />
          Menu
        </button>
      </div>
    </header>
  )
}
