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
              {language === 'ar' ? 'خدماتنا القانونية' : 'Our Legal Services'}
            </h1>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.4rem',
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
                ? 'حلول قانونية شاملة ومتخصصة لجميع احتياجاتكم القانونية'
                : 'Comprehensive and specialized legal solutions for all your legal needs'
              }
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div style={{ 
          width: '100%', 
          margin: '0 auto', 
          padding: isMobile ? '2rem 0' : '4rem 0 3rem 0'
        }}>

          {/* Additional Services Information */}
            <section style={{
            padding: '4rem 0',
            background: '#f8f9fa',
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
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  color: '#0c4b3b',
                  marginBottom: '1rem',
                  fontWeight: language === 'ar' ? '400' : 'bold'
                }}>
                  {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
                </h2>
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  color: '#666',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: 1.6
                }}>
                  {language === 'ar' 
                    ? 'نحن نقدم خدمات قانونية متخصصة مع سنوات من الخبرة والتفاني في تحقيق العدالة'
                    : 'We provide specialized legal services with years of experience and dedication to achieving justice'
                  }
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: '2rem',
                marginTop: '3rem'
              }}>
                {[
                  {
                    title: language === 'ar' ? 'خبرة واسعة' : 'Extensive Experience',
                    desc: language === 'ar' ? 'سنوات من الخبرة في مختلف المجالات القانونية' : 'Years of experience across various legal fields'
                  },
                  {
                    title: language === 'ar' ? 'نهج شخصي' : 'Personal Approach',
                    desc: language === 'ar' ? 'نقدم خدمة مخصصة لكل عميل حسب احتياجاته' : 'Personalized service tailored to each client\'s needs'
                  },
                  {
                    title: language === 'ar' ? 'نتائج مؤكدة' : 'Proven Results',
                    desc: language === 'ar' ? 'سجل حافل من النجاحات والقضايا المكسوبة' : 'Track record of successful cases and satisfied clients'
                  }
                ].map((feature, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                    <h3 style={{
                      fontSize: isMobile ? '1.3rem' : '1.5rem',
                      color: '#c49a6c',
                      marginBottom: '1rem',
                      fontWeight: language === 'ar' ? '400' : 'bold'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      color: '#666',
                      lineHeight: 1.6,
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Services Section */}
          <section id="services" style={{ 
            marginBottom: isMobile ? '3rem' : '15rem'
          }}>
            <Services isMobile={isMobile} fonts={{}} />
          </section>

          
        </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
