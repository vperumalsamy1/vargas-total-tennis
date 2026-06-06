import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

function CoachCard({ coach, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="rounded-2xl p-8 flex flex-col gap-6"
      style={{
        backgroundColor: 'rgba(255,255,255,0.06)',
        border: '0.5px solid rgba(255,255,255,0.12)',
      }}
    >
      {/* Avatar + name */}
      <div className="flex items-center gap-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: '#8DC63F' }}
        >
          <span className="text-lg font-medium text-white" style={{ letterSpacing: '-0.02em' }}>
            {coach.avatar}
          </span>
        </div>
        <div>
          <h3 className="text-base font-medium text-white" style={{ letterSpacing: '-0.01em' }}>
            {coach.name}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {coach.title}
          </p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {coach.badges.map((badge) => (
          <span
            key={badge}
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(141,198,63,0.12)',
              color: '#8DC63F',
              border: '0.5px solid rgba(141,198,63,0.22)',
            }}
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Bio */}
      <div className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
          {coach.para1}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
          {coach.para2}
        </p>
      </div>

      {/* Bullets */}
      <ul className="flex flex-col gap-2.5">
        {coach.bullets.map((b, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 + index * 0.1 + i * 0.06 }}
            className="flex items-start gap-2.5"
          >
            <span
              className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(141,198,63,0.25)' }}
            >
              <Check size={9} color="#8DC63F" />
            </span>
            <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {b}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function About({ content }) {
  const { label, heading, coaches } = content

  return (
    <section id="about" className="py-24" style={{ backgroundColor: '#132744' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-4" style={{ color: '#8DC63F' }}>
            {label}
          </p>
          <h2
            className="text-3xl md:text-4xl font-medium text-white max-w-2xl"
            style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            {heading}
          </h2>
        </motion.div>

        {/* Coach cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {coaches.map((coach, i) => (
            <CoachCard key={coach.name} coach={coach} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
