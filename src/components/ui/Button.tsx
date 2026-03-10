import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  fullWidth?: boolean
}

export default function Button({ children, variant = 'primary', href, to, onClick, type = 'button', disabled, fullWidth }: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px 28px',
    fontFamily: 'Oswald, sans-serif',
    fontSize: '0.95rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    textDecoration: 'none',
    borderRadius: '2px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.25s ease',
    border: 'none',
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.6 : 1,
  }

  const styles = {
    primary: {
      ...baseStyle,
      backgroundColor: '#FF6B00',
      color: '#0A0A0A',
    },
    secondary: {
      ...baseStyle,
      backgroundColor: 'transparent',
      color: '#F5F5F5',
      border: '1px solid rgba(255,255,255,0.3)',
    }
  }

  if (href) return <a href={href} style={styles[variant]}>{children}</a>
  if (to) return <Link to={to} style={styles[variant]}>{children}</Link>
  return <button type={type} onClick={onClick} disabled={disabled} style={styles[variant]}>{children}</button>
}
