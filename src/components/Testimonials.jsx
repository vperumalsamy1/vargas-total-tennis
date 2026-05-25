import { motion } from 'framer-motion'

const reviews = [
  {
    quote:
      "Coach Nestor's drills are unlike anything my son has experienced. Challenging, fun, and incredibly effective.",
    name:     'Parent of junior student',
    subtitle: 'Junior program · Tampa, FL',
    initials: 'JF',
    color:    '#1D9E75',
  },
  {
    quote:
      "I came with zero experience and no racket — Nestor had me covered on both. Best decision I made.",
    name:     'Adult beginner',
    subtitle: 'Private lessons · Tampa, FL',
    initials: 'MR',
    color:    '#EF9F27',
  },
  {
    quote:
      "You can feel the professional experience behind every lesson. My daughter went from casual player to competing in tournaments.",
    name:     'Tampa parent, 2 years',
    subtitle: 'Junior & Tournament prep',
    initials: 'SL',
    color:    '#378ADD',
  },
]

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const cardVariant = {
  hidden:   { opacity: 0, y: 22 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Reviews</p>
          <h2
            className="text-3xl md:text-4xl font-medium text-gray-900"
            style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            What Tampa families say
          </h2>
        </motion.div>

        {/* Review cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {reviews.map(({ quote, name, subtitle, initials, color }) => (
            <motion.div
              key={name}
              variants={cardVariant}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="card p-7 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    fill="#EF9F27"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote — Georgia serif italic */}
              <blockquote
                className="flex-1 text-base leading-relaxed mb-6"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: 'italic',
                  color: '#2a2a2a',
                }}
              >
                "{quote}"
              </blockquote>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}1A` }}
                >
                  <span
                    className="text-xs font-medium"
                    style={{ color }}
                  >
                    {initials}
                  </span>
                </div>
                <div>
                  <p
                    className="text-sm font-medium text-gray-800"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
