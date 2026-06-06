import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logoColor from '../assets/logo-color.png'

// Small EN | ES pill toggle — reads current route to highlight active lang
function LangToggle({ scrolled, inDrawer = false }) {
  const { pathname } = useLocation()
  const isSpanish = pathname === '/es'

  const activeStyle   = { color: '#8DC63F', fontWeight: 500 }
  const inactiveStyle = inDrawer
    ? { color: '#9ca3af' }
    : scrolled
    ? { color: '#9ca3af' }
    : { color: 'rgba(255,255,255,0.45)' }

  const sep = inDrawer || scrolled ? '#d1d5db' : 'rgba(255,255,255,0.2)'

  return (
    <div className="flex items-center gap-0.5 text-sm select-none">
      <NavLink
        to="/"
        style={!isSpanish ? activeStyle : inactiveStyle}
        className="px-1.5 py-0.5 rounded transition-colors duration-150 hover:opacity-80"
      >
        EN
      </NavLink>
      <span style={{ color: sep, fontSize: 12 }}>|</span>
      <NavLink
        to="/es"
        style={isSpanish ? activeStyle : inactiveStyle}
        className="px-1.5 py-0.5 rounded transition-colors duration-150 hover:opacity-80"
      >
        ES
      </NavLink>
    </div>
  )
}

export default function Navbar({ content }) {
  const { links, cta } = content
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on route change (language switch)
  const { pathname } = useLocation()
  useEffect(() => setMenuOpen(false), [pathname])

  const linkClass = `text-sm font-medium cursor-pointer transition-colors duration-200 ${
    scrolled ? 'text-gray-700 hover:text-vtt-primary' : 'text-white/90 hover:text-white'
  }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-black/[0.08]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <ScrollLink to="hero" smooth duration={500} className="cursor-pointer flex-shrink-0">
          <div className={scrolled ? '' : 'bg-white rounded-xl px-3 py-1.5 shadow-sm'}>
            <img
              src={logoColor}
              alt="Vargas Total Tennis"
              className="h-11 w-auto"
            />
          </div>
        </ScrollLink>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, to }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth
              duration={500}
              offset={-64}
              className={linkClass}
            >
              {label}
            </ScrollLink>
          ))}
        </div>

        {/* Desktop: lang toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <LangToggle scrolled={scrolled} />
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-64}
            className="inline-flex items-center bg-vtt-primary hover:bg-vtt-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg cursor-pointer transition-colors duration-200"
          >
            {cta}
          </ScrollLink>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile slide-down drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden bg-white border-t border-black/[0.06] overflow-hidden"
          >
            <div className="px-6 pt-2 pb-5 flex flex-col">
              {links.map(({ label, to }) => (
                <ScrollLink
                  key={to}
                  to={to}
                  smooth
                  duration={500}
                  offset={-64}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-vtt-primary cursor-pointer py-3 border-b border-black/[0.05] last:border-0"
                >
                  {label}
                </ScrollLink>
              ))}

              {/* Lang toggle in drawer */}
              <div className="flex items-center justify-between mt-4 mb-1">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Language
                </span>
                <LangToggle scrolled inDrawer />
              </div>

              <ScrollLink
                to="contact"
                smooth
                duration={500}
                offset={-64}
                onClick={() => setMenuOpen(false)}
                className="mt-3 block bg-vtt-primary hover:bg-vtt-dark text-white text-sm font-medium px-5 py-3 rounded-lg cursor-pointer text-center transition-colors duration-200"
              >
                {cta}
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
