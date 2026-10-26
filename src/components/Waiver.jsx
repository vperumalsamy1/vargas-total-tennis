import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoColor from '../assets/logo-color.png'

// Address for written revocation notices under "Term of Waiver and Release of Liability".
// TODO: Coach to supply the street address + ZIP — certified mail needs a full mailing address.
const REVOCATION_ADDRESS = 'Vargas Total Tennis, Attn: Nestor Vargas, Tampa, FL'

const WAIVER_VERSION = '2026-10 revision'

const CONTENT = {
  en: {
    back:      '← Back to site',
    badge:     'Participation Waiver',
    title:     'Waiver & Release of Liability',
    subtitle:  'Vargas Total Tennis · Tampa Bay, FL · Please read carefully before signing.',
    termsLabel: 'Terms',
    docTitle:  'Waiver and Release of Liability and Waiver of Right to Make Claim, File Suit or Seek Redress for Injury, Illness or Death',
    docSubtitle: '(“Waiver and Release of Liability”)',
    intro: [
      'This is a Waiver and Release of Liability between You, individually, and/or on behalf of your minor child and Vargas Total Tennis.',
      'Vargas Total Tennis, and all of its present and former employees, owners, members, principals, directors, subsidiaries, affiliates, partners, officers and agents are referred to herein as Vargas Total Tennis or The Released Parties.',
      'Vargas Total Tennis offers programs and services in the training, instruction, direction, coaching and playing of tennis. The services offered and provided by Vargas Total Tennis are professional services and Vargas Total Tennis takes great care in delivering these services in a safe, healthy and enjoyable manner on premises and at times that are safe, clean and not likely to present hazards that can result in harm or injury. However, these services are not without risk of injury, death or loss to any participant of the programs and services in the training, instruction, direction, coaching, training and playing of tennis notwithstanding any and all precautions undertaken by Vargas Total Tennis to perform such services in a safe, healthy and enjoyable manner in a safe and clean environment and upon premises that are free of hazards or pose the risk of injury.',
      'You, or if you are signing on behalf of a minor child, are referred to herein as You or The Releasing Parties. You, or if you are signing on behalf of your minor child, your minor child, are agreeing to participate in the activities that constitute the programs and services of Vargas Total Tennis, including but not limited to the training, instruction, direction, coaching and playing of tennis. You acknowledge, for yourself, or on behalf of any minor child for whom you are signing below, that these activities are not without risk of harm or injury and You, or any minor child on whose behalf you are signing below, elect to participate in these activities. Acknowledging such dangers and risks, or signing this form, in no way reduces or eliminates the risk of these dangers.',
      'By signing this Waiver and Release of Liability, You represent that you are over the age of 18 and if signing on behalf of a minor child, you represent that You are the natural guardian or legal guardian thereof.',
      'By signing this Waiver and Release of Liability on behalf of yourself or your minor child, You warrant and represent that a qualified medical physician has conducted a full and thorough physical examination of You, or your minor child, and that such medical physician has cleared You or your minor child to be in a healthy and fit condition to participate in these activities without restrictions, including but not limited to strenuous physical workouts, training, tennis or any related activity. You further acknowledge that You, on behalf of yourself, or your minor child, are responsible to determine for yourself, or for your minor child, the health and fitness to participate in any activity in connection with the services and programs in the training, instruction, direction, coaching or playing of tennis offered and supervised by Vargas Total Tennis and that Vargas Total Tennis has no responsibility to determine the health or fitness of You or your minor child to participate in such activities.',
      'You are agreeing that You, or your minor child, are allowed to participate in a potentially dangerous activity. Even if Vargas Total Tennis uses reasonable care in providing and supervising the activities referenced above, there is a risk of injury, illness or death to You or your minor child. By signing this form on behalf of yourself or your minor child, You are giving up your rights and the rights of your minor child and anyone who can act on behalf of your minor child to recover from Vargas Total Tennis in a lawsuit for personal injury, illness or death, to yourself or the minor child on whose behalf You are signing. You acknowledge that You have the right to refuse to sign this form and Vargas Total Tennis has the right to refuse You or the minor child on whose behalf You are signing this form to participate in the activities offered by Vargas Total Tennis.',
    ],
    agreeLead: 'You agree as follows:',
    sections: [
      {
        heading: 'Waiver and Release of Liability',
        body: 'By signing this Waiver and Release of liability on behalf of yourself, and if signing on behalf of any minor child, You and any minor child on whose behalf You are signing below, including on behalf of themselves, their parents, spouses, children/wards, heirs, assigns, representatives and insurers forever, finally, permanently, unconditionally waive, release, acquit and discharge Vargas Total Tennis and its present and former employees, owners, members, principals, directors, subsidiaries, affiliates, partners, officers and agents (The Released Parties) to the fullest extent permitted by law, from any and all charges, claims, debts, disputes, demands, suits, causes of action, dues, sums of money, accounts, liabilities, losses, expenses and damages now existing or arising in the future, at law or equity, whether caused by the negligence of The Released Parties or otherwise, that arise out of or relate in any way to the participation by You or your minor child in the activities of Vargas Total Tennis or any circumstances in connection therewith. This waiver and release of liability is unlimited and is not contingent on any activity having relationship or connection with the services offered and supervised by The Released Parties. Moreover, this release is not predicated on any warranted action or assumed duty of care by Vargas Total Tennis and extends to any claim or assertion of negligence of the Released Parties.',
      },
      {
        heading: 'Covenant Not to Sue',
        body: 'Releasing Parties hereby covenant not to sue Released Parties on account of any and all charges, claims, debts, disputes, demands, suits, causes of action, rights of action, dues, sums of money, accounts, liabilities, losses, expenses and damages, known or unknown, now existing or arising in the future, at law or equity, whether caused by the negligence of the Released Parties or otherwise.',
      },
      {
        heading: 'Term of Waiver and Release of Liability',
        body: `Releasing Parties agree and acknowledge that the provisions of this agreement are not limited in duration and will continue into the future unless explicitly revoked in writing and delivered by certified mail to ${REVOCATION_ADDRESS}.`,
      },
      {
        heading: 'Video, Photo, Image and Recorded Audio Release',
        body: 'This agreement gives Vargas Total Tennis the exclusive rights and permissions to use all media captured during the participation by You or your minor child on whose behalf you are signing below, including but not limited to video, photos, images or recorded audio. You agree and understand that any video, photo, image or audio recording can be used for any and all purposes including but not limited to publication in both printed and electronic media, internet, websites, advertisement and other promotional uses.',
      },
    ],
    closing: 'By signing below, You represent that You have read this entire Waiver and Release of Liability and Waiver of Right to Make Claim, File Suit or Seek Redress for Injury, Illness or Death and agreeing to all the provisions contained herein on behalf of You and any minor child on whose behalf You are signing.',
    fields: {
      participantName:  'Participant\'s full name',
      dob:              'Date of birth',
      guardianName:     'Parent / Guardian full name',
      guardianNote:     'required if participant is under 18',
      email:            'Email address',
      phone:            'Phone number',
      program:          'Program / Location',
      programDefault:   'Select a program...',
      agreementText:    'I have read this entire Waiver and Release of Liability and Waiver of Right to Make Claim, File Suit or Seek Redress for Injury, Illness or Death, and I agree to all of the provisions contained herein on behalf of myself and any minor child on whose behalf I am signing. I represent that I am over the age of 18 and that this constitutes a legal release of liability.',
      signatureLabel:   'Electronic signature',
      signatureNote:    'Type your full name to sign. By signing, I attest that I am over the age of 18 and, if the participant is a minor, that I am the natural or legal guardian of the above-named minor child, on whose behalf I am agreeing to this Waiver and Release of Liability.',
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
    docTitle:  'Exención y Liberación de Responsabilidad y Renuncia al Derecho de Presentar Reclamación, Interponer Demanda o Buscar Reparación por Lesión, Enfermedad o Muerte',
    docSubtitle: '(“Exención y Liberación de Responsabilidad”)',
    intro: [
      'Esta es una Exención y Liberación de Responsabilidad entre Usted, individualmente, y/o en nombre de su hijo menor de edad, y Vargas Total Tennis.',
      'Vargas Total Tennis y todos sus empleados, propietarios, miembros, directivos, directores, subsidiarias, afiliadas, socios, funcionarios y agentes, actuales y anteriores, se denominan en el presente documento Vargas Total Tennis o Las Partes Liberadas.',
      'Vargas Total Tennis ofrece programas y servicios de entrenamiento, instrucción, dirección y enseñanza del tenis, así como de su práctica. Los servicios ofrecidos y prestados por Vargas Total Tennis son servicios profesionales y Vargas Total Tennis pone el mayor cuidado en prestarlos de manera segura, saludable y agradable, en instalaciones y en horarios que son seguros, limpios y que no presentan riesgos que puedan ocasionar daño o lesión. Sin embargo, estos servicios no están exentos del riesgo de lesión, muerte o pérdida para cualquier participante de los programas y servicios de entrenamiento, instrucción, dirección, enseñanza y práctica del tenis, no obstante todas y cada una de las precauciones adoptadas por Vargas Total Tennis para prestar dichos servicios de manera segura, saludable y agradable, en un entorno seguro y limpio y en instalaciones libres de riesgos o que puedan representar un riesgo de lesión.',
      'Usted, o si firma en nombre de un hijo menor de edad, se denomina en el presente documento Usted o Las Partes Liberadoras. Usted, o si firma en nombre de su hijo menor de edad, su hijo menor de edad, acepta participar en las actividades que constituyen los programas y servicios de Vargas Total Tennis, incluidos, entre otros, el entrenamiento, la instrucción, la dirección, la enseñanza y la práctica del tenis. Usted reconoce, por sí mismo o en nombre de cualquier hijo menor de edad por quien firma a continuación, que estas actividades no están exentas de riesgo de daño o lesión, y que Usted, o cualquier hijo menor de edad en cuyo nombre firma a continuación, elige participar en estas actividades. Reconocer dichos peligros y riesgos, o firmar este formulario, no reduce ni elimina en modo alguno el riesgo de estos peligros.',
      'Al firmar esta Exención y Liberación de Responsabilidad, Usted declara que es mayor de 18 años y, si firma en nombre de un hijo menor de edad, declara que es su padre, madre o tutor legal.',
      'Al firmar esta Exención y Liberación de Responsabilidad en nombre propio o de su hijo menor de edad, Usted garantiza y declara que un médico calificado le ha realizado a Usted, o a su hijo menor de edad, un examen físico completo y exhaustivo, y que dicho médico ha autorizado a Usted o a su hijo menor de edad, por encontrarse en condiciones de salud y aptitud física, a participar en estas actividades sin restricciones, incluidos, entre otros, entrenamientos físicos intensos, entrenamiento, tenis o cualquier actividad relacionada. Usted reconoce además que Usted, por sí mismo o en nombre de su hijo menor de edad, es responsable de determinar por sí mismo, o para su hijo menor de edad, la salud y la aptitud física para participar en cualquier actividad relacionada con los servicios y programas de entrenamiento, instrucción, dirección, enseñanza o práctica del tenis ofrecidos y supervisados por Vargas Total Tennis, y que Vargas Total Tennis no tiene responsabilidad alguna de determinar la salud o la aptitud física de Usted o de su hijo menor de edad para participar en dichas actividades.',
      'Usted acepta que Usted, o su hijo menor de edad, participará en una actividad potencialmente peligrosa. Incluso si Vargas Total Tennis actúa con cuidado razonable al ofrecer y supervisar las actividades mencionadas anteriormente, existe un riesgo de lesión, enfermedad o muerte para Usted o su hijo menor de edad. Al firmar este formulario en nombre propio o de su hijo menor de edad, Usted renuncia a sus derechos y a los derechos de su hijo menor de edad y de cualquier persona que pueda actuar en nombre de su hijo menor de edad de reclamar a Vargas Total Tennis en una demanda por lesión personal, enfermedad o muerte, para Usted o para el menor en cuyo nombre firma. Usted reconoce que tiene derecho a negarse a firmar este formulario y que Vargas Total Tennis tiene derecho a negar a Usted o al menor en cuyo nombre firma este formulario la participación en las actividades ofrecidas por Vargas Total Tennis.',
    ],
    agreeLead: 'Usted acepta lo siguiente:',
    sections: [
      {
        heading: 'Exención y Liberación de Responsabilidad',
        body: 'Al firmar esta Exención y Liberación de Responsabilidad en nombre propio y, si firma en nombre de cualquier hijo menor de edad, Usted y cualquier hijo menor de edad en cuyo nombre firma a continuación, incluso en nombre de ellos mismos, sus padres, cónyuges, hijos/pupilos, herederos, cesionarios, representantes y aseguradoras, renuncian, liberan, eximen y descargan para siempre, de forma definitiva, permanente e incondicional, a Vargas Total Tennis y a sus empleados, propietarios, miembros, directivos, directores, subsidiarias, afiliadas, socios, funcionarios y agentes, actuales y anteriores (Las Partes Liberadas), en la máxima medida permitida por la ley, de todos y cada uno de los cargos, reclamaciones, deudas, disputas, demandas, juicios, causas de acción, cuotas, sumas de dinero, cuentas, responsabilidades, pérdidas, gastos y daños existentes ahora o que surjan en el futuro, en derecho o en equidad, ya sean causados por la negligencia de Las Partes Liberadas o de otro modo, que surjan de o se relacionen de cualquier manera con la participación de Usted o de su hijo menor de edad en las actividades de Vargas Total Tennis o con cualquier circunstancia relacionada con ello. Esta exención y liberación de responsabilidad es ilimitada y no está condicionada a que ninguna actividad tenga relación o conexión con los servicios ofrecidos y supervisados por Las Partes Liberadas. Además, esta liberación no se basa en ninguna acción garantizada ni en ningún deber de cuidado asumido por Vargas Total Tennis, y se extiende a cualquier reclamación o alegación de negligencia de Las Partes Liberadas.',
      },
      {
        heading: 'Compromiso de No Demandar',
        body: 'Las Partes Liberadoras se comprometen por el presente a no demandar a Las Partes Liberadas por todos y cada uno de los cargos, reclamaciones, deudas, disputas, demandas, juicios, causas de acción, derechos de acción, cuotas, sumas de dinero, cuentas, responsabilidades, pérdidas, gastos y daños, conocidos o desconocidos, existentes ahora o que surjan en el futuro, en derecho o en equidad, ya sean causados por la negligencia de Las Partes Liberadas o de otro modo.',
      },
      {
        heading: 'Vigencia de la Exención y Liberación de Responsabilidad',
        body: `Las Partes Liberadoras aceptan y reconocen que las disposiciones de este acuerdo no tienen una duración limitada y continuarán en el futuro a menos que sean revocadas expresamente por escrito y entregadas por correo certificado a ${REVOCATION_ADDRESS}.`,
      },
      {
        heading: 'Autorización de Video, Fotografía, Imagen y Audio Grabado',
        body: 'Este acuerdo otorga a Vargas Total Tennis los derechos y permisos exclusivos para usar todo el material capturado durante la participación de Usted o de su hijo menor de edad en cuyo nombre firma a continuación, incluidos, entre otros, video, fotografías, imágenes o audio grabado. Usted acepta y entiende que cualquier video, fotografía, imagen o grabación de audio puede utilizarse para todos y cada uno de los fines, incluidos, entre otros, la publicación en medios impresos y electrónicos, internet, sitios web, publicidad y otros usos promocionales.',
      },
    ],
    closing: 'Al firmar a continuación, Usted declara que ha leído en su totalidad esta Exención y Liberación de Responsabilidad y Renuncia al Derecho de Presentar Reclamación, Interponer Demanda o Buscar Reparación por Lesión, Enfermedad o Muerte, y que acepta todas las disposiciones contenidas en el presente documento en nombre propio y de cualquier hijo menor de edad en cuyo nombre firma.',
    translationNote: 'Esta traducción se ofrece únicamente para su conveniencia. En caso de discrepancia, prevalecerá la versión en inglés del documento.',
    fields: {
      participantName:  'Nombre completo del participante',
      dob:              'Fecha de nacimiento',
      guardianName:     'Nombre completo del padre / tutor',
      guardianNote:     'requerido si el participante es menor de 18 años',
      email:            'Correo electrónico',
      phone:            'Número de teléfono',
      program:          'Programa / Ubicación',
      programDefault:   'Selecciona un programa...',
      agreementText:    'He leído en su totalidad esta Exención y Liberación de Responsabilidad y Renuncia al Derecho de Presentar Reclamación, Interponer Demanda o Buscar Reparación por Lesión, Enfermedad o Muerte, y acepto todas las disposiciones contenidas en el presente documento en nombre propio y de cualquier hijo menor de edad en cuyo nombre firmo. Declaro que soy mayor de 18 años y que esto constituye una liberación legal de responsabilidad.',
      signatureLabel:   'Firma electrónica',
      signatureNote:    'Escriba su nombre completo para firmar. Al firmar, declaro que soy mayor de 18 años y, si el participante es menor de edad, que soy su padre, madre o tutor legal, en cuyo nombre acepto esta Exención y Liberación de Responsabilidad.',
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
        waiver_version:       WAIVER_VERSION,
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

              <h2 className="text-base font-semibold text-gray-900 leading-snug mb-1">{c.docTitle}</h2>
              <p className="text-sm text-gray-500 mb-6">{c.docSubtitle}</p>

              <div className="flex flex-col gap-4">
                {c.intro.map((para, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>

              <p className="text-sm font-semibold text-gray-800 mt-6 mb-4">{c.agreeLead}</p>

              <div className="flex flex-col gap-5">
                {c.sections.map(({ heading, body }) => (
                  <div key={heading}>
                    <p className="text-sm font-semibold text-gray-800 mb-1">{heading}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mt-6 pt-6" style={{ borderTop: '0.5px solid rgba(0,0,0,0.08)' }}>
                {c.closing}
              </p>

              {c.translationNote && (
                <p className="text-xs text-gray-400 leading-relaxed mt-5">{c.translationNote}</p>
              )}
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
