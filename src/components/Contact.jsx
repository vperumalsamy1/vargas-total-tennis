import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react'

const contactDetails = [
  { Icon: MapPin,    text: 'Tampa Bay, FL · Saddlebrook Resort' },
  { Icon: Phone,     text: '[UPDATE: real phone number]' },
  { Icon: Mail,      text: '[UPDATE: real email address]' },
  { Icon: Clock,     text: 'Mon–Sat · 7 am to 7 pm  [UPDATE]' },
  { Icon: Instagram, text: '@vargastotaltennis  [UPDATE]' },
]

const interests = [
  { value: '',                  label: 'Select a program...' },
  { value: 'private',          label: 'Private Lessons' },
  { value: 'group',            label: 'Group Clinics' },
  { value: 'junior',           label: 'Junior Academy' },
  { value: 'tournament',       label: 'Tournament Prep' },
  { value: 'unsure',           label: "I'm not sure yet" },
]

const inputClass =
  'w-full rounded-lg text-sm text-gray-800 placeholder-gray-400 px-4 py-3 outline-none transition-all duration-200'
const inputStyle = {
  border: '0.5px solid rgba(0,0,0,0.15)',
  backgroundColor: '#fff',
}
const inputFocusStyle = {
  border: '1.5px solid #1D9E75',
  boxShadow: '0 0 0 3px rgba(29,158,117,0.1)',
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-xs font-medium text-white/60 mb-1.5 uppercase tracking-wide" style={{ letterSpacing: '0.05em' }}>
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs" style={{ color: '#f87171' }}>{error}</p>}
    </div>
  )
}

function StyledInput({ error, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      {...props}
      style={focused ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
      className={inputClass}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

function StyledSelect({ error, children, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <select
      {...props}
      style={focused ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
      className={`${inputClass} cursor-pointer`}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {children}
    </select>
  )
}

function StyledTextarea({ error, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <textarea
      {...props}
      style={focused ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
      className={`${inputClass} resize-none`}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    phone: '', interest: '', message: '',
  })
  const [errors, setErrors]     = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required'
    if (!form.lastName.trim())  e.lastName  = 'Last name is required'
    if (!form.email.trim())     e.email     = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.message.trim())   e.message   = 'Please tell Nestor a bit about yourself'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
    // [UPDATE: wire this up to Formspree, Netlify Forms, or EmailJS]
    // e.g. fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: JSON.stringify(form) })
  }

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: '#0F6E56' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* ── Left: heading + contact details ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="section-label mb-4" style={{ color: '#5DCAA5' }}>
              Let's connect
            </p>
            <h2
              className="text-3xl md:text-4xl font-medium text-white mb-5"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}
            >
              Ready to step on the court?
            </h2>
            <p
              className="text-base leading-relaxed mb-10 max-w-sm"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Send Coach Nestor a message and he'll get back to you within
              24 hours. Free trial lesson available for new students.
            </p>

            <ul className="flex flex-col gap-5">
              {contactDetails.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <Icon size={14} color="rgba(255,255,255,0.7)" />
                  </span>
                  <span
                    className="text-sm leading-snug pt-1.5"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: white form card ── */}
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
                <h3
                  className="text-xl font-medium text-gray-900 mb-2"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Message sent!
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Coach Nestor will be in touch within 24 hours. Looking
                  forward to seeing you on the court.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First name" error={errors.firstName}>
                    <StyledInput
                      type="text"
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={set('firstName')}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-400">{errors.firstName}</p>
                    )}
                  </Field>
                  <Field label="Last name" error={errors.lastName}>
                    <StyledInput
                      type="text"
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={set('lastName')}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-400">{errors.lastName}</p>
                    )}
                  </Field>
                </div>

                <Field label="Email" error={errors.email}>
                  <StyledInput
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={set('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </Field>

                <Field label="Phone (optional)">
                  <StyledInput
                    type="tel"
                    placeholder="(813) 555-0100"
                    value={form.phone}
                    onChange={set('phone')}
                  />
                </Field>

                <Field label="I'm interested in">
                  <StyledSelect value={form.interest} onChange={set('interest')}>
                    {interests.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </StyledSelect>
                </Field>

                <Field label="Tell Coach Nestor about yourself" error={errors.message}>
                  <StyledTextarea
                    rows={4}
                    placeholder="Tell Coach Nestor about yourself or your child — age, experience, goals..."
                    value={form.message}
                    onChange={set('message')}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </Field>

                <button
                  type="submit"
                  className="w-full text-sm font-medium text-white py-3.5 rounded-lg transition-colors duration-200"
                  style={{ backgroundColor: '#1D9E75' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0F6E56')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1D9E75')}
                >
                  Send message — it's free to enquire
                </button>

                <p className="text-center text-xs text-gray-400">
                  No spam, ever. Nestor reads every message personally.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
