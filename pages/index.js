import { useResponsiveFonts } from '../hooks/useResponsiveFonts'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LawyerProfile from '../components/LawyerProfile'
import Services from '../components/Services'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function Home() {
  const { isMobile, fonts } = useResponsiveFonts()
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <Layout>
      {/* Hero Section - Full Viewport */}
      <section style={{ 
        position: 'relative',
        height: '100vh',
        width: '100vw',
        margin: '0',
        padding: '0',
        overflow: 'hidden'
      }}>
        <Hero isMobile={isMobile} fonts={fonts} />
      </section>

      {/* Lawyer Profile Section */}
      <section style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0'
      }}>
        <LawyerProfile isMobile={isMobile} fonts={fonts} />
      </section>

      

      {/* Call to Action Section */}
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #0c4b3b 0%, #226249 100%)',
        color: 'white',
        textAlign: 'center',
        direction: language === 'ar' ? 'rtl' : 'ltr'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            marginBottom: '1rem',
            fontWeight: language === 'ar' ? '400' : 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            {language === 'ar' ? 'تعرف على المزيد عن خدماتنا' : 'Learn More About Our Services'}
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            marginBottom: '2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem auto',
            lineHeight: 1.6
          }}>
            {language === 'ar' 
              ? 'اكتشف المزيد عن خبرتنا ونهجنا القانوني المتخصص'
              : 'Discover more about our expertise and specialized legal approach'
            }
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  backgroundColor: '#3b3b3b',
                  color: 'white',
                  border: '2px solid transparent',
                  padding: isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
                  fontSize: isMobile ? '1.1rem' : '1.25rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 6px 20px rgba(59, 59, 59, 0.4), 0 0 0 0 rgba(59, 59, 59, 0.7)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'pulse 2s infinite'
                }}
                onMouseOver={e => {
                  e.target.style.backgroundColor = '#5a5a5a';
                  e.target.style.borderColor = '#3b3b3b';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(59, 59, 59, 0.6)';
                }}
                onMouseOut={e => {
                  e.target.style.backgroundColor = '#3b3b3b';
                  e.target.style.borderColor = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 6px 20px rgba(59, 59, 59, 0.4)';
                }}
              >
                {language === 'ar' ? 'عن المكتب' : 'About Our Firm'}
              </button>
            </Link>
            
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  backgroundColor: '#3b3b3b',
                  color: 'white',
                  border: '2px solid transparent',
                  padding: isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
                  fontSize: isMobile ? '1.1rem' : '1.25rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 6px 20px rgba(59, 59, 59, 0.4), 0 0 0 0 rgba(59, 59, 59, 0.7)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'pulse 2s infinite'
                }}
                onMouseOver={e => {
                  e.target.style.backgroundColor = '#5a5a5a';
                  e.target.style.borderColor = '#3b3b3b';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(59, 59, 59, 0.6)';
                }}
                onMouseOut={e => {
                  e.target.style.backgroundColor = '#3b3b3b';
                  e.target.style.borderColor = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 6px 20px rgba(59, 59, 59, 0.4)';
                }}
              >
                {language === 'ar' ? 'جميع الخدمات' : 'All Services'}
              </button>
            </Link>
          </div>
          <style jsx>{`
            @keyframes pulse {
              0% {
                box-shadow: 0 6px 20px rgba(59, 59, 59, 0.4), 0 0 0 0 rgba(59, 59, 59, 0.7);
              }
              70% {
                box-shadow: 0 6px 20px rgba(59, 59, 59, 0.4), 0 0 0 10px rgba(59, 59, 59, 0);
              }
              100% {
                box-shadow: 0 6px 20px rgba(59, 59, 59, 0.4), 0 0 0 0 rgba(59, 59, 59, 0);
              }
            }
          `}</style>
        </div>
      </section>
    </Layout>
  )
}
