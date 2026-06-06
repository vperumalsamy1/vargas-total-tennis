import { Link } from 'react-scroll'
import { NavLink, useLocation } from 'react-router-dom'
import logoFooter from '../assets/logo-footer.png'

// Nav links come from content so they're translated in /es
export default function Footer({ content }) {
  const { tagline, copyright, domain, domain_note } = content
  const { pathname } = useLocation()

  // Use the nav links for the current language route
  // Footer receives them via content.footer, but we need the nav links too.
  // Since Footer only gets footer content, we infer language from route.
  const isSpanish = pathname === '/es'
  const footerLinks = isSpanish
    ? [
        { label: 'Entrenadores', to: 'about' },
        { label: 'Programas', to: 'programs' },
        { label: 'Precios',   to: 'pricing' },
        { label: 'Reseñas',   to: 'testimonials' },
        { label: 'Contacto',  to: 'contact' },
      ]
    : [
        { label: 'About',    to: 'about' },
        { label: 'Programs', to: 'programs' },
        { label: 'Pricing',  to: 'pricing' },
        { label: 'Reviews',  to: 'testimonials' },
        { label: 'Contact',  to: 'contact' },
      ]

  const mutedLink = { color: 'rgba(255,255,255,0.55)' }
  const hoverLink = { color: '#fff' }

  return (
    <footer style={{ backgroundColor: '#132744' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top row — tagline + nav links */}
        <div
          className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <p className="text-sm whitespace-nowrap text-center md:text-left" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {tagline}
          </p>

          <nav className="flex flex-wrap justify-center md:justify-end gap-x-7 gap-y-3">
            {footerLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={500}
                offset={-64}
                className="text-sm cursor-pointer transition-colors duration-200"
                style={mutedLink}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverLink)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, mutedLink)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom row — logo stamp + copyright left, domain + lang right */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          <div className="flex items-center gap-2">
            <img src={logoFooter} alt="Vargas Total Tennis" className="h-10 w-auto" />
            <p>{copyright}</p>
          </div>
          <div className="flex items-center gap-4">
            <p>{domain}</p>
            <div className="flex items-center gap-1">
              <NavLink
                to="/"
                className="hover:opacity-80 transition-opacity"
                style={{ color: !isSpanish ? '#8DC63F' : 'rgba(255,255,255,0.3)', fontWeight: !isSpanish ? 500 : 400 }}
              >
                EN
              </NavLink>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11 }}>|</span>
              <NavLink
                to="/es"
                className="hover:opacity-80 transition-opacity"
                style={{ color: isSpanish ? '#8DC63F' : 'rgba(255,255,255,0.3)', fontWeight: isSpanish ? 500 : 400 }}
              >
                ES
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
