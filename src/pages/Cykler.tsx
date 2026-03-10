import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import ProductCard from '../components/ui/ProductCard'

type Category = 'Alle' | 'Herrecykler' | 'Damecykler' | 'Elcykler' | 'Børnecykler'

const categories: Category[] = ['Alle', 'Herrecykler', 'Damecykler', 'Elcykler', 'Børnecykler']

const products = [
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    name: 'Scott Speedster 50',
    description: 'Let og hurtig herrecykel med Shimano gear og aluminiumsramme. Perfekt til pendleren og motionisten.',
    badge: 'Populær',
    category: 'Herrecykler'
  },
  {
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80',
    name: 'Centurion City Speed',
    description: 'Klassisk bycykel til daglig kørsel. Komfortabel saddel, skærme, lygter og kurv — klar til vejen.',
    badge: undefined,
    category: 'Damecykler'
  },
  {
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&q=80',
    name: 'Focus Jarifa² 6.8',
    description: 'Kraftfuld elcykel med Bosch motor og 625 Wh batteri. Rækkevidde op til 130 km. Perfekt til pendling.',
    badge: 'Elcykel',
    category: 'Elcykler'
  },
  {
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=80',
    name: 'MBK Touriste Dame',
    description: 'Elegant og klassisk damecykel med indvendige gear og fodbremse. Nem at vedligeholde og tidløs i stilen.',
    badge: undefined,
    category: 'Damecykler'
  },
  {
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80',
    name: 'Winther Rage 24"',
    description: 'Robust og cool mountainbike til større børn. 21 gear, hydrauliske skivebremser og stødabsorberende forgaffel.',
    badge: 'Til børn',
    category: 'Børnecykler'
  },
  {
    image: 'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=600&q=80',
    name: 'Centurion E-Fire 400 EQ',
    description: 'Alsidig elcykel til by og land. Shimano Steps motor, fuldt udstyret med lygter, skærme og bagagebærer.',
    badge: 'Elcykel',
    category: 'Elcykler'
  },
  {
    image: 'https://images.unsplash.com/photo-1525965826259-37b24e595de1?w=600&q=80',
    name: 'Scott Aspect 970',
    description: 'Alsidig mountainbike til herrer med 29" hjul og Shimano Altus 9-gear. Klar til stier, grusveje og ture i skoven.',
    badge: undefined,
    category: 'Herrecykler'
  },
  {
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94946?w=600&q=80',
    name: 'Winther Speedy 20"',
    description: 'Den ideelle første cykel for børn fra ca. 6 år. Let aluminiumsramme, sikre bremser og justerbart sæde og styr.',
    badge: 'Til børn',
    category: 'Børnecykler'
  }
]

export default function Cykler() {
  useEffect(() => {
    document.title = 'Cykler — PC Sport Bellinge'
  }, [])

  const [activeCategory, setActiveCategory] = useState<Category>('Alle')

  const filtered = activeCategory === 'Alle'
    ? products
    : products.filter(p => p.category === activeCategory)

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
          backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80)',
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
            }}>Vores sortiment</span>
            <h1 style={{
              fontFamily: 'Oswald', fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 700, lineHeight: 1,
              color: '#F5F5F5', marginBottom: '16px'
            }}>
              Vores <span style={{ color: '#FF6B00' }}>Cykler</span>
            </h1>
            <p style={{
              color: '#888', fontSize: '1.1rem', lineHeight: 1.7,
              maxWidth: '600px'
            }}>
              Vi fører et bredt udvalg af cykler til alle aldre og behov. Kontakt os for aktuelle priser og tilgængelighed — vores sortiment opdateres løbende.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER + PRODUCTS */}
      <section style={{ padding: '40px 24px 100px', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Filter tabs */}
          <div style={{
            display: 'flex', gap: '8px', flexWrap: 'wrap',
            marginBottom: '48px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            paddingBottom: '0'
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Oswald', fontSize: '0.95rem',
                  fontWeight: 600, letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '12px 20px',
                  color: activeCategory === cat ? '#FF6B00' : '#888',
                  borderBottom: activeCategory === cat ? '2px solid #FF6B00' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                  marginBottom: '-1px'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {filtered.map((product, i) => (
              <ProductCard key={product.name} {...product} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#888' }}>
              <p style={{ fontFamily: 'Oswald', fontSize: '1.2rem' }}>Ingen cykler i denne kategori for øjeblikket.</p>
              <p style={{ marginTop: '8px', fontSize: '0.9rem' }}>Ring til os på 65 96 26 06 for at høre om vores aktuelle lager.</p>
            </div>
          )}

          {/* Info note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: '64px',
              backgroundColor: '#111111',
              border: '1px solid rgba(255,107,0,0.2)',
              borderLeft: '4px solid #FF6B00',
              borderRadius: '2px',
              padding: '24px 28px'
            }}
          >
            <p style={{ color: '#F5F5F5', fontFamily: 'Oswald', fontSize: '1rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Kig forbi butikken
            </p>
            <p style={{ color: '#888', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Vores sortiment skifter løbende. Mange cykler er ikke på hjemmesiden — kom forbi butikken i Bellinge for at se vores fulde udvalg, eller ring til os på <a href="tel:65962606" style={{ color: '#FF6B00', textDecoration: 'none' }}>65 96 26 06</a> for at høre om specifikke modeller og priser.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: '80px 24px', backgroundColor: '#FF6B00' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontFamily: 'Oswald', fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#0A0A0A', marginBottom: '16px'
            }}>
              Kan du ikke finde det du søger?
            </h2>
            <p style={{ color: 'rgba(10,10,10,0.75)', marginBottom: '32px', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Har du en bestemt cykel i tankerne? Kontakt os, og vi hjælper dig med at finde netop den cykel, der passer til dine behov og dit budget.
            </p>
            <a href="tel:65962606" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#0A0A0A', color: '#FF6B00',
              padding: '16px 36px', borderRadius: '2px',
              textDecoration: 'none',
              fontFamily: 'Oswald', fontSize: '1.1rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase'
            }}>
              <Phone size={18} />
              65 96 26 06
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
