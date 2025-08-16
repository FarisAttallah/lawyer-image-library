import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import ImageLogo from './ImageLogo'
import { useState, useEffect } from 'react'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768)
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])
  
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
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr 1fr', 
          gap: '3rem',
          marginBottom: '2rem'
        }}>
          {/* Firm Info */}
          <div>
            <h3 style={{ 
              color: '#c49a6c', 
              fontSize: '1.4rem',
              fontWeight: 'bold',
              margin: '0 0 1rem 0'
            }}>
              {t.lawFirm}
            </h3>
            <p style={{
              lineHeight: '1.7',
              marginBottom: '1rem',
              color: '#e0e0e0'
            }}>
              {language === 'ar' 
                ? 'خبرة قانونية تتجاوز ١٣ عاما من التميز والثقة في خدمة العدالة وحماية الحقوق.'
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
              {language === 'ar' ? (
                <p style={{ marginBottom: '0.5rem' }}>
                  <span>{t.phoneLabel}:</span>{' '}
                  <span dir="ltr" style={{ unicodeBidi: 'isolate', display: 'inline-block' }}>{t.phoneNumber}</span>
                </p>
              ) : (
                <p style={{ marginBottom: '0.5rem' }}>{t.phoneLabel}: {t.phoneNumber}</p>
              )}

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
          
          {/* Logo Column */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end'
          }}>
            <div style={{
              width: '150px',
              height: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/images/Logo.png" 
                alt="Hussein Almohmmed Law Firm Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(196, 154, 108, 0.3)', 
          paddingTop: '1.5rem',
          textAlign: 'center'
        }}>
          {/* Social Media Icons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
            <a href="https://www.instagram.com/almohmmedlaw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: 'inline-block' }}>
              <img src="/icons/instagram.png" alt="Instagram" style={{ width: 28, height: 28, display: 'block' }} />
            </a>
            <a href="https://x.com/AlmohmmedLaw" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" style={{ display: 'inline-block' }}>
              <img src="/icons/twitter.png" alt="X (Tweet)" style={{ width: 28, height: 28, display: 'block' }} />
            </a>
            <a href="https://www.linkedin.com/in/al-mohmmed-lawfirm22/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ display: 'inline-block' }}>
              <img src="/icons/linkedin.png" alt="LinkedIn" style={{ width: 28, height: 28, display: 'block' }} />
            </a>
          </div>
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
