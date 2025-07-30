import { useResponsiveFonts } from '../hooks/useResponsiveFonts'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LawyerProfile from '../components/LawyerProfile'
import Career from '../components/Career'
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

      {/* Career Section */}
      <section style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0'
      }}>
        <Career isMobile={isMobile} fonts={fonts} />
      </section>

      

      {/* Call to Action Section */}
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #0c4b3b 0%, #226249 100%)',
        color: 'white',
        textAlign: 'center',
        direction: language === 'ar' ? 'rtl' : 'ltr',
        margin: '0 auto',
        borderRadius: '16px',
        maxWidth: '1200px',
        width: 'calc(100% - 4rem)',
        boxShadow: '0 12px 40px rgba(12, 75, 59, 0.3), 0 4px 16px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: isMobile ? '2.3rem' : '2.8rem',
            marginBottom: '2rem',
            fontWeight: language === 'ar' ? '400' : 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            {t.ctaTitle}
          </h2>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  backgroundColor: '#c49a6c',
                  color: 'white',
                  border: '2px solid transparent',
                  padding: isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
                  fontSize: isMobile ? '1.1rem' : '1.25rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontFamily: 'BeINBlack, Roboto, Arial, sans-serif',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 6px 20px rgba(196, 154, 108, 0.4), 0 0 0 0 rgba(196, 154, 108, 0.7)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'pulse 2s infinite'
                }}
                onMouseOver={e => {
                  e.target.style.borderColor = '#c49a6c';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(196, 154, 108, 0.6)';
                }}
                onMouseOut={e => {
                  e.target.style.borderColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 6px 20px rgba(196, 154, 108, 0.4)';
                }}
              >
                                {language === 'ar' ? (
                  <>
                    تعرف على <span style={{ 
                      fontWeight: 'bold',
                      textShadow: '0 0 3px rgba(0,0,0,0.3)'
                    }}>نهجنا القانوني المتخصص</span>
                  </>
                ) : (
                  t.ctaSubtitle
                )}
              </button>
            </Link>
            
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  backgroundColor: '#c49a6c',
                  color: 'white',
                  border: '2px solid transparent',
                  padding: isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
                  fontSize: isMobile ? '1.1rem' : '1.25rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontFamily: 'BeINBlack, Roboto, Arial, sans-serif',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 6px 20px rgba(196, 154, 108, 0.4), 0 0 0 0 rgba(196, 154, 108, 0.7)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'pulse 2s infinite'
                }}
                onMouseOver={e => {
                  e.target.style.borderColor = '#c49a6c';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(196, 154, 108, 0.6)';
                }}
                onMouseOut={e => {
                  e.target.style.borderColor = 'transparent';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 6px 20px rgba(196, 154, 108, 0.4)';
                }}
              >
                                {language === 'ar' ? (
                  <>
                    اكتشف المزيد عن <span style={{ 
                      fontWeight: 'bold',
                      textShadow: '0 0 3px rgba(0, 0, 0, 0.3)'
                    }}>خدماتنا وخبرتنا</span>
                  </>
                ) : (
                  t.ctaDescription
                )}
              </button>
            </Link>
          </div>
          <style jsx>{`
            @keyframes pulse {
              0% {
                box-shadow: 0 6px 20px rgba(196, 154, 108, 0.4), 0 0 0 0 rgba(196, 154, 108, 0.7);
              }
              70% {
                box-shadow: 0 6px 20px rgba(196, 154, 108, 0.4), 0 0 0 10px rgba(196, 154, 108, 0);
              }
              100% {
                box-shadow: 0 6px 20px rgba(196, 154, 108, 0.4), 0 0 0 0 rgba(196, 154, 108, 0);
              }
            }
          `}</style>
        </div>
      </section>
      
      {/* Whitespace between Call to Action and Footer */}
      <div style={{ height: '6rem' }} />
    </Layout>
  )
}
