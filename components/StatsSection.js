import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function StatsSection({ isMobile, fonts }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  // Updated stats to reflect actual firm data
  const statsTranslations = {
    ar: {
      yearsExperience: 'سنة خبرة',
      cases: 'قضية منجزة',
      clients: 'عميل راض',
      successRate: 'معدل النجاح',
      years: '13+',
      totalCases: '500+',
      totalClients: '300+',
      success: '95%'
    },
    en: {
      yearsExperience: 'Years Experience',
      cases: 'Cases Completed',
      clients: 'Satisfied Clients',
      successRate: 'Success Rate',
      years: '13+',
      totalCases: '500+',
      totalClients: '300+',
      success: '95%'
    }
  }
  
  const stats = statsTranslations[language]
  
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #0c4b3b 0%, #226249 100%)',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem',
      color: 'white',
      direction: language === 'ar' ? 'rtl' : 'ltr',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: fonts.sectionTitle,
          marginBottom: '3rem',
          textAlign: 'center',
          color: '#c49a6c',
          fontWeight: 'bold'
        }}>
          {language === 'ar' ? 'إنجازاتنا بالأرقام' : 'Our Achievements in Numbers'}
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '1.5rem' : '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{
              fontSize: fonts.statNumber,
              fontWeight: 'bold',
              color: '#c49a6c',
              marginBottom: '0.5rem'
            }}>
              {stats.years}
            </div>
            <div style={{
              fontSize: fonts.statLabel,
              opacity: 0.9
            }}>
              {stats.yearsExperience}
            </div>
          </div>
          
          <div style={{
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{
              fontSize: fonts.statNumber,
              fontWeight: 'bold',
              color: '#c49a6c',
              marginBottom: '0.5rem'
            }}>
              {stats.totalCases}
            </div>
            <div style={{
              fontSize: fonts.statLabel,
              opacity: 0.9
            }}>
              {stats.cases}
            </div>
          </div>
          
          <div style={{
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{
              fontSize: fonts.statNumber,
              fontWeight: 'bold',
              color: '#c49a6c',
              marginBottom: '0.5rem'
            }}>
              {stats.totalClients}
            </div>
            <div style={{
              fontSize: fonts.statLabel,
              opacity: 0.9
            }}>
              {stats.clients}
            </div>
          </div>
          
          <div style={{
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{
              fontSize: fonts.statNumber,
              fontWeight: 'bold',
              color: '#c49a6c',
              marginBottom: '0.5rem'
            }}>
              {stats.success}
            </div>
            <div style={{
              fontSize: fonts.statLabel,
              opacity: 0.9
            }}>
              {stats.successRate}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
