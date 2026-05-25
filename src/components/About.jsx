import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const badges = [
  'USPTA Certified',
  'PTR Certified',
  'All-American',
  'Tampa FL',
  'Saddlebrook Resort',
]

const bullets = [
  'USPTA & PTR certified — two of tennis\'s highest coaching credentials',
  'All-American college player with professional tour experience',
  'Innovative drills combining skill development and physical fitness',
  'No racket? No problem — just bring a towel and have fun',
]

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ backgroundColor: '#085041' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* ── Left: Coach card ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '0.5px solid rgba(255,255,255,0.12)',
              }}
            >
              {/* Avatar circle — placeholder for real photo */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: '#1D9E75' }}
              >
                <span
                  className="text-2xl font-medium text-white"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  NV
                </span>
              </div>
              {/* [UPDATE: replace the NV circle above with Nestor's actual headshot photo] */}

              <div className="text-center mb-6">
                <h3
                  className="text-lg font-medium text-white mb-1"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  Nestor Vargas
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  Head Coach · Vargas Total Tennis
                </p>
              </div>

              {/* Badge pills */}
              <div className="flex flex-wrap justify-center gap-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: 'rgba(93,202,165,0.15)',
                      color: '#5DCAA5',
                      border: '0.5px solid rgba(93,202,165,0.25)',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Bio content ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <p
              className="section-label mb-4"
              style={{ color: '#5DCAA5' }}
            >
              About Coach Nestor
            </p>

            <h2
              className="text-3xl md:text-4xl font-medium text-white mb-6"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}
            >
              A coach who's been there — and loves bringing others along
            </h2>

            <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Coach Nestor Vargas brings a rare combination of world-class
              experience and genuine passion to every lesson. A
              Colombian-born tennis professional, Nestor played Division I
              and II college tennis in the US, earned the prestigious
              All-American tennis award, and went on to compete
              professionally. He holds both USPTA and PTR certifications —
              two of the highest coaching credentials in the sport.
            </p>

            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Today Nestor channels that experience into innovative,
              imaginative and fun drills that improve both skill and
              physical conditioning. He's worked with thousands of players
              across all levels — including top 200 ATP and WTA
              professionals — and currently consults at the renowned
              Saddlebrook Resort. Whether your child is picking up a
              racket for the first time or you're preparing for tournament
              play, Nestor meets you exactly where you are.
            </p>

            {/* Differentiator bullets */}
            <ul className="flex flex-col gap-3">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(29,158,117,0.25)' }}
                  >
                    <Check size={11} color="#5DCAA5" />
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.75)' }}
                  >
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
