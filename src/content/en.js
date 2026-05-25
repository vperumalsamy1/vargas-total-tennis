export const content = {
  lang: 'en',

  seo: {
    title: 'Vargas Total Tennis · Tampa Bay, FL',
    description:
      'Expert tennis coaching for all ages in Tampa Bay, FL. Private lessons, group clinics, junior academy, and tournament prep with Coach Nestor Vargas.',
    hreflang: {
      en: 'https://vargastotaltennis.com',
      es: 'https://vargastotaltennis.com/es',
    },
  },

  nav: {
    links: [
      { label: 'About',    to: 'about' },
      { label: 'Programs', to: 'programs' },
      { label: 'Pricing',  to: 'pricing' },
      { label: 'Reviews',  to: 'testimonials' },
      { label: 'Contact',  to: 'contact' },
    ],
    cta: 'Book a lesson',
  },

  hero: {
    eyebrow: 'Tampa Bay, Florida',
    // Last item in the array receives the light green accent colour
    headline: ['Train smarter.', 'Play better.', 'Love the game.'],
    subtext:
      'Year-round private lessons and clinics for all ages — from first-time beginners to advanced tournament players. Based in Tampa Bay, FL.',
    cta_primary: 'Book a free trial',
    cta_ghost: 'View programs',
    stats: [
      { number: '10+',      label: 'Years Coaching' },
      { number: 'All Ages', label: 'Welcome' },
      { number: 'SGI',      label: 'Certified' },
      { number: '⭐ 5.0',   label: 'Rating' },
    ],
    quote: {
      text: "Coach Nestor's drills are unlike anything my son has experienced. Challenging, fun, and incredibly effective.",
      attribution: 'Parent of junior student',
    },
  },

  trust: [
    'USPTA & PTR Certified Coach',
    'All-American & Professional Tour Experience',
    'Tampa Bay · Saddlebrook Resort',
    'All levels · All ages · Year round',
  ],

  programs: {
    label: 'Programs',
    title: 'Lessons for every level',
    items: [
      {
        title: 'Private Lessons',
        description:
          'One-on-one coaching tailored to your game. Offered year-round for all levels from complete beginners to advanced tournament players.',
        price: '$60 / hr',
        priceNote: '[UPDATE: confirm rate]',
        cta: 'Book a session',
      },
      {
        title: 'Group Clinics',
        description:
          'High-energy group sessions with innovative drills that improve skill and physical conditioning — and are genuinely fun.',
        price: '$30 / person',
        priceNote: '[UPDATE: confirm rate]',
        cta: 'Join a group',
      },
      {
        title: 'Junior Academy',
        description:
          'Age-appropriate training for kids of all abilities. Creative drills build technique, fitness, and a lifelong love for the sport.',
        price: 'Custom pricing',
        priceNote: '[UPDATE: contact for details]',
        cta: 'Learn more',
      },
      {
        title: 'Tournament Prep',
        description:
          "Advanced coaching for competitive players. Nestor has worked with top 200 ATP and WTA professionals — he knows what it takes.",
        price: 'Custom pricing',
        priceNote: '[UPDATE: contact for details]',
        cta: 'Get started',
      },
    ],
  },

  about: {
    label: 'About Coach Nestor',
    heading: "A coach who's been there — and loves bringing others along",
    para1:
      'Coach Nestor Vargas brings a rare combination of world-class experience and genuine passion to every lesson. A Colombian-born tennis professional, Nestor played Division I and II college tennis in the US, earned the prestigious All-American tennis award, and went on to compete professionally. He holds both USPTA and PTR certifications — two of the highest coaching credentials in the sport.',
    para2:
      "Today Nestor channels that experience into innovative, imaginative and fun drills that improve both skill and physical conditioning. He's worked with thousands of players across all levels — including top 200 ATP and WTA professionals — and currently consults at the renowned Saddlebrook Resort. Whether your child is picking up a racket for the first time or you're preparing for tournament play, Nestor meets you exactly where you are.",
    bullets: [
      "USPTA & PTR certified — two of tennis's highest coaching credentials",
      'All-American college player with professional tour experience',
      'Innovative drills combining skill development and physical fitness',
      'No racket? No problem — just bring a towel and have fun',
    ],
    badges: ['USPTA Certified', 'PTR Certified', 'All-American', 'Tampa FL', 'Saddlebrook Resort'],
    avatar: 'NV',
    coach_name: 'Nestor Vargas',
    coach_title: 'Head Coach · Vargas Total Tennis',
  },

  testimonials: {
    label: 'Reviews',
    title: 'What Tampa families say',
    items: [
      {
        quote:
          "Coach Nestor's drills are unlike anything my son has experienced. Challenging, fun, and incredibly effective.",
        name: 'Parent of junior student',
        subtitle: 'Junior program · Tampa, FL',
        initials: 'JF',
        color: '#1D9E75',
      },
      {
        quote:
          "I came with zero experience and no racket — Nestor had me covered on both. Best decision I made.",
        name: 'Adult beginner',
        subtitle: 'Private lessons · Tampa, FL',
        initials: 'MR',
        color: '#EF9F27',
      },
      {
        quote:
          'You can feel the professional experience behind every lesson. My daughter went from casual player to competing in tournaments.',
        name: 'Tampa parent, 2 years',
        subtitle: 'Junior & Tournament prep',
        initials: 'SL',
        color: '#378ADD',
      },
    ],
  },

  pricing: {
    label: 'Pricing',
    title: 'Simple, transparent rates',
    tiers: [
      {
        name: 'Group Clinics',
        price: '$30',
        period: '/ person',
        note: '[UPDATE: confirm rate]',
        featured: false,
        badge: null,
        cta: 'Join a group',
        features: [
          'Small group sessions (max 6)',
          '60-minute structured lesson',
          'Innovative drills + match play',
          'All skill levels welcome',
          'Fun, high-energy environment',
        ],
      },
      {
        name: 'Private Lesson',
        price: '$60',
        period: '/ hr',
        note: '[UPDATE: confirm rate]',
        featured: true,
        badge: 'Most popular',
        cta: 'Book a private lesson',
        features: [
          'Fully personalized coaching',
          'Flexible scheduling',
          'Kids & adults welcome',
          'Progress tracking',
          'Year-round availability',
          'Free first trial lesson', // [UPDATE: confirm if offered]
        ],
      },
      {
        name: 'Junior Academy',
        price: 'Custom',
        period: 'pricing',
        note: '[UPDATE: contact for details]',
        featured: false,
        badge: null,
        cta: 'Enquire now',
        features: [
          'Ages 5–18, grouped by level',
          'Weekly sessions',
          'Tournament preparation',
          'Parent progress updates',
          'Saddlebrook Resort affiliated',
        ],
      },
    ],
  },

  contact: {
    label: "Let's connect",
    heading: 'Ready to step on the court?',
    subtext:
      "Send Coach Nestor a message and he'll get back to you within 24 hours. Free trial lesson available for new students.",
    details: [
      'Tampa Bay, FL · Saddlebrook Resort',
      '[UPDATE: real phone number]',
      '[UPDATE: real email address]',
      'Mon–Sat · 7 am to 7 pm  [UPDATE]',
      '@vargastotaltennis  [UPDATE]',
    ],
    form: {
      first_name: 'First name',
      last_name: 'Last name',
      email: 'Email',
      phone: 'Phone (optional)',
      interest_label: "I'm interested in",
      interests: [
        { value: '',           label: 'Select a program...' },
        { value: 'private',    label: 'Private Lessons' },
        { value: 'group',      label: 'Group Clinics' },
        { value: 'junior',     label: 'Junior Academy' },
        { value: 'tournament', label: 'Tournament Prep' },
        { value: 'unsure',     label: "I'm not sure yet" },
      ],
      message_label: 'Tell Coach Nestor about yourself',
      message_placeholder:
        'Tell Coach Nestor about yourself or your child — age, experience, goals...',
      submit: "Send message — it's free to enquire",
      success_heading: 'Message sent!',
      success_text:
        'Coach Nestor will be in touch within 24 hours. Looking forward to seeing you on the court.',
      footnote: 'No spam, ever. Nestor reads every message personally.',
      errors: {
        first_name: 'First name is required',
        last_name: 'Last name is required',
        email_required: 'Email is required',
        email_invalid: 'Please enter a valid email',
        message: 'Please tell Nestor a bit about yourself',
      },
    },
  },

  footer: {
    tagline: 'Expert tennis coaching for all ages · Tampa Bay, FL',
    copyright: '© 2026 Vargas Total Tennis · Tampa, FL',
    domain: 'CoachNestor.com',
    domain_note: '[UPDATE: real domain]',
  },
}
