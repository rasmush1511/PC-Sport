import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Forside' },
  { to: '/ydelser', label: 'Ydelser' },
  { to: '/cykler', label: 'Cykler' },
  { to: '/om-os', label: 'Om os' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <header className="navbar-header" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      backgroundColor: isMobile ? '#1A1A1A' : (scrolled ? 'rgba(10,10,10,0.98)' : '#0A0A0A'),
      borderBottom: isMobile ? '2px solid rgba(255,107,0,0.5)' : '1px solid rgba(255,255,255,0.08)',
      backdropFilter: 'blur(10px)',
      boxShadow: isMobile ? '0 4px 20px rgba(0,0,0,0.8)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <nav style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: '0 24px',
        height: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '1.6rem',
            fontWeight: 700,
            color: '#F5F5F5',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            PC<span style={{ color: '#FF6B00' }}> SPORT</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontFamily: 'Oswald, sans-serif',
                fontSize: '0.95rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isActive ? '#FF6B00' : '#F5F5F5',
                borderBottom: isActive ? '2px solid #FF6B00' : '2px solid transparent',
                paddingBottom: '2px',
                transition: 'all 0.2s ease'
              })}
            >{l.label}</NavLink>
          ))}
          <a href="tel:65962606" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#FF6B00',
            color: '#0A0A0A',
            padding: '10px 20px',
            borderRadius: '2px',
            textDecoration: 'none',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '0.9rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transition: 'background-color 0.2s ease'
          }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FF8C00')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#FF6B00')}
          >
            <Phone size={14} />
            Ring nu
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(true)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#F5F5F5', padding: '8px'
        }} className="mobile-menu-btn" aria-label="Åbn menu">
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)',
              zIndex: 1001
            }}
          />
        )}
        {open && (
          <motion.div
            key="drawer"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="mobile-drawer"
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: '280px',
              borderLeft: '2px solid rgba(255,107,0,0.4)',
              boxShadow: '-8px 0 40px rgba(0,0,0,0.9)',
              zIndex: 1002, padding: '24px',
              display: 'flex', flexDirection: 'column', gap: '8px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span style={{ fontFamily: 'Oswald', fontSize: '1.2rem', color: '#FF6B00', letterSpacing: '0.1em' }}>MENU</span>
              <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F5F5F5' }}>
                <X size={24} />
              </button>
            </div>
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isActive ? '#FF6B00' : '#F5F5F5',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)'
                })}
              >{l.label}</NavLink>
            ))}
            <a href="tel:65962606" style={{
              marginTop: '24px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              backgroundColor: '#FF6B00', color: '#0A0A0A',
              padding: '14px', borderRadius: '2px',
              textDecoration: 'none',
              fontFamily: 'Oswald', fontSize: '1rem', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>
              <Phone size={16} />
              65 96 26 06
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .navbar-header {
            background-color: #111111 !important;
            border-bottom: 1px solid rgba(255,107,0,0.2) !important;
          }
        }
      `}</style>
    </header>
  )
}
