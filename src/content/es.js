export const content = {
  lang: 'es',

  seo: {
    title: 'Vargas Total Tennis · Clases de Tenis en Tampa Bay, FL',
    description:
      'Clases de tenis privadas y grupales para niños y adultos en Tampa Bay. Entrenadores certificados USPTA y PTR con experiencia profesional. ¡Reserva hoy!',
    hreflang: {
      en: 'https://vargastotaltennis.com',
      es: 'https://vargastotaltennis.com/es',
    },
  },

  nav: {
    links: [
      { label: 'Entrenadores', to: 'about' },
      { label: 'Programas',    to: 'programs' },
      { label: 'Precios',      to: 'pricing' },
      { label: 'Reseñas',      to: 'testimonials' },
      { label: 'Contacto',     to: 'contact' },
    ],
    cta: 'Reserva tu clase',
  },

  hero: {
    eyebrow: 'Tampa Bay, Florida',
    headline: ['Entrena mejor.', 'Juega mejor.', 'Ama el deporte.'],
    subtext:
      'Clases privadas y clínicas durante todo el año para todos los niveles — desde principiantes hasta jugadores de torneo. Servicio en Tampa, Carrollwood, Lutz, Wesley Chapel y New Tampa.',
    cta_primary: 'Reserva una clase con descuento',
    cta_call: 'Escríbenos',
    cta_ghost: 'Ver programas',
    stats: [
      { number: '21+',         label: 'Años de experiencia' },
      { number: 'Todas las',   label: 'edades' },
      { number: 'USPTA',       label: '& PTR Certificado' },
      { number: '⭐ 5.0',      label: 'Calificación' },
    ],
    quote: {
      text: 'El Coach Nestor transformó el juego de mi hijo — y su amor por el deporte.',
      attribution: 'Padre de estudiante junior',
    },
  },

  trust: [
    'Entrenadores Certificados USPTA & PTR',
    'All-American y Experiencia Profesional',
    'Tampa Bay · Múltiples ubicaciones',
    'Todos los niveles · Todas las edades · Todo el año',
  ],

  programs: {
    label: 'Programas',
    title: 'Clases para cada nivel',
    items: [
      {
        title: 'Clases Privadas',
        description:
          'Entrenamiento personalizado adaptado a tu juego. Disponible todo el año para todos los niveles, desde principiantes hasta jugadores de torneo avanzados.',
        price: 'Consultar precio',
        priceNote: '',
        cta: 'Reservar clase',
      },
      {
        title: 'Clínicas Extraescolares y Homeschool',
        description:
          'Clínicas entre semana en tres parques de Tampa — lun en Country Place Park (edades 6–8 a las 5:00 pm · 9+ a las 5:45 pm), mar en West Village Park (edades 6–10 a las 3:20 pm · 11+ a las 4:05 pm), jue en Hampton Park (edades 7+ a las 9:15 am). Dona lo que puedas.',
        price: 'Donación voluntaria',
        priceNote: '',
        cta: 'Reservar lugar',
      },
      {
        title: 'Clínicas del Sábado',
        description:
          'Sesiones de fin de semana en Country Place Park (15728 Country Lake Dr.) — Clínica para adultos a las 8:00 am, edades 6–8 a las 9:00 am, edades 9+ a las 9:45 am–11:00 am. Todos los niveles bienvenidos. Dona lo que puedas.',
        price: 'Donación voluntaria',
        priceNote: '',
        cta: 'Reservar lugar',
      },
      {
        title: 'Preparación para Torneos',
        description:
          'Entrenamiento avanzado para jugadores competitivos. El Coach Nestor ha trabajado con profesionales del top 200 ATP y WTA — sabe lo que se necesita para competir.',
        price: 'Consultar precio',
        priceNote: '',
        cta: 'Comenzar',
      },
    ],
  },

  about: {
    label: 'Conoce a los entrenadores',
    heading: 'Experimentados. Apasionados. Comprometidos con tu crecimiento.',
    coaches: [
      {
        avatar: 'NV',
        name: 'Nestor Vargas',
        title: 'Entrenador Principal · Vargas Total Tennis',
        para1:
          'El Coach Nestor Vargas combina experiencia de clase mundial con pasión genuina en cada clase. Nacido en Colombia, Nestor comenzó a entrenar a los 14 años y lleva más de 21 años desarrollando jugadores de todos los niveles. Jugó tenis universitario de División I y II en los Estados Unidos, ganó el prestigioso premio All-American y luego compitió profesionalmente.',
        para2:
          'Hoy, Nestor canaliza esa experiencia en ejercicios innovadores que mejoran tanto la técnica como el acondicionamiento físico. Posee certificaciones USPTA y PTR — dos de las credenciales más altas del tenis — y ha trabajado con miles de jugadores, incluyendo profesionales del top 200 ATP y WTA. Actualmente entrena en el reconocido Saddlebrook Resort.',
        bullets: [
          'Certificado USPTA & PTR — credenciales más altas del tenis',
          '21+ años de experiencia — comenzó a entrenar a los 14 años',
          'Jugador All-American con experiencia en el tour profesional',
          'Ha trabajado con profesionales del top 200 ATP y WTA',
        ],
        badges: ['Certificado USPTA', 'Certificado PTR', 'All-American', 'Saddlebrook Resort'],
      },
      {
        avatar: 'LC',
        name: 'Coach Leo',
        title: 'Entrenador · Certificado PTR',
        para1:
          'El viaje tenístico del Coach Leo comenzó a los siete años en Venezuela, donde superó recursos limitados para convertirse en el #1 juvenil del país — ganando múltiples títulos nacionales y compitiendo internacionalmente. Su éxito le dio la oportunidad de entrenar en programas de alto rendimiento en Alabama y Florida, compitiendo junto a jugadores universitarios y profesionales.',
        para2:
          'Hoy, como entrenador certificado PTR con más de 1,000 horas de experiencia, Leo trabaja con jugadores de todas las edades y niveles — desde principiantes hasta atletas competitivos y adultos. Conocido por su enfoque energético y estructurado, se centra en el desarrollo técnico, el rendimiento en partidos y la confianza. Actualmente es estudiante de Ingeniería Mecánica en la Universidad del Sur de Florida.',
        bullets: [
          'Certificado PTR con más de 1,000 horas de experiencia',
          'Ex #1 juvenil de Venezuela — múltiple campeón nacional',
          'Entrenado en programas de alto rendimiento en Alabama y Florida',
          'Trabaja con todas las edades, desde principiantes hasta competidores',
        ],
        badges: ['Certificado PTR', '#1 Venezuela Juvenil', 'USF Ingeniería', 'Bilingüe EN/ES'],
      },
    ],
  },

  testimonials: {
    label: 'Reseñas',
    title: 'Lo que dicen las familias de Tampa',
    review_cta: {
      label: 'Comparte tu experiencia',
      subtext: '¿Entrenaste con el Coach Nestor o el Coach Leo? Nos encantaría escucharte.',
      name_label: 'Tu nombre',
      name_placeholder: 'María García',
      review_label: 'Tu experiencia',
      review_placeholder: 'Cuéntanos sobre tus clases — qué te gustó, cómo mejoraste...',
      submit: 'Enviar reseña',
      success_heading: '¡Gracias!',
      success_text: 'Tu reseña significa mucho para nosotros. Gracias por compartir tu experiencia.',
    },
    items: [
      {
        quote:
          "I've had a few tennis coaches and by far he is the best. He has shown me so many new things I never knew. He is patient, kind, attentive and professional. Highly recommend Nestor!!",
        name: 'Julie H.',
        subtitle: 'Lessons.com · Reseña verificada',
        initials: 'JH',
        color: '#8DC63F',
      },
      {
        quote:
          "Nestor will stay on you with prompt correction to make sure you are swinging correctly. He helps you break bad habits with positive encouragement and step by step instructions. He simply makes your tennis game more enjoyable. Highly motivational. He is our new instructor now.",
        name: 'Nicholas',
        subtitle: 'Groupon · Reseña verificada',
        initials: 'N',
        color: '#EF9F27',
      },
      {
        quote:
          "Nestor was incredibly friendly while also being an effective mentor. He teaches in a way that makes tennis fun and was very encouraging to me and my beginner brother. I couldn't recommend him enough!",
        name: 'Maryam L.',
        subtitle: 'Lessons.com · Reseña verificada',
        initials: 'ML',
        color: '#378ADD',
      },
      {
        quote:
          "He helped me a lot with technical things of the tennis sport. I have improved so much from where I started. His detail to what I'm doing helps me a lot. 10/10 would recommend to anyone who wants to get their game to the next level.",
        name: 'Carlos Y F.',
        subtitle: 'Lessons.com · Reseña verificada',
        initials: 'CY',
        color: '#8DC63F',
      },
      {
        quote:
          "Love the lessons! Nestor is super dedicated and detail oriented — so important to get technique right from the beginning. Thank you!",
        name: 'Jen',
        subtitle: 'Groupon · Reseña verificada',
        initials: 'J',
        color: '#EF9F27',
      },
      {
        quote:
          "Nestor will teach you the fundamentals. He's not just a hitting partner. He's the best coach I've had. I highly recommend him.",
        name: 'Edda R.',
        subtitle: 'Lessons.com · Reseña verificada',
        initials: 'ER',
        color: '#378ADD',
      },
    ],
  },

  pricing: {
    label: 'Precios',
    title: 'Cada jugador es diferente — las tarifas lo reflejan',
    subtext:
      'Las tarifas varían según la ubicación, el tipo de sesión y tu situación individual. Contáctanos y encontraremos lo que mejor se adapte a ti.',
    options: [
      {
        name: 'Clases Privadas',
        icon: 'user',
        description: 'Sesiones individuales completamente adaptadas a tu juego, disponibles todo el año para todas las edades y niveles.',
        features: [
          'Entrenamiento completamente personalizado',
          'Niños y adultos bienvenidos',
          'Horario flexible',
          'Todos los niveles',
          'Disponible todo el año',
          'Sesiones enfocadas en el progreso',
        ],
        cta: 'Consultar precio',
        featured: false,
      },
      {
        name: 'Clínicas Grupales',
        icon: 'users',
        description: 'Sesiones grupales estructuradas en múltiples ubicaciones en Tampa, todos los lunes, martes, jueves y sábados.',
        features: [
          'Sesiones lun, mar, jue y sáb',
          'Múltiples ubicaciones en Tampa',
          'Edades 6+ · Adultos también',
          'Ejercicios innovadores + partidos',
          'Dona lo que puedas',
          'Ambiente divertido y dinámico',
        ],
        cta: 'Consultar detalles',
        featured: true,
      },
    ],
    note: 'Los estudiantes de larga data y las familias que regresan reciben tarifas preferenciales — solo pregunta.',
  },

  contact: {
    label: 'Hablemos',
    heading: '¿Listo para pisar la cancha?',
    subtext:
      'Envíanos un mensaje y el Coach Nestor te responderá en menos de 24 horas. Clase de prueba con descuento disponible para nuevos estudiantes.',
    details: [
      'Tampa Bay, FL · Múltiples ubicaciones',
      '(864) 431-2442',
      'nestor@vargastotaltennis.com',
      'Lun–Sáb · 7am a 7pm',
      '@vargastotaltennis',
    ],
    form: {
      first_name: 'Nombre',
      last_name: 'Apellido',
      email: 'Correo electrónico',
      phone: 'Teléfono (opcional)',
      interest_label: 'Interesado en...',
      interests: [
        { value: '',           label: 'Selecciona un programa...' },
        { value: 'private',    label: 'Clases Privadas' },
        { value: 'group',      label: 'Clínicas Grupales' },
        { value: 'summer',     label: 'Campamento de Verano' },
        { value: 'tournament', label: 'Preparación para Torneos' },
        { value: 'unsure',     label: 'No estoy seguro/a aún' },
      ],
      message_label: 'Cuéntanos sobre ti',
      message_placeholder:
        'Cuéntanos sobre ti o tu hijo — edad, experiencia, metas...',
      submit: 'Enviar mensaje — es gratis consultar',
      success_heading: '¡Mensaje enviado!',
      success_text:
        'El Coach Nestor te contactará en menos de 24 horas. ¡Nos vemos en la cancha!',
      footnote: 'Sin spam, nunca. Nestor lee cada mensaje personalmente.',
      errors: {
        first_name: 'El nombre es requerido',
        last_name: 'El apellido es requerido',
        email_required: 'El correo electrónico es requerido',
        email_invalid: 'Por favor ingresa un correo válido',
        message: 'Por favor cuéntanos algo sobre ti',
      },
    },
  },

  footer: {
    tagline: 'Entrenamiento experto para todas las edades · Tampa Bay, FL',
    copyright: '© 2026 Vargas Total Tennis · Tampa, FL',
    domain: 'vargastotaltennis.com',
    domain_note: '',
  },
}
