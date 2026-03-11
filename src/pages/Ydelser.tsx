import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Bike, Zap, Settings, Package, Shield, Clock, Star, ThumbsUp } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Cykelreparation',
    description: 'Vi reparerer alle typer cykler — fra simple punkteringer til komplette generaleftersyninger. Uanset fabrikat og alder kan vi hjælpe. Vi bruger kvalitetsdele og arbejder hurtigt, så du hurtigt er på hjulene igen.'
  },
  {
    icon: Bike,
    title: 'Salg af cykler',
    description: 'Vores showroom rummer et bredt udvalg af cykler til hele familien. Vi fører mærker som Scott, Centurion, MBK og Winther. Kom ind og prøv, og lad os hjælpe dig med at finde den perfekte cykel.'
  },
  {
    icon: Zap,
    title: 'Elcykler',
    description: 'Elcykler er fremtiden, og vi er klar til at hjælpe. Vi forhandler et udvalg af kvalitetselcykler og kan reparere og servicere alle gængse elcykelmodeller, herunder batteri og motor.'
  },
  {
    icon: Settings,
    title: 'Knallerter',
    description: 'Vi tilbyder service og reparation af knallerter. Hvad enten det er en gammel knallert, der skal have et eftersyn, eller en ny der ikke vil starte, er vi klar til at hjælpe i vores værksted.'
  },
  {
    icon: Package,
    title: 'Tilbehør & reservedele',
    description: 'Vi fører et bredt udvalg af cykeltilbehør og reservedele. Cykellygter, låse, tasker, hjelme, handsker, skærme og meget mere fra kendte mærker som Abus, Brooks, GripGrab og Bobike.'
  },
  {
    icon: Shield,
    title: 'Service & eftersyn',
    description: 'Et regelmæssigt cykeleftersyn forlænger din cykels levetid og forbedrer din sikkerhed. Vi tilbyder et komplet eftersyn, der dækker gear, bremser, kæde, hjul og alle øvrige komponenter.'
  }
]

const usps = [
  {
    icon: Clock,
    title: 'Hurtig ekspedition',
    description: 'Vi ved, at din tid er kostbar. Mange reparationer klares mens du venter, eller hentes dagen efter. Vi giver altid en ærlig vurdering af tidsforbruget.'
  },
  {
    icon: Star,
    title: 'Over 35 års erfaring',
    description: 'Siden 1981 har vi set og repareret alle tænkelige cykelproblemer. Den erfaring bringer vi med ind i hvert eneste job — stor som lille.'
  },
  {
    icon: ThumbsUp,
    title: 'Fair priser',
    description: 'Hos os betaler du en fair pris for ordentligt arbejde. Ingen skjulte gebyrer, ingen overraskelser. Vi giver altid et prisestimat inden vi går i gang.'
  }
]

export default function Ydelser() {
  useEffect(() => {
    document.title = 'Ydelser — PC Sport Bellinge'
  }, [])

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
          backgroundImage: 'url(https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)'
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, #0A0A0A 100%)'
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
            }}>Hvad vi tilbyder</span>
            <h1 style={{
              fontFamily: 'Oswald', fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 700, lineHeight: 1,
              color: '#F5F5F5', marginBottom: '16px'
            }}>
              Vores <span style={{ color: '#FF6B00' }}>Ydelser</span>
            </h1>
            <p style={{
              color: '#888', fontSize: '1.1rem', lineHeight: 1.7,
              maxWidth: '600px'
            }}>
              Fra reparation og service til salg af nye cykler og tilbehør. Vi tilbyder alt, hvad du har brug for til din cykel — under ét tag i Bellinge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: '80px 24px', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="services-3-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: '100px 24px', backgroundColor: '#080808' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeading
            label="Hvorfor os?"
            title="Hvorfor vælge PC Sport"
            subtitle="Vi er ikke bare en butik. Vi er din lokale cykelekspert, der altid sætter dig og din cykel i centrum."
            center
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px'
          }}>
            {usps.map((usp, i) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '40px 24px'
                }}
              >
                <div style={{
                  width: '64px', height: '64px',
                  backgroundColor: 'rgba(255,107,0,0.1)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <usp.icon size={28} color="#FF6B00" />
                </div>
                <h3 style={{
                  fontFamily: 'Oswald', fontSize: '1.3rem',
                  color: '#F5F5F5', marginBottom: '12px', textTransform: 'uppercase'
                }}>{usp.title}</h3>
                <p style={{ color: '#888', lineHeight: 1.7, fontSize: '0.95rem' }}>{usp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE INFO */}
      <section style={{ padding: '80px 24px', backgroundColor: '#111111' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontFamily: 'Oswald', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#F5F5F5', marginBottom: '20px'
            }}>
              Hvad koster det at få <span style={{ color: '#FF6B00' }}>repareret</span>?
            </h2>
            <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '16px', fontSize: '1rem' }}>
              Prisen afhænger af, hvad der skal laves. En simpel punktering koster typisk fra 80–150 kr. inkl. ny slange, mens et komplet eftersyn typisk ligger fra 350–600 kr. afhængig af cykeltype og stand.
            </p>
            <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '40px', fontSize: '1rem' }}>
              Vi giver altid et gratis prisestimat, inden vi går i gang — ring eller kig forbi, og vi vurderer din cykel uden forpligtelse.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:65962606" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#FF6B00', color: '#0A0A0A',
                padding: '16px 32px', borderRadius: '2px',
                textDecoration: 'none',
                fontFamily: 'Oswald', fontSize: '1rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase'
              }}>
                <Phone size={16} />
                Ring for tilbud
              </a>
              <Link to="/kontakt" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'transparent', color: '#F5F5F5',
                border: '1px solid rgba(245,245,245,0.3)',
                padding: '16px 32px', borderRadius: '2px',
                textDecoration: 'none',
                fontFamily: 'Oswald', fontSize: '0.95rem', fontWeight: 600,
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
