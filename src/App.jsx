import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0 [background:radial-gradient(1200px_600px_at_50%_-20%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(800px_400px_at_10%_10%,rgba(99,102,241,0.15),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Showcase />
        <Services />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Playful Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
