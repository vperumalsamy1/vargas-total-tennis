import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-scroll'

const tiers = [
  {
    name: 'Group Clinics',
    price: '$30',
    period: '/ person',
    note: '[UPDATE: confirm rate]',
    featured: false,
    cta: 'Join a group',
    features: [
      'Small group sessions (max 6)',
      '60-minute structured lesson',
      'Innovative drills + match play',
      'All skill levels welcome',
      'Fun, high-energy environment',
    ],
  },
  {
    name: 'Private Lesson',
    price: '$60',
    period: '/ hr',
    note: '[UPDATE: confirm rate]',
    featured: true,
    cta: 'Book a private lesson',
    features: [
      'Fully personalized coaching',
      'Flexible scheduling',
      'Kids & adults welcome',
      'Progress tracking',
      'Year-round availability',
      'Free first trial lesson',  // [UPDATE: confirm if offered]
    ],
  },
  {
    name: 'Junior Academy',
    price: 'Custom',
    period: 'pricing',
    note: '[UPDATE: contact for details]',
    featured: false,
    cta: 'Enquire now',
    features: [
      'Ages 5–18, grouped by level',
      'Weekly sessions',
      'Tournament preparation',
      'Parent progress updates',
      'Saddlebrook Resort affiliated',
    ],
  },
]

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Pricing</p>
          <h2
            className="text-3xl md:text-4xl font-medium text-gray-900"
            style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            Simple, transparent rates
          </h2>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6 items-start"
        >
          {tiers.map(({ name, price, period, note, featured, cta, features }) => (
            <motion.div
              key={name}
              variants={cardVariant}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-xl p-8"
              style={{
                backgroundColor: '#fff',
                border: featured
                  ? '2px solid #1D9E75'
                  : '0.5px solid rgba(0,0,0,0.08)',
              }}
            >
              {/* "Most popular" badge on featured card */}
              {featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-medium uppercase px-4 py-1 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: '#E1F5EE',
                    color: '#085041',
                    letterSpacing: '0.06em',
                  }}
                >
                  Most popular
                </div>
              )}

              {/* Tier name */}
              <p
                className="text-xs font-medium uppercase mb-4"
                style={{
                  color: featured ? '#1D9E75' : '#888',
                  letterSpacing: '0.07em',
                }}
              >
                {name}
              </p>

              {/* Price */}
              <div className="mb-1">
                <span
                  className="text-4xl font-medium"
                  style={{ color: '#085041', letterSpacing: '-0.02em' }}
                >
                  {price}
                </span>
                <span className="text-sm text-gray-400 ml-1.5">{period}</span>
              </div>
              <p className="text-xs text-gray-400 mb-7">{note}</p>

              {/* Feature checklist */}
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

              {/* CTA */}
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-64}
                className="block text-center text-sm font-medium py-3 rounded-lg cursor-pointer transition-colors duration-200"
                style={
                  featured
                    ? { backgroundColor: '#1D9E75', color: '#fff' }
                    : {
                        backgroundColor: '#F3F4F6',
                        color: '#085041',
                      }
                }
                onMouseEnter={(e) => {
                  if (featured) e.currentTarget.style.backgroundColor = '#0F6E56'
                  else e.currentTarget.style.backgroundColor = '#E5E7EB'
                }}
                onMouseLeave={(e) => {
                  if (featured) e.currentTarget.style.backgroundColor = '#1D9E75'
                  else e.currentTarget.style.backgroundColor = '#F3F4F6'
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
