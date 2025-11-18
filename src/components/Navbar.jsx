import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm text-slate-200/90 hover:text-white px-4 py-2 rounded-md hover:bg-white/5 transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-6 backdrop-blur-lg bg-slate-900/50 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Sparkles className="text-white" size={18} />
              </div>
              <span className="text-white font-semibold tracking-tight">Playful Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="px-4 py-2 rounded-xl bg-white text-slate-900 font-medium hover:scale-[1.02] active:scale-[0.99] transition-transform">
                Start a project
              </a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 text-white" onClick={() => setOpen(!open)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                <NavLink href="#work">Work</NavLink>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <a href="#contact" className="mt-2 px-4 py-2 rounded-xl bg-white text-slate-900 font-medium text-center">
                  Start a project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
