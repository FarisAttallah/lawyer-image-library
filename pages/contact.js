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
  const { fontFamily } = useResponsiveFonts()
  
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
          backgroundColor: '#0c4b3b',
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
            background: 'linear-gradient(135deg, rgba(12, 75, 59, 0.55) 0%, rgba(34, 98, 73, 0.85) 50%, rgba(12, 75, 59, 0.55) 100%)',
            zIndex: 1
          }} />
          
          <div style={{ 
            position: 'relative',
            zIndex: 2,
            maxWidth: '1200px', 
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            <h1 style={{
              fontSize: isMobile ? '2rem' : '3.5rem',
              marginBottom: '1.5rem',
              fontWeight: 'bold',
              textShadow: '3px 3px 6px rgba(0,0,0,0.8)'
            }}>
              {t.contactUsTitle || (language === 'ar' ? 'اتصل بنا' : 'Contact Us')}
            </h1>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.4rem',
              color: '#c49a6c',
              maxWidth: '700px',
              margin: '0 auto',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              lineHeight: '1.6'
            }}>
              {language === 'ar' 
                ? 'نحن هنا لمساعدتك في جميع احتياجاتك القانونية. استشارة مهنية، حلول قانونية موثوقة'
                : 'We are here to help you with all your legal needs. Professional consultation, trusted legal solutions'
              }
            </p>
            
            {/* Additional hero content to complement the image */}
            <div style={{
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '1rem' : '2rem',
              flexWrap: 'wrap',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center'
            }}>
              <div style={{
                backgroundColor: 'rgba(196, 154, 108, 0.2)',
                padding: isMobile ? '0.8rem 1rem' : '1rem 1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(196, 154, 108, 0.5)',
                minWidth: isMobile ? '200px' : 'auto'
              }}>
                <span style={{ fontSize: isMobile ? '0.9rem' : '1.1rem', fontWeight: 'bold' }}>
                  ⚖️ {language === 'ar' ? 'استشارة قانونية' : 'Legal Consultation'}
                </span>
              </div>
              <div style={{
                backgroundColor: 'rgba(196, 154, 108, 0.2)',
                padding: isMobile ? '0.8rem 1rem' : '1rem 1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(196, 154, 108, 0.5)',
                minWidth: isMobile ? '200px' : 'auto'
              }}>
                <span style={{ fontSize: isMobile ? '0.9rem' : '1.1rem', fontWeight: 'bold' }}>
                  🤝 {language === 'ar' ? 'حلول موثوقة' : 'Trusted Solutions'}
                </span>
              </div>
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
            gridTemplateColumns: isMobile ? '1fr' : (language === 'ar' ? '1fr 1fr' : '1fr 1fr'),
            gap: isMobile ? '2rem' : '3rem',
            marginBottom: isMobile ? '2rem' : '3rem'
          }}>
            {/* Contact Information */}
            <ContactInfo />
            
            {/* Contact Form */}
            <ContactForm />
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
