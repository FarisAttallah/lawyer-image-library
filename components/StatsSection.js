import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function StatsSection({ isMobile, fonts }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div style={{
      width: '100%',
      minHeight: '350px',
      backgroundColor: 'white',
      padding: isMobile ? '2rem 0.5rem' : '4rem 0',
      color: '#284268',
      direction: language === 'ar' ? 'rtl' : 'ltr',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative blurred circles for glassmorphism effect */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        left: '-80px',
        width: '220px',
        height: '220px',
        borderRadius: '50%',
        background: 'rgba(196,154,108,0.12)',
        filter: 'blur(12px)',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(34,98,73,0.10)',
        filter: 'blur(16px)',
        zIndex: 1
      }} />
      <div style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        <h2 
        className="services-title"
        style={{
          textAlign: 'center',
          color: '#284268',
          fontWeight: 'bold',
          letterSpacing: '1px',
          marginBottom: '2rem'
        }}>
          {t.achievementsTitle}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {/* Achievement Cards */}
          {[
            { content: t.achievement1 },
            { content: t.achievement2 },
            { content: t.achievement3 },
            { content: t.achievement4 }
          ].map((achievement, idx) => (
                          <div key={idx} style={{
                padding: isMobile ? '1.5rem' : '2rem',
                borderRadius: '16px',
                backgroundColor: '#f8f9fa',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                border: '2px solid #FFFFFF',
                transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)',
                position: 'relative',
                zIndex: 2,
                cursor: 'pointer'
              }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
              <p 
              className="service-card-description"
              style={{
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                lineHeight: '1.8',
                color: '#414042',
                textAlign: language === 'ar' ? 'right' : 'left',
                margin: 0,
                fontWeight: '500'
              }}>
                {achievement.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
