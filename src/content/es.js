export const content = {
  lang: 'es',

  seo: {
    title: 'Vargas Total Tennis · Clases de Tenis en Tampa Bay, FL',
    description:
      'Clases de tenis privadas y grupales para niños y adultos en Tampa Bay. Entrenador certificado USPTA y PTR con experiencia profesional. ¡Reserva tu clase gratis hoy!',
    hreflang: {
      en: 'https://vargastotaltennis.com',
      es: 'https://vargastotaltennis.com/es',
    },
  },

  nav: {
    links: [
      { label: 'Sobre Mí',  to: 'about' },
      { label: 'Programas', to: 'programs' },
      { label: 'Precios',   to: 'pricing' },
      { label: 'Reseñas',   to: 'testimonials' },
      { label: 'Contacto',  to: 'contact' },
    ],
    cta: 'Reserva tu clase',
  },

  hero: {
    eyebrow: 'Tampa Bay, Florida',
    // Last item receives the light green accent colour
    headline: ['Entrena mejor.', 'Juega mejor.', 'Ama el deporte.'],
    subtext:
      'Clases privadas y clínicas durante todo el año para todos los niveles — desde principiantes hasta jugadores de torneo. Con base en Tampa Bay, FL.',
    cta_primary: 'Reserva una clase gratis',
    cta_ghost: 'Ver programas',
    stats: [
      { number: '10+',         label: 'Años de experiencia' },
      { number: 'Todas las',   label: 'edades' },
      { number: 'Certificado', label: 'SGI' },
      { number: '⭐ 5.0',      label: 'Calificación' },
    ],
    quote: {
      text: 'El Coach Nestor transformó el juego de mi hijo — y su amor por el deporte.',
      attribution: 'Padre de estudiante junior',
    },
  },

  trust: [
    'Entrenador Certificado USPTA & PTR',
    'All-American y Experiencia Profesional',
    'Tampa Bay · Saddlebrook Resort',
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
        price: '$60 / hr',
        priceNote: '[UPDATE: confirmar tarifa]',
        cta: 'Reservar clase',
      },
      {
        title: 'Clínicas Grupales',
        description:
          'Sesiones grupales de alta energía con ejercicios innovadores que mejoran la técnica y el acondicionamiento físico — ¡y son muy divertidas!',
        price: '$30 / persona',
        priceNote: '[UPDATE: confirmar tarifa]',
        cta: 'Unirse al grupo',
      },
      {
        title: 'Academia Junior',
        description:
          'Entrenamiento apropiado para niños de todas las habilidades. Los niños son desafiados con ejercicios creativos que desarrollan técnica, condición física y amor por el deporte.',
        price: 'Precio personalizado',
        priceNote: '[UPDATE: consultar para detalles]',
        cta: 'Más información',
      },
      {
        title: 'Preparación para Torneos',
        description:
          'Entrenamiento avanzado para jugadores competitivos. Nestor ha trabajado con profesionales del top 200 ATP y WTA — sabe lo que se necesita para competir.',
        price: 'Precio personalizado',
        priceNote: '[UPDATE: consultar para detalles]',
        cta: 'Comenzar',
      },
    ],
  },

  about: {
    label: 'Sobre el entrenador',
    heading: 'Un entrenador que vivió el juego — y ama enseñarlo',
    para1:
      'El Coach Nestor Vargas combina experiencia de clase mundial con pasión genuina en cada clase. Nacido en Colombia, Nestor jugó tenis universitario de División I y II en los Estados Unidos, ganó el prestigioso premio All-American y luego compitió profesionalmente. Posee certificaciones USPTA y PTR — dos de las credenciales más altas en el deporte.',
    para2:
      'Hoy, Nestor canaliza esa experiencia en ejercicios innovadores, imaginativos y divertidos que mejoran tanto la técnica como el acondicionamiento físico. Ha trabajado con miles de jugadores de todos los niveles — incluyendo profesionales del top 200 ATP y WTA — y actualmente asesora en el reconocido Saddlebrook Resort. Ya sea que su hijo tome una raqueta por primera vez o se esté preparando para competir, Nestor lo guía exactamente donde está.',
    bullets: [
      'Certificado USPTA & PTR — las credenciales más altas del tenis',
      'Jugador All-American con experiencia en el tour profesional',
      'Ejercicios innovadores que combinan técnica y condición física',
      '¿Sin raqueta? No hay problema — solo trae una toalla y diviértete',
    ],
    badges: [
      'Certificado USPTA',
      'Certificado PTR',
      'All-American',
      'Tampa FL',
      'Saddlebrook Resort',
    ],
    avatar: 'NV',
    coach_name: 'Nestor Vargas',
    coach_title: 'Entrenador Principal · Vargas Total Tennis',
  },

  testimonials: {
    label: 'Reseñas',
    title: 'Lo que dicen las familias de Tampa',
    items: [
      {
        quote:
          '¡Los ejercicios del Coach Nestor son como ningún otro que mi hijo haya experimentado. ¡Desafiantes, divertidos e increíblemente efectivos!',
        name: 'Padre de estudiante junior',
        subtitle: 'Programa junior · Tampa, FL',
        initials: 'JF',
        color: '#1D9E75',
      },
      {
        quote:
          'Llegué sin experiencia y sin raqueta — Nestor me ayudó en ambas. La mejor decisión que tomé.',
        name: 'Adulto principiante',
        subtitle: 'Clases privadas · Tampa, FL',
        initials: 'MR',
        color: '#EF9F27',
      },
      {
        quote:
          'Se siente la experiencia profesional detrás de cada clase. Mi hija pasó de jugadora casual a competir en torneos.',
        name: 'Padre de Tampa, 2 años',
        subtitle: 'Junior y preparación para torneos',
        initials: 'SL',
        color: '#378ADD',
      },
    ],
  },

  pricing: {
    label: 'Precios',
    title: 'Tarifas simples y transparentes',
    tiers: [
      {
        name: 'Clínica Grupal',
        price: '$30',
        period: '/ persona',
        note: '[UPDATE: confirmar tarifa]',
        featured: false,
        badge: null,
        cta: 'Reservar ahora',
        features: [
          'Grupos pequeños (máx. 6)',
          'Sesiones de 60 minutos',
          'Ejercicios innovadores + partidos',
          'Todos los niveles',
          'Ambiente divertido y dinámico',
        ],
      },
      {
        name: 'Clase Privada',
        price: '$60',
        period: '/ hr',
        note: '[UPDATE: confirmar tarifa]',
        featured: true,
        badge: 'Más popular',
        cta: 'Reservar clase privada',
        features: [
          'Completamente personalizado',
          'Horario flexible',
          'Niños y adultos',
          'Seguimiento de progreso',
          'Disponible todo el año',
          'Primera clase de prueba gratis', // [UPDATE: confirmar si se ofrece]
        ],
      },
      {
        name: 'Academia Junior',
        price: 'Personalizado',
        period: '',
        note: '[UPDATE: consultar para detalles]',
        featured: false,
        badge: null,
        cta: 'Contáctanos',
        features: [
          'Edades 5–18, por nivel',
          'Sesiones semanales',
          'Preparación para torneos',
          'Actualizaciones a padres',
          'Afiliado a Saddlebrook',
        ],
      },
    ],
  },

  contact: {
    label: 'Hablemos',
    heading: '¿Listo para pisar la cancha?',
    subtext:
      'Envíale un mensaje al Coach Nestor y te responderá en menos de 24 horas. Clase de prueba gratuita disponible para nuevos estudiantes.',
    details: [
      'Tampa Bay, FL · Saddlebrook Resort',
      '[UPDATE: teléfono]',
      '[UPDATE: correo electrónico]',
      'Lun–Sáb · 7am a 7pm  [UPDATE]',
      '@vargastotaltennis  [UPDATE]',
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
        { value: 'junior',     label: 'Academia Junior' },
        { value: 'tournament', label: 'Preparación para Torneos' },
        { value: 'unsure',     label: 'No estoy seguro/a aún' },
      ],
      message_label: 'Cuéntale al Coach Nestor sobre ti',
      message_placeholder:
        'Cuéntale al Coach Nestor sobre ti o tu hijo — edad, experiencia, metas...',
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
        message: 'Por favor cuéntale algo a Nestor sobre ti',
      },
    },
  },

  footer: {
    tagline: 'Entrenamiento experto para todas las edades · Tampa Bay, FL',
    copyright: '© 2026 Vargas Total Tennis · Tampa, FL',
    domain: 'CoachNestor.com',
    domain_note: '[UPDATE: dominio real]',
  },
}
