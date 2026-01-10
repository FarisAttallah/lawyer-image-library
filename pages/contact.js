import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import LocationMap from '../components/LocationMap'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { useResponsiveFonts } from '../hooks/useResponsiveFonts'

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isMobile, setIsMobile] = useState(false)
  const { fontFamily, fonts } = useResponsiveFonts()
  
  // Check if screen is mobile size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])
  
  return (
    <div style={{ 
      fontFamily,
      lineHeight: '1.6',
      position: 'relative',
      minHeight: '100vh'
    }}>
      {/* Normal Header with Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}>
        <Header transparent={false} />
      </div>

      <main style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        <div style={{ 
          backgroundColor: '#f8f9fa',
          minHeight: '100vh',
          direction: language === 'ar' ? 'rtl' : 'ltr'
        }}>
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          backgroundColor: '#284268',
          color: 'white',
          padding: isMobile ? '3rem 1rem' : '5rem 2rem',
          textAlign: 'center',
          backgroundImage: 'url(/images/Contact_Us.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          margin: isMobile ? '3rem 0.5rem 0 0.5rem' : '4rem 2rem 0 2rem',
          minHeight: isMobile ? '300px' : '450px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '16px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          overflow: 'hidden'
        }}>
          {/* Overlay for better text readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(40, 66, 104, 0.55) 0%, rgba(40, 66, 104, 0.85) 50%, rgba(40, 66, 104, 0.55) 100%)',
            zIndex: 1
          }} />
          
          <div style={{ 
            position: 'relative',
            zIndex: 2,
            maxWidth: '1200px', 
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            <h1 
            style={{
              fontSize: fonts.sectionTitle,
              marginBottom: '1.5rem',
              fontWeight: 'bold',
              textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
              animation: 'fadeInUp 1.2s ease-out'
            }}>
              {t.contactUsTitle}
            </h1>
            <p 
            style={{
              fontSize: fonts.sectionSubtitle,
              color: '#FFFFFF',
              maxWidth: '700px',
              margin: '0 auto',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              lineHeight: '1.6',
              animation: 'fadeInUp 1.2s ease-out',
              marginBottom: '1rem'
            }}>
              {t.contactUsSubtitle}
            </p>
            <p 
            style={{
              fontSize: fonts.body,
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '700px',
              margin: '0 auto',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              lineHeight: '1.6',
              animation: 'fadeInUp 1.2s ease-out'
            }}>
        {/* FadeInUp Animation CSS */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
              {t.contactUsDescription}
            </p>
            
            {/* Legal Consultation button that scrolls to the form */}
            <div style={{
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <button
                onClick={() => {
                  document.getElementById('contactForm').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#284268',
                  border: '2px solid transparent',
                  padding: isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
                  fontSize: fonts.heroButton,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontFamily: 'BeINBlack, Roboto, Arial, sans-serif',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4), 0 0 0 0 rgba(255, 255, 255, 0.7)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'pulse 2s infinite',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#284268'
                  e.target.style.borderColor = '#FFFFFF'
                  e.target.style.color = 'white'
                  e.target.style.transform = 'translateY(-3px)'
                  e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.6)'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#FFFFFF'
                  e.target.style.borderColor = 'transparent'
                  e.target.style.color = '#284268'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.4)'
                }}
              >
               {language === 'ar' ? 'استشارة قانونية' : 'Legal Consultation'}
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isMobile ? '2rem 1rem' : '4rem 2rem 3rem 2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '2rem' : '3rem',
            marginBottom: isMobile ? '2rem' : '3rem'
          }}>
            {/* Contact Information */}
            <div style={{ order: language === 'ar' ? 2 : 2 }}>
              <ContactInfo fonts={fonts} />
            </div>
            
            {/* Contact Form */}
            <div style={{ order: language === 'ar' ? 1 : 1 }}>
              <ContactForm fonts={fonts} />
            </div>
          </div>
          
          {/* Location Map */}
          <LocationMap />
        </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
