import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react'

// Positional icon map — same order as content.contact.details in both en.js / es.js
const DETAIL_ICONS = [MapPin, Phone, Mail, Clock, Instagram]

// Shared styled input/select/textarea — keeps focus ring consistent
const baseStyle  = { border: '0.5px solid rgba(0,0,0,0.15)', backgroundColor: '#fff' }
const focusStyle = { border: '1.5px solid #1D9E75', boxShadow: '0 0 0 3px rgba(29,158,117,0.1)' }
const baseCls    = 'w-full rounded-lg text-sm text-gray-800 placeholder-gray-400 px-4 py-3 outline-none transition-all duration-200'

function useFocus() {
  const [focused, setFocused] = useState(false)
  return {
    style: focused ? { ...baseStyle, ...focusStyle } : baseStyle,
    onFocus: () => setFocused(true),
    onBlur:  () => setFocused(false),
  }
}

function FieldLabel({ children }) {
  return (
    <label className="block text-xs font-medium uppercase mb-1.5" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.05em' }}>
      {children}
    </label>
  )
}

function ErrorMsg({ msg }) {
  return msg ? <p className="mt-1.5 text-xs" style={{ color: '#f87171' }}>{msg}</p> : null
}

export default function Contact({ content }) {
  const { label, heading, subtext, details, form } = content

  const [data, setData]         = useState({ firstName: '', lastName: '', email: '', phone: '', interest: '', message: '' })
  const [errors, setErrors]     = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!data.firstName.trim()) e.firstName = form.errors.first_name
    if (!data.lastName.trim())  e.lastName  = form.errors.last_name
    if (!data.email.trim())     e.email     = form.errors.email_required
    else if (!/\S+@\S+\.\S+/.test(data.email)) e.email = form.errors.email_invalid
    if (!data.message.trim())   e.message   = form.errors.message
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
    // [UPDATE: connect to Formspree, Netlify Forms, or EmailJS]
  }

  // Individual focus states for each field
  const fn    = useFocus()
  const ln    = useFocus()
  const em    = useFocus()
  const ph    = useFocus()
  const sel   = useFocus()
  const msg   = useFocus()

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: '#0F6E56' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="section-label mb-4" style={{ color: '#5DCAA5' }}>{label}</p>
            <h2
              className="text-3xl md:text-4xl font-medium text-white mb-5"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}
            >
              {heading}
            </h2>
            <p className="text-base leading-relaxed mb-10 max-w-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {subtext}
            </p>

            <ul className="flex flex-col gap-5">
              {details.map((text, i) => {
                const Icon = DETAIL_ICONS[i]
                return (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <Icon size={14} color="rgba(255,255,255,0.7)" />
                    </span>
                    <span className="text-sm leading-snug pt-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {text}
                    </span>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* ── Right: form card ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="rounded-2xl p-8"
            style={{ backgroundColor: '#fff' }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: '#E1F5EE' }}
                >
                  <Send size={22} color="#1D9E75" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2" style={{ letterSpacing: '-0.02em' }}>
                  {form.success_heading}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{form.success_text}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <FieldLabel>{form.first_name}</FieldLabel>
                    <input type="text" placeholder="Jane" value={data.firstName} onChange={set('firstName')} className={baseCls} {...fn} />
                    <ErrorMsg msg={errors.firstName} />
                  </div>
                  <div>
                    <FieldLabel>{form.last_name}</FieldLabel>
                    <input type="text" placeholder="Smith" value={data.lastName} onChange={set('lastName')} className={baseCls} {...ln} />
                    <ErrorMsg msg={errors.lastName} />
                  </div>
                </div>

                <div>
                  <FieldLabel>{form.email}</FieldLabel>
                  <input type="email" placeholder="jane@example.com" value={data.email} onChange={set('email')} className={baseCls} {...em} />
                  <ErrorMsg msg={errors.email} />
                </div>

                <div>
                  <FieldLabel>{form.phone}</FieldLabel>
                  <input type="tel" placeholder="(813) 555-0100" value={data.phone} onChange={set('phone')} className={baseCls} {...ph} />
                </div>

                <div>
                  <FieldLabel>{form.interest_label}</FieldLabel>
                  <select value={data.interest} onChange={set('interest')} className={`${baseCls} cursor-pointer`} {...sel}>
                    {form.interests.map(({ value, label: optLabel }) => (
                      <option key={value} value={value}>{optLabel}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <FieldLabel>{form.message_label}</FieldLabel>
                  <textarea
                    rows={4}
                    placeholder={form.message_placeholder}
                    value={data.message}
                    onChange={set('message')}
                    className={`${baseCls} resize-none`}
                    {...msg}
                  />
                  <ErrorMsg msg={errors.message} />
                </div>

                <button
                  type="submit"
                  className="w-full text-sm font-medium text-white py-3.5 rounded-lg transition-colors duration-200"
                  style={{ backgroundColor: '#1D9E75' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0F6E56')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1D9E75')}
                >
                  {form.submit}
                </button>

                <p className="text-center text-xs text-gray-400">{form.footnote}</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
