import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoColor from '../assets/logo-color.png'

const CONTENT = {
  en: {
    back:      '← Back to site',
    badge:     'Participation Waiver',
    title:     'Waiver & Release of Liability',
    subtitle:  'Vargas Total Tennis · Tampa Bay, FL · Please read carefully before signing.',
    termsLabel: 'Terms',
    waiver: [
      {
        heading: 'Assumption of Risk',
        body: 'I understand that participation in tennis instruction, clinics, camps, and related activities involves inherent risks of injury, including but not limited to sprains, fractures, and other physical injuries. I voluntarily assume all such risks on behalf of myself and/or my minor child.',
      },
      {
        heading: 'Release of Liability',
        body: 'I hereby release, waive, and discharge Vargas Total Tennis, Coach Nestor Vargas, and any affiliated coaches, volunteers, and facility owners from any and all claims, demands, or causes of action arising out of or related to participation in the program, including claims arising from negligence.',
      },
      {
        heading: 'Medical Authorization',
        body: 'In the event of an emergency, I authorize program staff to seek necessary medical treatment for my minor child. I represent that the participant is in good physical health and able to participate in athletic activities.',
      },
      {
        heading: 'Photo & Media Release',
        body: 'I grant permission for Vargas Total Tennis to use photographs or videos taken during program activities for promotional or educational purposes.',
      },
    ],
    fields: {
      participantName:  'Participant\'s full name',
      dob:              'Date of birth',
      guardianName:     'Parent / Guardian full name',
      guardianNote:     'required if participant is under 18',
      email:            'Email address',
      phone:            'Phone number',
      program:          'Program / Location',
      programDefault:   'Select a program...',
      agreementText:    'I have read and fully understand the waiver above. I agree to its terms on behalf of myself and/or my minor child, and I understand this constitutes a legal release of liability.',
      signatureLabel:   'Electronic signature',
      signatureNote:    'Type your full name to sign. By signing you confirm you are 18+ or the parent/guardian of the participant.',
      signaturePlaceholder: 'Type your full name',
      dateLabel:        'Date:',
      submit:           'Submit signed waiver',
      submitting:       'Submitting…',
      footnote:         'Your submission is timestamped and sent directly to Coach Nestor.',
    },
    programs: [
      { value: 'monday-country-place',  label: 'Monday — Country Place Park' },
      { value: 'tuesday-west-village',  label: 'Tuesday — West Village Park' },
      { value: 'thursday-hampton',      label: 'Thursday — Hampton Park' },
      { value: 'saturday-country-place',label: 'Saturday — Country Place Park' },
      { value: 'private',               label: 'Private Lessons' },
    ],
    errors: {
      participantName: 'Participant name is required',
      dob:             'Date of birth is required',
      emailRequired:   'Email is required',
      emailInvalid:    'Please enter a valid email',
      agreed:          'You must agree to the waiver to continue',
      signature:       'Please type your full name as your signature',
    },
    success: {
      heading: 'Waiver received!',
      text:    'Thank you. Coach Nestor has received your signed waiver. We look forward to seeing you on the court!',
    },
    dateLocale: 'en-US',
    backTo: '/',
  },

  es: {
    back:      '← Volver al sitio',
    badge:     'Exención de Participación',
    title:     'Exención y Liberación de Responsabilidad',
    subtitle:  'Vargas Total Tennis · Tampa Bay, FL · Por favor lea con atención antes de firmar.',
    termsLabel: 'Términos',
    waiver: [
      {
        heading: 'Asunción de Riesgo',
        body: 'Entiendo que la participación en clases de tenis, clínicas, campamentos y actividades relacionadas conlleva riesgos inherentes de lesión, incluidos, entre otros, esguinces, fracturas y otras lesiones físicas. Asumo voluntariamente todos esos riesgos en nombre mío y/o de mi hijo menor de edad.',
      },
      {
        heading: 'Liberación de Responsabilidad',
        body: 'Por la presente, libero, renuncio y exonero a Vargas Total Tennis, al Coach Nestor Vargas y a cualquier entrenador, voluntario y propietario de instalaciones afiliados de cualquier reclamación, demanda o causa de acción derivada o relacionada con la participación en el programa, incluidas las reclamaciones por negligencia.',
      },
      {
        heading: 'Autorización Médica',
        body: 'En caso de emergencia, autorizo al personal del programa a buscar el tratamiento médico necesario para mi hijo menor de edad. Declaro que el participante goza de buena salud física y está en condiciones de participar en actividades atléticas.',
      },
      {
        heading: 'Autorización de Foto y Video',
        body: 'Otorgo permiso a Vargas Total Tennis para usar fotografías o videos tomados durante las actividades del programa con fines promocionales o educativos.',
      },
    ],
    fields: {
      participantName:  'Nombre completo del participante',
      dob:              'Fecha de nacimiento',
      guardianName:     'Nombre completo del padre / tutor',
      guardianNote:     'requerido si el participante es menor de 18 años',
      email:            'Correo electrónico',
      phone:            'Número de teléfono',
      program:          'Programa / Ubicación',
      programDefault:   'Selecciona un programa...',
      agreementText:    'He leído y comprendido completamente la exención anterior. Acepto sus términos en nombre mío y/o de mi hijo menor de edad, y entiendo que esto constituye una liberación legal de responsabilidad.',
      signatureLabel:   'Firma electrónica',
      signatureNote:    'Escriba su nombre completo para firmar. Al firmar, confirma que tiene 18 años o más o que es el padre/tutor del participante.',
      signaturePlaceholder: 'Escriba su nombre completo',
      dateLabel:        'Fecha:',
      submit:           'Enviar exención firmada',
      submitting:       'Enviando…',
      footnote:         'Su envío tiene marca de tiempo y se envía directamente al Coach Nestor.',
    },
    programs: [
      { value: 'monday-country-place',   label: 'Lunes — Country Place Park' },
      { value: 'tuesday-west-village',   label: 'Martes — West Village Park' },
      { value: 'thursday-hampton',       label: 'Jueves — Hampton Park' },
      { value: 'saturday-country-place', label: 'Sábado — Country Place Park' },
      { value: 'private',                label: 'Clases Privadas' },
    ],
    errors: {
      participantName: 'El nombre del participante es obligatorio',
      dob:             'La fecha de nacimiento es obligatoria',
      emailRequired:   'El correo electrónico es obligatorio',
      emailInvalid:    'Por favor ingrese un correo electrónico válido',
      agreed:          'Debe aceptar la exención para continuar',
      signature:       'Por favor escriba su nombre completo como firma',
    },
    success: {
      heading: '¡Exención recibida!',
      text:    'Gracias. El Coach Nestor ha recibido su exención firmada. ¡Esperamos verle en la cancha!',
    },
    dateLocale: 'es-US',
    backTo: '/es',
  },
}

const baseStyle  = { border: '0.5px solid rgba(0,0,0,0.15)', backgroundColor: '#fff' }
const focusStyle = { border: '1.5px solid #8DC63F', boxShadow: '0 0 0 3px rgba(141,198,63,0.1)' }
const baseCls    = 'w-full rounded-lg text-sm text-gray-800 placeholder-gray-400 px-4 py-3 outline-none transition-all duration-200'

function useFocus() {
  const [focused, setFocused] = useState(false)
  return {
    style: focused ? { ...baseStyle, ...focusStyle } : baseStyle,
    onFocus: () => setFocused(true),
    onBlur:  () => setFocused(false),
  }
}

function FieldLabel({ children, required }) {
  return (
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  )
}

function ErrorMsg({ msg }) {
  return msg ? <p className="mt-1.5 text-xs text-red-500">{msg}</p> : null
}

export default function Waiver({ lang = 'en' }) {
  const c = CONTENT[lang]
  const today = new Date().toLocaleDateString(c.dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })

  const [data, setData] = useState({
    participantName: '',
    dob: '',
    guardianName: '',
    email: '',
    phone: '',
    program: '',
    agreed: false,
    signature: '',
  })
  const [errors, setErrors]         = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted]   = useState(false)

  const set      = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }))
  const setCheck = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.checked }))

  const validate = () => {
    const e = {}
    if (!data.participantName.trim()) e.participantName = c.errors.participantName
    if (!data.dob)                    e.dob             = c.errors.dob
    if (!data.email.trim())           e.email           = c.errors.emailRequired
    else if (!/\S+@\S+\.\S+/.test(data.email)) e.email = c.errors.emailInvalid
    if (!data.agreed)                 e.agreed          = c.errors.agreed
    if (!data.signature.trim())       e.signature       = c.errors.signature
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitting(true)
    await fetch('https://formspree.io/f/xnpqglno', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        language:             lang.toUpperCase(),
        participant_name:     data.participantName,
        date_of_birth:        data.dob,
        guardian_name:        data.guardianName || '—',
        email:                data.email,
        phone:                data.phone || '—',
        program:              data.program || '—',
        agreed_to_waiver:     'Yes',
        electronic_signature: data.signature,
        date_signed:          today,
      }),
    })
    setSubmitting(false)
    setSubmitted(true)
  }

  const pn = useFocus()
  const db = useFocus()
  const gn = useFocus()
  const em = useFocus()
  const ph = useFocus()
  const pr = useFocus()
  const sg = useFocus()

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Header */}
      <header className="bg-white px-6 py-4" style={{ borderBottom: '0.5px solid rgba(0,0,0,0.1)' }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link to={c.backTo}>
            <img src={logoColor} alt="Vargas Total Tennis" className="h-12 w-auto" />
          </Link>
          <Link to={c.backTo} className="text-sm text-gray-400 hover:text-gray-600 transition-colors duration-200">
            {c.back}
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">

        {/* Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#EEF7D6' }}>
              <ShieldCheck size={18} color="#8DC63F" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#8DC63F' }}>
              {c.badge}
            </p>
          </div>
          <h1 className="text-3xl font-medium text-gray-900 mb-2" style={{ letterSpacing: '-0.02em' }}>
            {c.title}
          </h1>
          <p className="text-sm text-gray-500">{c.subtitle}</p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-10 text-center"
            style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: '#EEF7D6' }}>
              <Send size={22} color="#8DC63F" />
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2" style={{ letterSpacing: '-0.02em' }}>
              {c.success.heading}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">
              {c.success.text}
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6"
          >

            {/* Waiver text */}
            <div className="bg-white rounded-2xl p-8" style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">{c.termsLabel}</p>
              <div className="flex flex-col gap-5">
                {c.waiver.map(({ heading, body }) => (
                  <div key={heading}>
                    <p className="text-sm font-semibold text-gray-800 mb-1">{heading}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8" style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}>
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FieldLabel required>{c.fields.participantName}</FieldLabel>
                    <input type="text" placeholder="Jane Smith" value={data.participantName} onChange={set('participantName')} className={baseCls} {...pn} />
                    <ErrorMsg msg={errors.participantName} />
                  </div>
                  <div>
                    <FieldLabel required>{c.fields.dob}</FieldLabel>
                    <input type="date" value={data.dob} onChange={set('dob')} className={baseCls} {...db} />
                    <ErrorMsg msg={errors.dob} />
                  </div>
                </div>

                <div>
                  <FieldLabel>
                    {c.fields.guardianName}{' '}
                    <span className="font-normal text-gray-400 normal-case">({c.fields.guardianNote})</span>
                  </FieldLabel>
                  <input type="text" placeholder="John Smith" value={data.guardianName} onChange={set('guardianName')} className={baseCls} {...gn} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FieldLabel required>{c.fields.email}</FieldLabel>
                    <input type="email" placeholder="jane@example.com" value={data.email} onChange={set('email')} className={baseCls} {...em} />
                    <ErrorMsg msg={errors.email} />
                  </div>
                  <div>
                    <FieldLabel>{c.fields.phone}</FieldLabel>
                    <input type="tel" placeholder="(813) 555-0100" value={data.phone} onChange={set('phone')} className={baseCls} {...ph} />
                  </div>
                </div>

                <div>
                  <FieldLabel>{c.fields.program}</FieldLabel>
                  <select value={data.program} onChange={set('program')} className={`${baseCls} cursor-pointer`} {...pr}>
                    <option value="">{c.fields.programDefault}</option>
                    {c.programs.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                {/* Agreement */}
                <div className="rounded-xl p-5" style={{ backgroundColor: '#F9FDF2', border: '1px solid #D4EDAC' }}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.agreed}
                      onChange={setCheck('agreed')}
                      className="mt-0.5 w-4 h-4 flex-shrink-0 cursor-pointer"
                      style={{ accentColor: '#8DC63F' }}
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">{c.fields.agreementText}</span>
                  </label>
                  <ErrorMsg msg={errors.agreed} />
                </div>

                {/* Signature */}
                <div>
                  <FieldLabel required>{c.fields.signatureLabel}</FieldLabel>
                  <p className="text-xs text-gray-400 mb-2">{c.fields.signatureNote}</p>
                  <input
                    type="text"
                    placeholder={c.fields.signaturePlaceholder}
                    value={data.signature}
                    onChange={set('signature')}
                    className={baseCls}
                    style={{ ...sg.style, fontStyle: 'italic' }}
                    onFocus={sg.onFocus}
                    onBlur={sg.onBlur}
                  />
                  <ErrorMsg msg={errors.signature} />
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-gray-700">{c.fields.dateLabel}</span>
                  <span className="text-gray-500">{today}</span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full text-sm font-medium text-white py-3.5 rounded-lg transition-colors duration-200 disabled:opacity-60"
                  style={{ backgroundColor: '#1B3461' }}
                  onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = '#8DC63F' }}
                  onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.backgroundColor = '#1B3461' }}
                >
                  {submitting ? c.fields.submitting : c.fields.submit}
                </button>

                <p className="text-center text-xs text-gray-400">{c.fields.footnote}</p>

              </form>
            </div>

          </motion.div>
        )}
      </main>

      <footer className="mt-12 py-8 text-center" style={{ borderTop: '0.5px solid rgba(0,0,0,0.08)' }}>
        <p className="text-xs text-gray-400">© 2026 Vargas Total Tennis · Tampa, FL · vargastotaltennis.com</p>
      </footer>

    </div>
  )
}
