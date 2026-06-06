import { motion } from 'framer-motion'
import { User, Users, Star, Trophy } from 'lucide-react'
import { Link } from 'react-scroll'

// Visual design (accent colours + icons) maps 1-to-1 with the 4 program items
const CARD_STYLE = [
  { accent: '#8DC63F', Icon: User },
  { accent: '#8DC63F', Icon: Users },
  { accent: '#EF9F27', Icon: Star },
  { accent: '#378ADD', Icon: Trophy },
]

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Programs({ content }) {
  const { label, title, items } = content

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-3">{label}</p>
          <h2
            className="text-3xl md:text-4xl font-medium text-gray-900 max-w-lg"
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {items.map((program, i) => {
            const { accent, Icon } = CARD_STYLE[i]
            return (
              <motion.div
                key={program.title}
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

                  <h3
                    className="text-base font-medium text-gray-900 mb-2"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {program.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                    {program.description}
                  </p>

                  {/* Price badge */}
                  <div className="mb-5">
                    <span
                      className="text-sm font-medium px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${accent}12`, color: accent }}
                    >
                      {program.price}
                    </span>
                    {program.priceNote && (
                      <span className="ml-2 text-xs text-gray-400">{program.priceNote}</span>
                    )}
                  </div>

                  <Link
                    to="contact"
                    smooth
                    duration={500}
                    offset={-64}
                    className="text-sm font-medium cursor-pointer transition-colors duration-200"
                    style={{ color: accent }}
                  >
                    {program.cta} →
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
