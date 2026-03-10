import { motion } from 'framer-motion'

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface Props {
  items: TimelineItem[]
}

export default function Timeline({ items }: Props) {
  return (
    <div style={{ position: 'relative', paddingLeft: '32px' }}>
      {/* Vertical line */}
      <div style={{
        position: 'absolute', left: '7px', top: 0, bottom: 0,
        width: '2px', backgroundColor: 'rgba(255,255,255,0.1)'
      }} />
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          style={{ position: 'relative', marginBottom: '40px' }}
        >
          {/* Dot */}
          <div style={{
            position: 'absolute', left: '-28px', top: '4px',
            width: '16px', height: '16px', borderRadius: '50%',
            backgroundColor: '#FF6B00',
            boxShadow: '0 0 0 4px rgba(255,107,0,0.2)'
          }} />
          <span style={{
            fontFamily: 'Oswald', fontSize: '0.85rem',
            color: '#FF6B00', letterSpacing: '0.1em',
            fontWeight: 600
          }}>{item.year}</span>
          <h3 style={{
            fontFamily: 'Oswald', fontSize: '1.3rem',
            color: '#F5F5F5', marginTop: '4px', marginBottom: '8px'
          }}>{item.title}</h3>
          <p style={{ color: '#888888', lineHeight: 1.6, fontSize: '0.95rem' }}>{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
