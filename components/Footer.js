import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <footer style={{ 
      backgroundColor: '#0c4b3b', 
      color: 'white', 
      padding: '3rem 2rem 2rem',
      direction: language === 'ar' ? 'rtl' : 'ltr'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Footer Content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '3rem',
          marginBottom: '2rem'
        }}>
          {/* Firm Info */}
          <div>
            <h3 style={{ 
              color: '#c49a6c', 
              marginBottom: '1rem',
              fontSize: '1.4rem',
              fontWeight: 'bold'
            }}>
              {t.lawFirm}
            </h3>
            <p style={{
              lineHeight: '1.7',
              marginBottom: '1rem',
              color: '#e0e0e0'
            }}>
              {language === 'ar' 
                ? 'خبرة قانونية تتجاوز 13 عامًا من التميز والثقة في خدمة العدالة وحماية الحقوق.'
                : 'Over 13 years of legal excellence and trust in serving justice and protecting rights.'
              }
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 style={{ 
              color: '#c49a6c', 
              marginBottom: '1rem',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>
              {t.contactInfo}
            </h4>
            <div style={{ lineHeight: '1.8', color: '#e0e0e0' }}>
              <p style={{ marginBottom: '0.5rem' }}>{t.phone}</p>
              <p style={{ marginBottom: '0.5rem' }}>{t.email}</p>
              <p>{t.location}</p>
            </div>
          </div>
          
          {/* Working Hours */}
          <div>
            <h4 style={{ 
              color: '#c49a6c', 
              marginBottom: '1rem',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>
              {t.workingHours}
            </h4>
            <p style={{ 
              lineHeight: '1.8',
              color: '#e0e0e0'
            }}>
              {t.schedule}
            </p>
            
            <div style={{ marginTop: '1.5rem' }}>
              <h5 style={{ 
                color: '#c49a6c', 
                marginBottom: '0.5rem',
                fontSize: '1rem'
              }}>
                {language === 'ar' ? 'خدماتنا المميزة' : 'Our Featured Services'}
              </h5>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                color: '#e0e0e0',
                fontSize: '0.9rem'
              }}>
                <li style={{ marginBottom: '0.3rem' }}>• {t.legalConsultation}</li>
                <li style={{ marginBottom: '0.3rem' }}>• {t.litigation}</li>
                <li style={{ marginBottom: '0.3rem' }}>• {t.commercialLaw}</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(196, 154, 108, 0.3)', 
          paddingTop: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: 0, 
            color: '#c49a6c',
            fontSize: '0.95rem'
          }}>
            {t.copyright}
          </p>
          <p style={{
            margin: '0.5rem 0 0',
            color: '#e0e0e0',
            fontSize: '0.85rem'
          }}>
            {language === 'ar' 
              ? 'تصميم وتطوير موقع احترافي للخدمات القانونية'
              : 'Professional legal services website design and development'
            }
          </p>
        </div>
      </div>
    </footer>
  )
}
