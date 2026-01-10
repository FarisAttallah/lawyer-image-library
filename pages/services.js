import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Services from '../components/Services'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { useResponsiveFonts } from '../hooks/useResponsiveFonts'

export default function ServicesPage() {
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
          backgroundImage: 'url(/images/services-hero.png)',
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
            <h2 style={{
              fontSize: fonts.sectionTitle,
              marginBottom: '1.5rem',
              fontWeight: language === 'ar' ? '400' : 'bold',
              textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
              animation: 'fadeInUp 1.2s ease-out'
            }}>
              {t.servicesTitle}
            </h2>
            <p style={{
              fontSize: fonts.sectionSubtitle,
              color: '#FFFFFF',
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
              {language === 'ar' ? t.servicesSubtitle : t.servicesSubtitleEn}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div style={{ 
          width: '100%', 
          margin: '0 auto', 
          padding: isMobile ? '2rem 0' : '4rem 0 3rem 0'
        }}>

          {/* Services Section */}
          <section id="services" style={{ 
            marginBottom: isMobile ? '3rem' : '10rem'
          }}>
            <Services isMobile={isMobile} fonts={{}} />
          </section>
          
          {/* Why Choose Us Section */}
            <section style={{
            padding: '4rem 0',
            background: '#284268',
            direction: language === 'ar' ? 'rtl' : 'ltr',
            marginBottom: isMobile ? '1rem' : '8rem'
          }}>
            <div style={{
              maxWidth: '1200px',
              margin: '5rem auto',
              padding: '0 2rem'
            }}>
              <div style={{
                textAlign: 'center',
                marginBottom: '3rem'
              }}>
                <h2 style={{
                  fontSize: fonts.sectionTitle,
                  color: 'white',
                  marginBottom: '1rem',
                  fontWeight: language === 'ar' ? '400' : 'bold'
                }}>
                  {t.whyChooseUsTitle}
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: '2rem',
                marginTop: '3rem'
              }}>
                {[
                  {
                    title: language === 'ar' ? t.extensiveExperience : t.extensiveExperience,
                    desc: language === 'ar' ? t.extensiveExperienceDesc : t.extensiveExperienceDesc
                  },
                  {
                    title: language === 'ar' ? t.personalApproach : t.personalApproach,
                    desc: language === 'ar' ? t.personalApproachDesc : t.personalApproachDesc
                  },
                  {
                    title: language === 'ar' ? t.provenResults : t.provenResults,
                    desc: language === 'ar' ? t.provenResultsDesc : t.provenResultsDesc
                  }
                ].map((feature, index) => (
                  <div key={index} style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                    <h3
                    className="service-card-title"
                    style={{
                      color: '#FFFFFF',
                      marginBottom: '1rem',
                      fontWeight: language === 'ar' ? '400' : 'bold'
                    }}>
                      {feature.title}
                    </h3>
                    <p 
                    className="service-card-description"
                    style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: 1.6,
                    }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          
        </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
