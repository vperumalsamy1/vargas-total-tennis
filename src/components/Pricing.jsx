import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-scroll'

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Pricing({ content }) {
  const { label, title, tiers } = content

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-3">{label}</p>
          <h2
            className="text-3xl md:text-4xl font-medium text-gray-900"
            style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            {title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6 items-start"
        >
          {tiers.map(({ name, price, period, note, featured, badge, cta, features }) => (
            <motion.div
              key={name}
              variants={cardVariant}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-xl p-8"
              style={{
                backgroundColor: '#fff',
                border: featured ? '2px solid #1D9E75' : '0.5px solid rgba(0,0,0,0.08)',
              }}
            >
              {/* "Most popular" / "Más popular" badge */}
              {featured && badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-medium uppercase px-4 py-1 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: '#E1F5EE', color: '#085041', letterSpacing: '0.06em' }}
                >
                  {badge}
                </div>
              )}

              <p
                className="text-xs font-medium uppercase mb-4"
                style={{ color: featured ? '#1D9E75' : '#888', letterSpacing: '0.07em' }}
              >
                {name}
              </p>

              <div className="mb-1">
                <span className="text-4xl font-medium" style={{ color: '#085041', letterSpacing: '-0.02em' }}>
                  {price}
                </span>
                {period && <span className="text-sm text-gray-400 ml-1.5">{period}</span>}
              </div>
              <p className="text-xs text-gray-400 mb-7">{note}</p>

              <ul className="flex flex-col gap-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#E1F5EE' }}
                    >
                      <Check size={9} color="#1D9E75" />
                    </span>
                    <span className="text-sm text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="contact"
                smooth
                duration={500}
                offset={-64}
                className="block text-center text-sm font-medium py-3 rounded-lg cursor-pointer transition-colors duration-200"
                style={featured ? { backgroundColor: '#1D9E75', color: '#fff' } : { backgroundColor: '#F3F4F6', color: '#085041' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = featured ? '#0F6E56' : '#E5E7EB'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = featured ? '#1D9E75' : '#F3F4F6'
                }}
              >
                {cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
