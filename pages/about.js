import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import StatsSection from '../components/StatsSection'
import JusticeSection from '../components/JusticeSection'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { useResponsiveFonts } from '../hooks/useResponsiveFonts'

export default function AboutPage() {
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
          backgroundColor: '#0c4b3b',
          color: 'white',
          padding: isMobile ? '3rem 1rem' : '5rem 2rem',
          textAlign: 'center',
          backgroundImage: 'url(/images/about-hero.png)',
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
            padding: isMobile ? '0 1rem' : '0',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            <h1 style={{
              fontSize: isMobile ? '2rem' : '3.5rem',
              marginBottom: '1.5rem',
              fontWeight: language === 'ar' ? '400' : 'bold',
              textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
              animation: 'fadeInUp 1.2s ease-out'
            }}>
              {language === 'ar' ? 'عن مكتبنا' : 'About Our Firm'}
            </h1>
            <p 
            style={{
              fontSize: fonts.sectionSubtitle,
              color: '#c49a6c',
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
              {language === 'ar' 
                ? 'ملتزمون بالعدالة والتميز ونجاح العملاء في تحقيق حقوقهم القانونية'
                : 'Dedicated to Justice, Excellence, and Client Success in achieving their legal rights'
              }
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div style={{ 
          maxWidth: '100%', 
          margin: '0 auto', 
          padding: isMobile ? '2rem 1rem' : '4rem 2rem 3rem 2rem'
        }}>
          {/* About Section */}
          <section id="about" style={{ 
            marginBottom: isMobile ? '3rem' : '4rem'
          }}>
            <About isMobile={isMobile} fonts={{}} />
          </section>

          {/* Stats Section */}
          <section style={{ 
            marginBottom: isMobile ? '3rem' : '4rem'
          }}>
            <StatsSection isMobile={isMobile} fonts={{}} />
          </section>
          
          {/* Justice Section */}
          <section style={{ 
            marginBottom: isMobile ? '2rem' : '3rem'
          }}>
            <JusticeSection isMobile={isMobile} fonts={{}} />
          </section>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
