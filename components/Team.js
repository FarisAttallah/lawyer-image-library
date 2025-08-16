import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function Team({ isMobile, fonts }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem',
      background: 'linear-gradient(135deg, #0c4b3b 0%, #226249 100%)',
      direction: language === 'ar' ? 'rtl' : 'ltr',
      display: 'flex',
      alignItems: 'center',
      overflow: 'auto',
      color: 'white'
    }}>
      <div style={{ maxWidth: isMobile ? '100%' : '1400px', margin: '0 auto' }}>
        {/* Team Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 
          className="services-title"
          style={{
            color: 'white',
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            {t.teamTitle}
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Team Content */}
            <div style={{
              order: isMobile ? 2 : (language === 'ar' ? 2 : 2),
              position: 'relative'
            }}>
              {/* Decorative line */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: language === 'ar' ? 'auto' : '0',
                right: language === 'ar' ? '0' : 'auto',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #c49a6c, rgba(196, 154, 108, 0.5))',
                borderRadius: '2px',
                marginBottom: '2rem'
              }} />
              
              {/* Content with enhanced styling */}
              <div style={{
                padding: isMobile ? '2rem' : '3.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(196, 154, 108, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                marginTop: '1rem',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
              <p 
              className="service-card-title"
              style={{
                fontFamily: language === 'ar' ? 'Cairo, BeINBlack, Arial, sans-serif' : 'Roboto, Arial, sans-serif',
                fontSize: isMobile ? '1.6rem' : '2rem',
                lineHeight: '1.8',
                color: '#c49a6c',
                marginBottom: '2rem',
                fontWeight: 'bold',
                textAlign: language === 'ar' ? 'right' : 'left'
              }}>
                {t.teamDescription}
              </p>
              <p 
              className="service-card-description"
              style={{
                fontFamily: language === 'ar' ? 'Cairo, BeINBlack, Arial, sans-serif' : 'Roboto, Arial, sans-serif',
                fontSize: isMobile ? '1.3rem' : '1.6rem',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2rem',
                textAlign: language === 'ar' ? 'right' : 'left'
              }}>
                {t.teamDetails}
              </p>
              <p 
              className="service-card-description"
              style={{
                fontFamily: language === 'ar' ? 'Cairo, BeINBlack, Arial, sans-serif' : 'Roboto, Arial, sans-serif',
                fontSize: isMobile ? '1.3rem' : '1.6rem',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.85)',
                textAlign: language === 'ar' ? 'right' : 'left'
              }}>
                {t.teamApproach}
              </p>
              </div>
            </div>

            {/* Team Image */}
            <div style={{
              order: isMobile ? 1 : (language === 'ar' ? 1 : 1),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}>
              {/* Decorative background elements */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'rgba(196, 154, 108, 0.2)',
                zIndex: 1,
                animation: 'float 6s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'rgba(34, 98, 73, 0.15)',
                zIndex: 1,
                animation: 'float 8s ease-in-out infinite reverse'
              }} />
              
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 8px 25px rgba(196, 154, 108, 0.2)',
                maxWidth: '500px',
                width: '100%',
                zIndex: 2,
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'all 0.5s ease',
                border: '3px solid rgba(196, 154, 108, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 25px 80px rgba(0,0,0,0.4), 0 12px 35px rgba(196, 154, 108, 0.3)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3), 0 8px 25px rgba(196, 154, 108, 0.2)'
              }}>
                <img 
                  src="/images/team_1.png" 
                  alt={language === 'ar' ? 'فريق العمل' : 'Our Team'}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                {/* Enhanced overlay with gradient */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: 'linear-gradient(135deg, rgba(196, 154, 108, 0.2) 0%, transparent 30%, rgba(12, 75, 59, 0.2) 70%, rgba(34, 98, 73, 0.1) 100%)',
                  pointerEvents: 'none'
                }} />
                
                {/* Corner accent */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #c49a6c, transparent)',
                  opacity: 0.3,
                  borderRadius: '0 20px 0 0'
                }} />
              </div>
              
              {/* Floating elements */}
              <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#c49a6c',
                opacity: 0.6,
                animation: 'pulse 3s ease-in-out infinite',
                zIndex: 3
              }} />
              <div style={{
                position: 'absolute',
                bottom: '30%',
                left: '15%',
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                background: '#226249',
                opacity: 0.5,
                animation: 'pulse 4s ease-in-out infinite 1s',
                zIndex: 3
              }} />
              
              <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  50% { transform: translateY(-10px) rotate(180deg); }
                }
                @keyframes pulse {
                  0%, 100% { transform: scale(1); opacity: 0.6; }
                  50% { transform: scale(1.2); opacity: 0.8; }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}