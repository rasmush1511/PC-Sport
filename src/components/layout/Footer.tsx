import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#080808', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '48px'
        }}>
          {/* Brand */}
          <div>
            <span style={{
              fontFamily: 'Oswald', fontSize: '1.8rem', fontWeight: 700,
              color: '#F5F5F5', letterSpacing: '0.1em', display: 'block', marginBottom: '16px'
            }}>PC<span style={{ color: '#FF6B00' }}> SPORT</span></span>
            <p style={{ color: '#888', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '16px' }}>
              Din lokale cykelhandler og cykelsmed i Bellinge, Odense. Personlig service og ærligt håndværk siden 1981.
            </p>
            <a href="https://facebook.com/www.pcsport.dk" target="_blank" rel="noopener noreferrer"
              style={{ color: '#FF6B00', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '0.9rem' }}>
              <Facebook size={16} /> Facebook
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: 'Oswald', fontSize: '1rem', letterSpacing: '0.1em', color: '#F5F5F5', marginBottom: '16px', textTransform: 'uppercase' }}>Sider</h4>
            {[['/', 'Forside'], ['/ydelser', 'Ydelser'], ['/cykler', 'Cykler'], ['/om-os', 'Om os'], ['/kontakt', 'Kontakt']].map(([to, label]) => (
              <Link key={to} to={to} style={{ display: 'block', color: '#888', textDecoration: 'none', marginBottom: '8px', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FF6B00')}
                onMouseLeave={e => (e.currentTarget.style.color = '#888')}
              >{label}</Link>
            ))}
          </div>

          {/* Åbningstider */}
          <div>
            <h4 style={{ fontFamily: 'Oswald', fontSize: '1rem', letterSpacing: '0.1em', color: '#F5F5F5', marginBottom: '16px', textTransform: 'uppercase' }}>Åbningstider</h4>
            {[
              ['Man–Fre', '09:00–17:30'],
              ['Lørdag', '10:00–14:00'],
              ['Søndag', 'Lukket']
            ].map(([day, time]) => (
              <div key={day} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', gap: '16px' }}>
                <span style={{ color: '#888', fontSize: '0.9rem' }}>{day}</span>
                <span style={{ color: time === 'Lukket' ? '#666' : '#F5F5F5', fontSize: '0.9rem' }}>{time}</span>
              </div>
            ))}
          </div>

          {/* Kontakt */}
          <div>
            <h4 style={{ fontFamily: 'Oswald', fontSize: '1rem', letterSpacing: '0.1em', color: '#F5F5F5', marginBottom: '16px', textTransform: 'uppercase' }}>Kontakt</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:65962606" style={{ color: '#888', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                <Phone size={15} color="#FF6B00" /> 65 96 26 06
              </a>
              <div style={{ color: '#888', display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem' }}>
                <MapPin size={15} color="#FF6B00" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Elmegårdsvej 3C<br />5250 Odense SV (Bellinge)</span>
              </div>
              <div style={{ color: '#888', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                <Clock size={15} color="#FF6B00" /> Bag Superbrugsen i Bellinge
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '8px'
        }}>
          <span style={{ color: '#555', fontSize: '0.85rem' }}>© 2024 PC Sport. Alle rettigheder forbeholdes.</span>
          <span style={{ color: '#555', fontSize: '0.85rem' }}>CVR: Per Christiansen · Bellinge, Odense</span>
        </div>
      </div>
    </footer>
  )
}
