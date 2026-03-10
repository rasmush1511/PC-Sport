import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

interface Props {
  image: string
  name: string
  description: string
  badge?: string
  index?: number
}

export default function ProductCard({ image, name, description, badge, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '4px',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', height: '220px' }}>
        <img
          src={image}
          alt={name}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        {badge && (
          <span style={{
            position: 'absolute', top: '12px', left: '12px',
            backgroundColor: '#FF6B00', color: '#0A0A0A',
            padding: '4px 10px', borderRadius: '2px',
            fontFamily: 'Oswald', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase'
          }}>{badge}</span>
        )}
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{
          fontFamily: 'Oswald', fontSize: '1.15rem', fontWeight: 600,
          color: '#F5F5F5', marginBottom: '8px', textTransform: 'uppercase'
        }}>{name}</h3>
        <p style={{ color: '#888888', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '16px' }}>{description}</p>
        <a href="tel:65962606" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          backgroundColor: '#FF6B00', color: '#0A0A0A',
          padding: '10px 16px', borderRadius: '2px',
          textDecoration: 'none',
          fontFamily: 'Oswald', fontSize: '0.85rem', fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase'
        }}>
          <Phone size={13} />
          Kontakt for pris
        </a>
      </div>
    </motion.div>
  )
}
