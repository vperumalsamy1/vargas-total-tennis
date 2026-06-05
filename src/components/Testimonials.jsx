import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const baseStyle  = { border: '0.5px solid rgba(0,0,0,0.12)', backgroundColor: '#fff' }
const focusStyle = { border: '1.5px solid #1D9E75', boxShadow: '0 0 0 3px rgba(29,158,117,0.08)' }
const baseCls    = 'w-full rounded-lg text-sm text-gray-800 placeholder-gray-400 px-4 py-3 outline-none transition-all duration-200'

function useFocus() {
  const [focused, setFocused] = useState(false)
  return {
    style: focused ? { ...baseStyle, ...focusStyle } : baseStyle,
    onFocus: () => setFocused(true),
    onBlur:  () => setFocused(false),
  }
}

function StarRating({ rating, setRating }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => setRating(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          className="focus:outline-none"
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
        >
          <svg className="w-6 h-6 transition-colors duration-100" fill={(hovered || rating) >= n ? '#EF9F27' : '#E5E7EB'} viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
    </div>
  )
}

function ReviewForm({ rc }) {
  const [name, setName]       = useState('')
  const [review, setReview]   = useState('')
  const [rating, setRating]   = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const nameFocus   = useFocus()
  const reviewFocus = useFocus()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !review.trim() || rating === 0) return
    setSubmitted(true)
    // [UPDATE: connect to Formspree, Netlify Forms, or EmailJS]
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: '#E1F5EE' }}
        >
          <Send size={18} color="#1D9E75" />
        </div>
        <h4 className="text-base font-medium text-gray-900 mb-1" style={{ letterSpacing: '-0.01em' }}>
          {rc.success_heading}
        </h4>
        <p className="text-sm text-gray-400">{rc.success_text}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase" style={{ letterSpacing: '0.05em' }}>
          {rc.name_label}
        </label>
        <input
          type="text"
          placeholder={rc.name_placeholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={baseCls}
          {...nameFocus}
          required
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-2 uppercase" style={{ letterSpacing: '0.05em' }}>
          Rating
        </label>
        <StarRating rating={rating} setRating={setRating} />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase" style={{ letterSpacing: '0.05em' }}>
          {rc.review_label}
        </label>
        <textarea
          rows={3}
          placeholder={rc.review_placeholder}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className={`${baseCls} resize-none`}
          {...reviewFocus}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full text-sm font-medium text-white py-3 rounded-lg transition-colors duration-200"
        style={{ backgroundColor: '#1D9E75' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0F6E56')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1D9E75')}
      >
        {rc.submit}
      </button>
    </form>
  )
}

export default function Testimonials({ content }) {
  const { label, title, items, review_cta: rc } = content

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
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
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          {items.map(({ quote, name, subtitle, initials, color }) => (
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
                  <svg key={i} className="w-4 h-4" fill="#EF9F27" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

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

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}1A` }}
                >
                  <span className="text-xs font-medium" style={{ color }}>{initials}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800" style={{ letterSpacing: '-0.01em' }}>
                    {name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Share your experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto rounded-2xl p-8"
          style={{
            backgroundColor: '#fff',
            border: '0.5px solid rgba(0,0,0,0.08)',
          }}
        >
          <p className="section-label mb-2" style={{ color: '#1D9E75' }}>
            {rc.label}
          </p>
          <p className="text-sm text-gray-400 mb-6">{rc.subtext}</p>
          <ReviewForm rc={rc} />
        </motion.div>

      </div>
    </section>
  )
}
