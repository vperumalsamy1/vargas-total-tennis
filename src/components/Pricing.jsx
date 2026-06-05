import { motion } from 'framer-motion'
import { Check, User, Users } from 'lucide-react'
import { Link } from 'react-scroll'

const ICONS = { user: User, users: Users }

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Pricing({ content }) {
  const { label, title, subtext, options, note } = content

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-3">{label}</p>
          <h2
            className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 max-w-xl"
            style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            {title}
          </h2>
          <p className="text-base text-gray-500 max-w-lg leading-relaxed">{subtext}</p>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {options.map(({ name, icon, description, features, cta, featured }) => {
            const Icon = ICONS[icon] || User
            return (
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
                {featured && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-medium uppercase px-4 py-1 rounded-full whitespace-nowrap"
                    style={{ backgroundColor: '#E1F5EE', color: '#085041', letterSpacing: '0.06em' }}
                  >
                    Most popular
                  </div>
                )}

                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#E1F5EE' }}
                >
                  <Icon size={18} color="#1D9E75" />
                </div>

                <p
                  className="text-xs font-medium uppercase mb-2"
                  style={{ color: featured ? '#1D9E75' : '#888', letterSpacing: '0.07em' }}
                >
                  {name}
                </p>

                <p className="text-sm text-gray-500 leading-relaxed mb-7">{description}</p>

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
            )
          })}
        </motion.div>

        {note && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-sm text-gray-400 italic"
          >
            {note}
          </motion.p>
        )}
      </div>
    </section>
  )
}
