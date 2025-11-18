import { motion } from 'framer-motion'
import { Image as ImageIcon, Sparkle, Rocket, Star } from 'lucide-react'

const projects = [
  {
    title: 'Neon Commerce',
    tag: 'E‑commerce · Motion',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Playful Brand',
    tag: 'Branding · 3D',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'SaaS Dashboard',
    tag: 'Product · Web',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
            <p className="text-slate-300 mt-2">A mix of branding, product, and playful interactions</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 font-medium">
            Let’s collaborate
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-slate-300 text-sm">{p.tag}</p>
                <h3 className="text-white text-xl font-semibold">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
