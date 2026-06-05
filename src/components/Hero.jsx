import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowRight, ChevronDown, Phone } from 'lucide-react'

const leftVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const itemVariant = {
  hidden:   { opacity: 0, y: 22 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Hero({ content }) {
  const { eyebrow, headline, subtext, cta_primary, cta_ghost, cta_call, stats, quote } = content

  return (
    <section
      id="hero"
      className="relative flex items-center"
      style={{ backgroundColor: '#0F6E56', minHeight: '100svh' }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full py-28 md:py-0">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Left: headline + CTAs ── */}
          <motion.div variants={leftVariants} initial="hidden" animate="visible">

            <motion.p
              variants={itemVariant}
              className="section-label mb-4"
              style={{ color: '#5DCAA5' }}
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              variants={itemVariant}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-white mb-6"
              style={{ letterSpacing: '-0.025em', lineHeight: 1.15 }}
            >
              {headline.map((line, i) =>
                i < headline.length - 1 ? (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ) : (
                  <span key={i} style={{ color: '#5DCAA5' }}>
                    {line}
                  </span>
                )
              )}
            </motion.h1>

            <motion.p
              variants={itemVariant}
              className="text-base md:text-lg leading-relaxed max-w-md mb-8"
              style={{ color: 'rgba(255,255,255,0.72)' }}
            >
              {subtext}
            </motion.p>

            <motion.div variants={itemVariant} className="flex flex-wrap gap-3">
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-64}
                className="inline-flex items-center gap-2 bg-vtt-primary hover:bg-vtt-dark text-white font-medium px-6 py-3.5 rounded-lg cursor-pointer transition-colors duration-200"
              >
                {cta_primary}
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:8644312442"
                className="md:hidden inline-flex items-center gap-2 font-medium px-6 py-3.5 rounded-lg transition-colors duration-200"
                style={{ border: '1.5px solid rgba(255,255,255,0.3)', color: '#fff' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
              >
                <Phone size={14} />
                {cta_call}
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: dark stats panel + quote ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#085041' }}
          >
            <div className="p-7 md:p-8">
              {/* Stats 2×2 */}
              <div className="grid grid-cols-2 gap-3 mb-7">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="rounded-xl p-4 text-center"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.07)',
                      border: '0.5px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    <div
                      className="text-xl md:text-2xl font-medium text-white mb-1"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {s.number}
                    </div>
                    <div
                      className="text-[11px] font-medium"
                      style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}
                    >
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="rounded-xl p-5"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '0.5px solid rgba(255,255,255,0.1)',
                }}
              >
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontStyle: 'italic',
                    color: 'rgba(255,255,255,0.82)',
                  }}
                >
                  "{quote.text}"
                </p>
                <p className="text-xs font-medium" style={{ color: '#5DCAA5' }}>
                  — {quote.attribution}
                </p>
              </motion.blockquote>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} color="rgba(255,255,255,0.35)" />
        </motion.div>
      </motion.div>
    </section>
  )
}
