import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Ready to make something memorable?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-slate-300 mt-3"
        >
          Tell us about your idea and we’ll reply within 24 hours.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          <input placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/60 border border-white/10" />
          <input placeholder="Email" type="email" className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/60 border border-white/10" />
          <button className="px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold">Get in touch</button>
        </motion.form>

        <p className="text-slate-400 text-sm mt-4">We only use your info to reply. No spam. Ever.</p>
      </div>
    </section>
  )
}
