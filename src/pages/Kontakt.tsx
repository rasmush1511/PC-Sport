import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react'

const schema = z.object({
  navn: z.string().min(2, 'Navn skal være mindst 2 tegn'),
  email: z.string().email('Ugyldig e-mailadresse'),
  telefon: z.string().optional(),
  emne: z.enum(['Reparation', 'Køb', 'Spørgsmål', 'Andet'] as const, {
    error: 'Vælg venligst et emne'
  }),
  besked: z.string().min(10, 'Besked skal være mindst 10 tegn'),
})

type FormData = z.infer<typeof schema>

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#111111',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '2px',
  padding: '14px 16px',
  color: '#F5F5F5',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s ease'
}

const errorStyle: React.CSSProperties = {
  color: '#FF6B00',
  fontSize: '0.8rem',
  marginTop: '4px',
  fontFamily: 'DM Sans, sans-serif'
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '0.8rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#888',
  marginBottom: '8px'
}

export default function Kontakt() {
  useEffect(() => {
    document.title = 'Kontakt — PC Sport Bellinge'
  }, [])

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (_data: FormData) => {
    setLoading(true)
    // Simulate form submission
    await new Promise(res => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)
    reset()
  }

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="page-hero" style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1525965826259-37b24e595de1?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)'
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, #0A0A0A 100%)'
        }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span style={{
              fontFamily: 'Oswald', fontSize: '0.8rem',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#FF6B00', display: 'block', marginBottom: '12px'
            }}>Kom i kontakt</span>
            <h1 style={{
              fontFamily: 'Oswald', fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 700, lineHeight: 1,
              color: '#F5F5F5', marginBottom: '16px'
            }}>
              Kontakt <span style={{ color: '#FF6B00' }}>Os</span>
            </h1>
            <p style={{
              color: '#888', fontSize: '1.1rem', lineHeight: 1.7,
              maxWidth: '580px'
            }}>
              Vi er her for at hjælpe. Ring til os, kig forbi butikken, eller udfyld formularen nedenfor — vi vender tilbage hurtigst muligt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section style={{ padding: '60px 24px 100px', backgroundColor: '#0A0A0A' }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'start'
        }}>
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 style={{
              fontFamily: 'Oswald', fontSize: '1.8rem',
              color: '#F5F5F5', marginBottom: '32px'
            }}>
              Send os en <span style={{ color: '#FF6B00' }}>besked</span>
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255,107,0,0.3)',
                  borderRadius: '4px',
                  padding: '48px 32px',
                  textAlign: 'center'
                }}
              >
                <CheckCircle size={48} color="#FF6B00" style={{ margin: '0 auto 16px' }} />
                <h3 style={{
                  fontFamily: 'Oswald', fontSize: '1.5rem',
                  color: '#F5F5F5', marginBottom: '12px', textTransform: 'uppercase'
                }}>Tak for din besked!</h3>
                <p style={{ color: '#888', lineHeight: 1.7 }}>
                  Vi har modtaget din henvendelse og vender tilbage hurtigst muligt. Hvis det haster, er du altid velkommen til at ringe på <a href="tel:65962606" style={{ color: '#FF6B00', textDecoration: 'none' }}>65 96 26 06</a>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: '24px',
                    background: 'none',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#888',
                    padding: '10px 20px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontFamily: 'Oswald',
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  Send ny besked
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={labelStyle} htmlFor="navn">Navn *</label>
                    <input
                      id="navn"
                      type="text"
                      placeholder="Dit fulde navn"
                      {...register('navn')}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#FF6B00')}
                      onBlur={e => (e.currentTarget.style.borderColor = errors.navn ? '#FF6B00' : 'rgba(255,255,255,0.12)')}
                    />
                    {errors.navn && <p style={errorStyle}>{errors.navn.message}</p>}
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">E-mail *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="din@email.dk"
                      {...register('email')}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#FF6B00')}
                      onBlur={e => (e.currentTarget.style.borderColor = errors.email ? '#FF6B00' : 'rgba(255,255,255,0.12)')}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                  </div>
                </div>

                <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={labelStyle} htmlFor="telefon">Telefon (valgfri)</label>
                    <input
                      id="telefon"
                      type="tel"
                      placeholder="Fx 65 96 26 06"
                      {...register('telefon')}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#FF6B00')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="emne">Emne *</label>
                    <select
                      id="emne"
                      {...register('emne')}
                      style={{
                        ...inputStyle,
                        appearance: 'none',
                        cursor: 'pointer'
                      }}
                      onFocus={e => (e.currentTarget.style.borderColor = '#FF6B00')}
                      onBlur={e => (e.currentTarget.style.borderColor = errors.emne ? '#FF6B00' : 'rgba(255,255,255,0.12)')}
                    >
                      <option value="" style={{ backgroundColor: '#111' }}>Vælg emne...</option>
                      <option value="Reparation" style={{ backgroundColor: '#111' }}>Reparation</option>
                      <option value="Køb" style={{ backgroundColor: '#111' }}>Køb af cykel</option>
                      <option value="Spørgsmål" style={{ backgroundColor: '#111' }}>Generelt spørgsmål</option>
                      <option value="Andet" style={{ backgroundColor: '#111' }}>Andet</option>
                    </select>
                    {errors.emne && <p style={errorStyle}>{errors.emne.message}</p>}
                  </div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <label style={labelStyle} htmlFor="besked">Besked *</label>
                  <textarea
                    id="besked"
                    rows={5}
                    placeholder="Beskriv hvad vi kan hjælpe dig med..."
                    {...register('besked')}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#FF6B00')}
                    onBlur={e => (e.currentTarget.style.borderColor = errors.besked ? '#FF6B00' : 'rgba(255,255,255,0.12)')}
                  />
                  {errors.besked && <p style={errorStyle}>{errors.besked.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: '100%',
                    backgroundColor: loading ? '#cc5500' : '#FF6B00',
                    color: '#0A0A0A',
                    border: 'none',
                    padding: '16px 32px',
                    borderRadius: '2px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontFamily: 'Oswald',
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                      Sender...
                    </>
                  ) : (
                    'Send besked'
                  )}
                </button>

                <style>{`
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                `}</style>
              </form>
            )}
          </motion.div>

          {/* CONTACT INFO + MAP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Info card */}
            <div style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '4px',
              padding: '32px',
              marginBottom: '24px'
            }}>
              <h2 style={{
                fontFamily: 'Oswald', fontSize: '1.5rem',
                color: '#F5F5F5', marginBottom: '28px'
              }}>
                Find <span style={{ color: '#FF6B00' }}>os</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', flexShrink: 0,
                    backgroundColor: 'rgba(255,107,0,0.1)',
                    borderRadius: '4px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Phone size={18} color="#FF6B00" />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Oswald', fontSize: '0.75rem', letterSpacing: '0.15em', color: '#666', textTransform: 'uppercase', marginBottom: '4px' }}>Telefon</p>
                    <a href="tel:65962606" style={{ color: '#F5F5F5', textDecoration: 'none', fontSize: '1.1rem', fontFamily: 'Oswald', fontWeight: 600 }}>65 96 26 06</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', flexShrink: 0,
                    backgroundColor: 'rgba(255,107,0,0.1)',
                    borderRadius: '4px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MapPin size={18} color="#FF6B00" />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Oswald', fontSize: '0.75rem', letterSpacing: '0.15em', color: '#666', textTransform: 'uppercase', marginBottom: '4px' }}>Adresse</p>
                    <p style={{ color: '#F5F5F5', lineHeight: 1.6 }}>Elmegårdsvej 3C<br />5250 Odense SV (Bellinge)</p>
                    <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '4px' }}>Bag Superbrugsen i Bellinge</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', flexShrink: 0,
                    backgroundColor: 'rgba(255,107,0,0.1)',
                    borderRadius: '4px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Clock size={18} color="#FF6B00" />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Oswald', fontSize: '0.75rem', letterSpacing: '0.15em', color: '#666', textTransform: 'uppercase', marginBottom: '8px' }}>Åbningstider</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {[
                        ['Mandag – Fredag', '09:00 – 17:30'],
                        ['Lørdag', '10:00 – 14:00'],
                        ['Søndag', 'Lukket'],
                      ].map(([day, time]) => (
                        <div key={day} style={{ display: 'flex', justifyContent: 'space-between', gap: '24px' }}>
                          <span style={{ color: '#888', fontSize: '0.9rem' }}>{day}</span>
                          <span style={{ color: time === 'Lukket' ? '#555' : '#F5F5F5', fontSize: '0.9rem', fontWeight: time !== 'Lukket' ? 500 : 400 }}>{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div style={{
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <iframe
                title="PC Sport på kortet"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.4399!2d10.3137!3d55.3731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cdfe2b0a15555%3A0x1!2sElmeg%C3%A5rdsvej+3C%2C+5250+Odense+SV!5e0!3m2!1sda!2sdk!4v1699999999999!5m2!1sda!2sdk"
                width="100%"
                height="280"
                style={{ border: 'none', display: 'block', filter: 'grayscale(80%) invert(10%) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
