import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Award, Leaf } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Timeline from '../components/ui/Timeline'
import { Link } from 'react-router-dom'

const timelineItems = [
  {
    year: '1981',
    title: 'PC Sport åbner dørene',
    description: 'Per Christiansen åbner sin cykelforretning i Bellinge, Odense. Med et lille lokale, store ambitioner og en oprigtig passion for cykler, begynder historien om PC Sport.'
  },
  {
    year: '1987',
    title: 'En institution i lokalmiljøet',
    description: 'Efter seks år er PC Sport blevet et fast holdepunkt for Bellinges beboere. Kunderne kommer igen og igen — ikke kun fordi vi er dygtige, men fordi de føler sig velkomne og godt behandlet.'
  },
  {
    year: '2000\'erne',
    title: 'Elcykler og ny teknologi',
    description: 'Med elcyklens fremkomst udvider vi vores kompetencer. Vi uddanner os i de nye systemer og begynder at forhandle og servicere elcykler — en trend der siden er blevet til en stor del af vores forretning.'
  },
  {
    year: 'Nu',
    title: 'Stadig det samme sted — med samme hjerte',
    description: 'Over 40 år efter åbningen er PC Sport stadig der, bag Superbrugsen i Bellinge. Ejeren Per er stadig den, der møder dig ved disken. Intet er ændret i det vigtigste: den personlige service og det ærlige håndværk.'
  }
]

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Cykler er ikke bare vores levevej — det er vores passion. Den glæde smitter af på alt, hvad vi gør.'
  },
  {
    icon: Users,
    title: 'Fællesskab',
    description: 'Vi er en del af Bellinge-fællesskabet og sætter pris på at kende vores kunder og deres familier.'
  },
  {
    icon: Award,
    title: 'Kvalitet',
    description: 'Vi bruger kun gode dele og arbejder grundigt. Vi laver det rigtigt første gang, hver gang.'
  },
  {
    icon: Leaf,
    title: 'Bæredygtighed',
    description: 'Cyklen er den mest bæredygtige transportform. Vi er stolte af at bidrage til grønnere mobilitet i Odense.'
  }
]

export default function OmOs() {
  useEffect(() => {
    document.title = 'Om os — PC Sport Bellinge'
  }, [])

  return (
    <div>
      {/* HERO */}
      <section style={{
        position: 'relative',
        paddingTop: '200px',
        paddingBottom: '100px',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'brightness(0.15)'
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
            style={{ maxWidth: '720px' }}
          >
            <span style={{
              fontFamily: 'Oswald', fontSize: '0.8rem',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#FF6B00', display: 'block', marginBottom: '12px'
            }}>Vores historie</span>
            <h1 style={{
              fontFamily: 'Oswald', fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 700, lineHeight: 1,
              color: '#F5F5F5', marginBottom: '24px'
            }}>
              Om <span style={{ color: '#FF6B00' }}>PC Sport</span>
            </h1>
            <p style={{
              color: '#999', fontSize: '1.15rem', lineHeight: 1.8,
              maxWidth: '580px'
            }}>
              En familiedrevet cykelforretning med rødder i Bellinge siden 1981. Her møder du altid ejeren, og du bliver altid behandlet som et menneske — ikke et kundenummer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section style={{ padding: '80px 24px 100px', backgroundColor: '#0A0A0A' }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'start'
        }}>
          {/* Timeline */}
          <div>
            <SectionHeading
              label="Vores rejse"
              title="Fra 1981 til i dag"
              subtitle="Firhjulet begejstring og to-hjulet engagement."
            />
            <Timeline items={timelineItems} />
          </div>

          {/* Per's story */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{
                position: 'relative',
                marginBottom: '40px'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                  alt="Mekaniker arbejder i cykelværksted"
                  style={{
                    width: '100%',
                    height: '340px',
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '24px',
                  backgroundColor: '#FF6B00',
                  padding: '16px 24px',
                  borderRadius: '2px'
                }}>
                  <span style={{
                    fontFamily: 'Oswald', fontSize: '2rem',
                    fontWeight: 700, color: '#0A0A0A', display: 'block', lineHeight: 1
                  }}>40+</span>
                  <span style={{
                    fontFamily: 'Oswald', fontSize: '0.75rem',
                    letterSpacing: '0.1em', color: 'rgba(10,10,10,0.8)',
                    textTransform: 'uppercase'
                  }}>Års erfaring</span>
                </div>
              </div>

              <h3 style={{
                fontFamily: 'Oswald', fontSize: '1.6rem',
                color: '#F5F5F5', marginTop: '32px', marginBottom: '16px',
                textTransform: 'uppercase'
              }}>
                Pers <span style={{ color: '#FF6B00' }}>Historie</span>
              </h3>
              <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '16px' }}>
                Per Christiansen startede sin cykelforretning som ung mand med en simpel drøm: at gøre noget han elskede til sit levebrød. Cyklen havde altid fascineret ham — ikke kun som transportmiddel, men som et mekanisk mesterværk af enkelhed og effektivitet.
              </p>
              <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '16px' }}>
                I over fire årtier har Per stået ved sit værkstedsbord og hjulpet Bellinges beboere med alt fra simple punkteringer til komplette cykelbyggerier. Hans hænder kender enhver komponent, og hans øre kan høre, om en kæde trænger til olie, inden du selv opdager det.
              </p>
              <p style={{ color: '#888', lineHeight: 1.8 }}>
                "Jeg sælger ikke bare cykler. Jeg hjælper folk med at komme fra A til B — og det giver mig stadig glæde hver eneste dag," siger Per.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: '#111111',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,107,0,0.04) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              fontSize: '5rem', color: '#FF6B00', lineHeight: 0.8,
              fontFamily: 'Georgia, serif', marginBottom: '24px',
              opacity: 0.6
            }}>"</div>
            <blockquote style={{
              fontFamily: 'Oswald', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 700, color: '#F5F5F5', lineHeight: 1.2,
              textTransform: 'uppercase', letterSpacing: '0.03em',
              marginBottom: '24px'
            }}>
              Hvor passion blev til job og job blev til <span style={{ color: '#FF6B00' }}>hobby</span>
            </blockquote>
            <cite style={{
              fontFamily: 'DM Sans, sans-serif',
              fontStyle: 'normal',
              color: '#666', fontSize: '0.95rem',
              letterSpacing: '0.05em'
            }}>— Per Christiansen, ejer af PC Sport</cite>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: '100px 24px', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeading
            label="Vores DNA"
            title="Vores Værdier"
            subtitle="Det er ikke tilfældigt, at vi har overlevet i over 40 år. Det er fordi vi ved, hvad der virkelig betyder noget."
            center
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}>
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '4px',
                  padding: '32px',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '56px', height: '56px',
                  backgroundColor: 'rgba(255,107,0,0.1)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <value.icon size={24} color="#FF6B00" />
                </div>
                <h3 style={{
                  fontFamily: 'Oswald', fontSize: '1.1rem',
                  color: '#F5F5F5', marginBottom: '12px', textTransform: 'uppercase'
                }}>{value.title}</h3>
                <p style={{ color: '#888', lineHeight: 1.6, fontSize: '0.9rem' }}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', backgroundColor: '#111111' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontFamily: 'Oswald', fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#F5F5F5', marginBottom: '16px'
            }}>
              Kig forbi og <span style={{ color: '#FF6B00' }}>sig hej</span>
            </h2>
            <p style={{ color: '#888', lineHeight: 1.7, marginBottom: '32px' }}>
              Vi elsker at møde nye og gamle kunder. Du er altid velkommen til at kigge forbi butikken bag Superbrugsen i Bellinge — uanset om du har en cykel med eller bare vil snakke cykler.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/kontakt" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#FF6B00', color: '#0A0A0A',
                padding: '14px 28px', borderRadius: '2px',
                textDecoration: 'none',
                fontFamily: 'Oswald', fontSize: '0.95rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase'
              }}>
                Find os her
              </Link>
              <a href="tel:65962606" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'transparent', color: '#F5F5F5',
                border: '1px solid rgba(245,245,245,0.3)',
                padding: '14px 28px', borderRadius: '2px',
                textDecoration: 'none',
                fontFamily: 'Oswald', fontSize: '0.9rem', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase'
              }}>
                65 96 26 06
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
