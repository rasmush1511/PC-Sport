import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Wrench, Bike, Zap, Settings, ArrowRight, Phone, ChevronDown } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import AnimatedCounter from '../components/ui/AnimatedCounter'

const brands = [
  'Shimano', 'Scott', 'Centurion', 'MBK',
  'Winther', 'Focus', 'Brooks', 'Abus',
  'SRAM', 'GripGrab', 'Bobike', 'Ortlieb'
]

const services = [
  {
    icon: Wrench,
    title: 'Cykelreparation',
    description: 'Fra punktering til komplet service. Vi reparerer alle typer cykler hurtigt og til en fair pris. Bring din cykel ind, og vi sørger for resten.'
  },
  {
    icon: Bike,
    title: 'Salg af cykler',
    description: 'Vi fører et bredt udvalg af kvalitetscykler til hele familien. Herrecykler, damecykler, børnecykler og meget mere fra kendte mærker.'
  },
  {
    icon: Zap,
    title: 'Elcykler',
    description: 'Fremtiden er elektrisk. Vi tilbyder et fint udvalg af elcykler, og vi kan selvfølgelig også reparere og servicere din eksisterende elcykel.'
  },
  {
    icon: Settings,
    title: 'Knallerter',
    description: 'Vi servicerer og reparerer knallerter. Har du problemer med din knallert, så kom forbi vores værksted i Bellinge og lad os kigge på den.'
  }
]

export default function Home() {
  useEffect(() => {
    document.title = 'PC Sport — Din cykelsmed i Bellinge'
  }, [])

  return (
    <div>
      {/* HERO */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35)'
        }} />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 100%)'
        }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 1,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-block',
              fontFamily: 'Oswald, sans-serif',
              fontSize: '0.85rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#FF6B00',
              marginBottom: '16px'
            }}
          >
            Bellinge, Odense · Siden 1981
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '8px',
              color: '#F5F5F5'
            }}
          >
            PC <span style={{ color: '#FF6B00' }}>SPORT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(245,245,245,0.7)',
              marginBottom: '40px'
            }}
          >
            Din cykelsmed i Bellinge siden 1987
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/cykler" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: '#FF6B00', color: '#0A0A0A',
              padding: '16px 32px', borderRadius: '2px',
              textDecoration: 'none',
              fontFamily: 'Oswald', fontSize: '1rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase'
            }}>
              Se vores udvalg <ArrowRight size={16} />
            </Link>
            <Link to="/kontakt" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'transparent', color: '#F5F5F5',
              border: '1px solid rgba(245,245,245,0.4)',
              padding: '16px 32px', borderRadius: '2px',
              textDecoration: 'none',
              fontFamily: 'Oswald', fontSize: '1rem', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase'
            }}>
              Kontakt os
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)' }}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              color: 'rgba(255,255,255,0.4)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'
            }}
          >
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', fontFamily: 'Oswald' }}>SCROLL</span>
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ backgroundColor: '#FF6B00', padding: '32px 24px' }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          textAlign: 'center'
        }}>
          {[
            { value: '35+', label: 'Års Erfaring' },
            { value: '1981', label: 'Grundlagt' },
            { value: '100%', label: 'Personlig Service' },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{
                fontFamily: 'Oswald', fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700, color: '#0A0A0A', letterSpacing: '0.05em'
              }}>{stat.value}</div>
              <div style={{
                fontFamily: 'Oswald', fontSize: '0.9rem',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(10,10,10,0.7)'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section-xl" style={{ padding: '100px 24px', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeading
            label="Hvad vi tilbyder"
            title="Vores Ydelser"
            subtitle="Vi tilbyder et bredt udvalg af ydelser til dig og din cykel. Uanset om du skal have repareret din gamle cykel eller købe en ny, er vi klar til at hjælpe."
            center
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}>
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/ydelser" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: '#FF6B00', textDecoration: 'none',
              fontFamily: 'Oswald', fontSize: '0.95rem', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase'
            }}>
              Se alle ydelser <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section-xl" style={{ padding: '100px 24px', backgroundColor: '#080808' }}>
        <div className="grid-gap-lg about-teaser-grid" style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center'
        }}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="about-image-container"
            style={{ position: 'relative', padding: '16px' }}
          >
            <div className="deco-border" style={{
              position: 'absolute', top: '0', right: '0', bottom: '0', left: '0',
              border: '2px solid #FF6B00',
              borderRadius: '4px',
              zIndex: 0
            }} />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Cykelmekaniker ved arbejde"
              style={{
                width: '100%', height: '420px',
                objectFit: 'cover',
                borderRadius: '2px',
                position: 'relative', zIndex: 1,
                display: 'block'
              }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span style={{
              fontFamily: 'Oswald', fontSize: '0.8rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#FF6B00', display: 'block', marginBottom: '12px'
            }}>Om os</span>
            <h2 style={{
              fontFamily: 'Oswald', fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700, color: '#F5F5F5',
              lineHeight: 1.1, marginBottom: '24px'
            }}>
              Mere end bare en <span style={{ color: '#FF6B00' }}>cykelhandler</span>
            </h2>
            <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '16px' }}>
              PC Sport er en familiedrevet cykelforretning beliggende i hjertet af Bellinge, Odense. Siden 1981 har vi hjulpet lokalsamfundets beboere med alt inden for cykler — fra den mindste reparation til salg af brandnye cykler.
            </p>
            <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '32px' }}>
              Hos os møder du altid ejeren selv. Vi tror på personlig service, ærlighed og fagligt håndværk. Det er det, der har holdt os kørende i over fire årtier.
            </p>

            {/* Counter */}
            <div style={{
              display: 'flex', gap: '40px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '32px', marginBottom: '32px'
            }}>
              <div>
                <div style={{
                  fontFamily: 'Oswald', fontSize: '3rem', fontWeight: 700,
                  color: '#FF6B00', lineHeight: 1
                }}>
                  <AnimatedCounter end={35} suffix="+" />
                </div>
                <div style={{ color: '#888', fontSize: '0.85rem', marginTop: '4px' }}>Års erfaring</div>
              </div>
              <div>
                <div style={{
                  fontFamily: 'Oswald', fontSize: '3rem', fontWeight: 700,
                  color: '#FF6B00', lineHeight: 1
                }}>
                  <AnimatedCounter end={1000} suffix="+" />
                </div>
                <div style={{ color: '#888', fontSize: '0.85rem', marginTop: '4px' }}>Glade kunder</div>
              </div>
            </div>

            <Link to="/om-os" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: '#FF6B00', color: '#0A0A0A',
              padding: '14px 28px', borderRadius: '2px',
              textDecoration: 'none',
              fontFamily: 'Oswald', fontSize: '0.95rem', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase'
            }}>
              Læs vores historie <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BRANDS */}
      <section style={{ padding: '80px 24px', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeading
            label="Mærker"
            title="Vores Brands"
            subtitle="Vi fører og forhandler produkter fra verdens bedste cykelbrands."
            center
          />
          <div className="brands-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px'
          }}>
            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '4px',
                  padding: '20px 16px',
                  textAlign: 'center',
                  cursor: 'default',
                  transition: 'border-color 0.3s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <span style={{
                  fontFamily: 'Oswald', fontSize: '1rem',
                  fontWeight: 600, color: '#FF6B00',
                  letterSpacing: '0.08em', textTransform: 'uppercase'
                }}>{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-xl" style={{
        padding: '100px 24px',
        backgroundColor: '#111111',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,107,0,0.05) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        {/* Diagonal stripe */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '40%', height: '100%',
          background: 'rgba(255,107,0,0.03)',
          clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '800px', margin: '0 auto',
          textAlign: 'center', position: 'relative', zIndex: 1
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              fontFamily: 'Oswald', fontSize: '0.8rem',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#FF6B00', display: 'block', marginBottom: '16px'
            }}>Klar til at komme i gang?</span>
            <h2 style={{
              fontFamily: 'Oswald', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700, lineHeight: 1.1,
              color: '#F5F5F5', marginBottom: '24px'
            }}>
              Har du brug for <span style={{ color: '#FF6B00' }}>hjælp?</span>
            </h2>
            <p style={{
              color: '#888', fontSize: '1.1rem', lineHeight: 1.7,
              marginBottom: '48px', maxWidth: '560px', margin: '0 auto 48px'
            }}>
              Ring til os, kig forbi butikken, eller send os en besked. Vi er altid klar til at hjælpe med din cykel — uanset om det er en lille reparation eller et nyt køb.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:65962606" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                backgroundColor: '#FF6B00', color: '#0A0A0A',
                padding: '18px 36px', borderRadius: '2px',
                textDecoration: 'none',
                fontFamily: 'Oswald', fontSize: '1.1rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase'
              }}>
                <Phone size={18} />
                65 96 26 06
              </a>
              <Link to="/kontakt" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'transparent', color: '#F5F5F5',
                border: '1px solid rgba(245,245,245,0.3)',
                padding: '18px 36px', borderRadius: '2px',
                textDecoration: 'none',
                fontFamily: 'Oswald', fontSize: '1rem', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase'
              }}>
                Skriv til os
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
