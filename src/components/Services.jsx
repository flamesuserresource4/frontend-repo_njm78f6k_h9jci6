import { motion } from 'framer-motion'
import { Palette, Code2, Camera, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Strategy, naming, visual systems, playful mascots, and dynamic design languages.',
  },
  {
    icon: Code2,
    title: 'Web & Product',
    desc: 'High-performance websites and SaaS apps with delightful interactions and motion.',
  },
  {
    icon: Camera,
    title: '3D & Motion',
    desc: 'Spline scenes, microinteractions, product animation, and immersive hybrids.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
          <p className="text-slate-300 mt-2">A blend of design, code, and motion</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <s.icon className="text-white/90" />
              <h3 className="text-white text-xl font-semibold mt-4">{s.title}</h3>
              <p className="text-slate-300 mt-2">{s.desc}</p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
