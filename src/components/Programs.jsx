import { motion } from 'framer-motion'
import { User, Users, Star, Trophy } from 'lucide-react'
import { Link } from 'react-scroll'

const programs = [
  {
    accent: '#1D9E75',
    Icon: User,
    title: 'Private Lessons',
    description:
      'One-on-one coaching tailored to your game. Offered year-round for all levels from complete beginners to advanced tournament players.',
    price: '$60 / hr',
    priceNote: '[UPDATE: confirm rate]',
    cta: 'Book a session',
  },
  {
    accent: '#5DCAA5',
    Icon: Users,
    title: 'Group Clinics',
    description:
      'High-energy group sessions with innovative drills that improve skill and physical conditioning — and are genuinely fun.',
    price: '$30 / person',
    priceNote: '[UPDATE: confirm rate]',
    cta: 'Join a group',
  },
  {
    accent: '#EF9F27',
    Icon: Star,
    title: 'Junior Academy',
    description:
      'Age-appropriate training for kids of all abilities. Creative drills build technique, fitness, and a lifelong love for the sport.',
    price: 'Custom pricing',
    priceNote: '[UPDATE: contact for details]',
    cta: 'Learn more',
  },
  {
    accent: '#378ADD',
    Icon: Trophy,
    title: 'Tournament Prep',
    description:
      'Advanced coaching for competitive players. Nestor has worked with top 200 ATP and WTA professionals — he knows what it takes.',
    price: 'Custom pricing',
    priceNote: '[UPDATE: contact for details]',
    cta: 'Get started',
  },
]

// Animation variants
const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Programs</p>
          <h2
            className="text-3xl md:text-4xl font-medium text-gray-900 max-w-lg"
            style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            Lessons for every level
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {programs.map(({ accent, Icon, title, description, price, priceNote, cta }) => (
            <motion.div
              key={title}
              variants={cardVariant}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="relative card flex flex-col overflow-hidden"
            >
              {/* Coloured accent strip */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                style={{ backgroundColor: accent }}
              />

              <div className="pt-7 pb-6 px-6 flex flex-col flex-1">
                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${accent}18` }}
                >
                  <Icon size={17} style={{ color: accent }} />
                </div>

                {/* Title */}
                <h3
                  className="text-base font-medium text-gray-900 mb-2"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                  {description}
                </p>

                {/* Price badge */}
                <div className="mb-5">
                  <span
                    className="text-sm font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${accent}12`,
                      color: accent,
                    }}
                  >
                    {price}
                  </span>
                  {priceNote && (
                    <span className="ml-2 text-xs text-gray-400">{priceNote}</span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  offset={-64}
                  className="text-sm font-medium cursor-pointer transition-colors duration-200"
                  style={{ color: accent }}
                >
                  {cta} →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
