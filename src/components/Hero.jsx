import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-950/90 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 w-full">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              A playful, modern creative agency crafting interactive experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 md:mt-6 text-lg md:text-xl text-slate-200 max-w-2xl"
            >
              We blend design, code, and motion to build brands and products that feel alive. Let's make something unforgettable.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 md:mt-8 flex flex-wrap gap-3"
            >
              <a href="#contact" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:scale-[1.02] active:scale-[0.99] transition-transform">
                Start a project
              </a>
              <a href="#work" className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15">
                See our work
              </a>
            </motion.div>
          </div>

          <div className="md:col-span-5 hidden md:block">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="grid grid-cols-3 gap-4">
                {['Branding', 'Web', '3D', 'Motion', 'Apps', 'AI'].map((chip) => (
                  <div key={chip} className="px-3 py-2 rounded-lg bg-white/10 text-white text-sm text-center border border-white/10">
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
