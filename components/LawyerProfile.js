import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import BrandingIcon from './BrandingIcon'

export default function LawyerProfile({ isMobile, fonts }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
      backgroundColor: '#f8f9fa',
      direction: language === 'ar' ? 'rtl' : 'ltr',
      display: 'flex',
      alignItems: 'center',
      overflow: 'auto',
      position: 'relative'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'rgba(196, 154, 108, 0.05)',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '8%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(12, 75, 59, 0.03)',
        zIndex: 1
      }} />
      
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Elegant parent container */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 8px 25px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          border: '1px solid rgba(196, 154, 108, 0.1)',
          position: 'relative'
        }}>
          {/* Decorative top border */}
          <div style={{
            height: '4px',
            background: 'linear-gradient(90deg, #c49a6c 0%, #226249 50%, #c49a6c 100%)',
            width: '100%'
          }} />
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            minHeight: isMobile ? 'auto' : '800px'
          }}>
            {/* Text Content - Left Side */}
            <div style={{
              order: isMobile ? 2 : (language === 'ar' ? 2 : 1),
              padding: isMobile ? '2rem' : '3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(248, 249, 250, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)',
              position: 'relative'
            }}>
              <h2 style={{
                fontSize: fonts.sectionTitle,
                color: '#0c4b3b',
                marginBottom: '2rem',
                fontWeight: language === 'ar' ? '400' : 'bold',
                textAlign: language === 'ar' ? 'right' : 'left',
                position: 'relative'
              }}
              >
                <span
                  dangerouslySetInnerHTML={{ __html: t.lawyerQuoteTitle }}
                  style={{ display: 'inline-block' }}
                />
                {/* Decorative line under title */}
                <div style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: language === 'ar' ? 'auto' : '0',
                  right: language === 'ar' ? '0' : 'auto',
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #c49a6c, #226249)',
                  borderRadius: '2px'
                }} />
              </h2>
              
              <blockquote style={{
                fontSize: fonts.bodyLarge,
                lineHeight: '1.8',
                color: '#333',
                fontStyle: 'italic',
                marginBottom: '2.5rem',
                position: 'relative',
                paddingLeft: language === 'ar' ? '0' : '2rem',
                paddingRight: language === 'ar' ? '2rem' : '0',
                borderLeft: language === 'ar' ? 'none' : '4px solid #c49a6c',
                borderRight: language === 'ar' ? '4px solid #c49a6c' : 'none'
              }}>
                "{t.lawyerQuote}"
              </blockquote>
              
              {/* Lawyer credentials */}
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                border: '2px solid #c49a6c',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Decorative corner */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, rgba(196, 154, 108, 0.1), transparent)',
                  zIndex: 1
                }} />
                
                <h3 style={{
                  fontSize: fonts.subsectionTitle,
                  color: '#0c4b3b',
                  marginBottom: '1rem',
                  fontWeight: language === 'ar' ? '400' : 'bold',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {t.lawyerName}
                </h3>
                <p style={{
                  fontSize: fonts.body,
                  lineHeight: '1.6',
                  color: '#555',
                  marginBottom: '0.8rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {t.lawyerCredentials}
                </p>
                <p style={{
                  fontSize: fonts.body,
                  lineHeight: '1.6',
                  color: '#555',
                  marginBottom: '0.8rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {t.lawyerMembership}
                </p>
                <p style={{
                  fontSize: fonts.body,
                  lineHeight: '1.6',
                  color: '#555',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {t.lawyerExperience}
                </p>
              </div>
              
              {/* Branding Icon at bottom left */}
              <div style={{
                position: 'absolute',
                bottom: '0.5rem',
                left: '1rem',
                zIndex: 3
              }}>
                <BrandingIcon size="medium" />
              </div>
            </div>
            
            {/* Lawyer Image - Right Side */}
            <div style={{
              order: isMobile ? 1 : (language === 'ar' ? 1 : 2),
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #0c4b3b 0%, #226249 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Decorative pattern overlay */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundImage: `
                  radial-gradient(circle at 20% 20%, rgba(196, 154, 108, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(196, 154, 108, 0.05) 0%, transparent 50%)
                `,
                zIndex: 1
              }} />
              
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isMobile ? '2rem' : '3rem',
                zIndex: 2
              }}>
                <div style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                  width: '100%',
                  maxWidth: '450px',
                  aspectRatio: '3/4'
                }}>
                  <img 
                    src="/images/Hussein-office.jpeg" 
                    alt={language === 'ar' ? 'مكتب المحاماة' : 'Law Office'}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      display: 'block',
                      filter: 'brightness(1.05) contrast(1.1)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  
                  {/* Elegant overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    background: 'linear-gradient(135deg, rgba(196, 154, 108, 0.1) 0%, transparent 40%, rgba(12, 75, 59, 0.1) 100%)',
                    pointerEvents: 'none'
                  }} />
                </div>
                
                {/* Floating decorative elements */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  right: '10%',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(196, 154, 108, 0.6)',
                  animation: 'float 3s ease-in-out infinite',
                  zIndex: 1
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '15%',
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  background: 'rgba(196, 154, 108, 0.4)',
                  animation: 'float 4s ease-in-out infinite reverse',
                  zIndex: 1
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}
