import { motion } from 'framer-motion'

interface Props {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionHeading({ label, title, subtitle, center }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: center ? 'center' : 'left', marginBottom: '48px' }}
    >
      {label && (
        <span style={{
          display: 'inline-block',
          fontFamily: 'Oswald, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#FF6B00',
          marginBottom: '12px'
        }}>{label}</span>
      )}
      <h2 style={{
        fontFamily: 'Oswald, sans-serif',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 700,
        color: '#F5F5F5',
        lineHeight: 1.1,
        marginBottom: subtitle ? '16px' : 0
      }}>
        {title.split(' ').map((word, i, arr) => (
          <span key={i}>
            {i > 0 && ' '}
            <span style={{ color: i === arr.length - 1 ? '#FF6B00' : '#F5F5F5' }}>{word}</span>
          </span>
        ))}
      </h2>
      {subtitle && (
        <p style={{
          color: '#888888',
          fontSize: '1.05rem',
          lineHeight: 1.6,
          maxWidth: center ? '600px' : undefined,
          margin: center ? '0 auto' : undefined
        }}>{subtitle}</p>
      )}
      <div style={{
        width: '60px', height: '3px',
        backgroundColor: '#FF6B00',
        marginTop: '16px',
        margin: center ? '16px auto 0' : '16px 0 0'
      }} />
    </motion.div>
  )
}
