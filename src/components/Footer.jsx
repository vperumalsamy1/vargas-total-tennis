import { Link } from 'react-scroll'
import logoWhite from '../assets/logo-white.svg'

const NAV_LINKS = [
  { label: 'About',    to: 'about' },
  { label: 'Programs', to: 'programs' },
  { label: 'Pricing',  to: 'pricing' },
  { label: 'Reviews',  to: 'testimonials' },
  { label: 'Contact',  to: 'contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#085041' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>

          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <img src={logoWhite} alt="Vargas Total Tennis" className="h-8 w-auto" />
            <p
              className="text-sm max-w-xs"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Expert tennis coaching for all ages · Tampa Bay, FL
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-7 gap-y-3">
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={500}
                offset={-64}
                className="text-sm cursor-pointer transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
          <p>© 2026 Vargas Total Tennis · Tampa, FL</p>
          <p>
            {/* [UPDATE: replace with real domain once registered] */}
            CoachNestor.com{' '}
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>[UPDATE: real domain]</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
