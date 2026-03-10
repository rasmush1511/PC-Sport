import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface Props {
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export default function ServiceCard({ icon: Icon, title, description, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '4px',
        padding: '32px',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease'
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,107,0,0.4)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
    >
      <div style={{
        width: '52px', height: '52px',
        backgroundColor: 'rgba(255,107,0,0.1)',
        borderRadius: '4px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px'
      }}>
        <Icon size={24} color="#FF6B00" />
      </div>
      <h3 style={{
        fontFamily: 'Oswald', fontSize: '1.2rem', fontWeight: 600,
        color: '#F5F5F5', marginBottom: '12px', textTransform: 'uppercase'
      }}>{title}</h3>
      <p style={{ color: '#888888', lineHeight: 1.6, fontSize: '0.95rem' }}>{description}</p>
    </motion.div>
  )
}
