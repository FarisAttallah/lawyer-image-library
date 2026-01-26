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
      backgroundColor: '#eeeeee', 
      color: '#284268', 
      padding: '2rem 2rem 1.5rem',
      direction: language === 'ar' ? 'rtl' : 'ltr'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Footer Content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr 1fr', 
          gap: '2rem',
          marginBottom: '1.5rem'
        }}>
          {/* Firm Info */}
          <div>
            <h3 style={{ 
              color: '#284268', 
              fontSize: '1.1rem',
              fontWeight: 'bold',
              margin: '0 0 0.8rem 0'
            }}>
              {t.lawFirm}
            </h3>
            <p style={{
              lineHeight: '1.5',
              marginBottom: '0',
              color: '#555555',
              fontSize: '0.85rem'
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
              color: '#284268', 
              marginBottom: '0.8rem',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}>
              {t.contactInfo}
            </h4>
            <div style={{ lineHeight: '1.5', color: '#555555', fontSize: '0.85rem' }}>
              {language === 'ar' ? (
                <p style={{ marginBottom: '0.3rem' }}>
                  <span>{t.phoneLabel}:</span>{' '}
                  <span dir="ltr" style={{ unicodeBidi: 'isolate', display: 'inline-block' }}>{t.phoneNumber}</span>
                </p>
              ) : (
                <p style={{ marginBottom: '0.3rem' }}>{t.phoneLabel}: {t.phoneNumber}</p>
              )}
             {language === 'ar' ? (
               <p style={{ marginBottom: '0.3rem' }}>
                 <span>{t.officePhoneLabel}:</span>{' '}
                 <span dir="ltr" style={{ unicodeBidi: 'isolate', display: 'inline-block' }}>{t.officePhoneNumber}</span>
               </p>
             ) : (
               <p style={{ marginBottom: '0.3rem' }}>{t.officePhoneLabel}: {t.officePhoneNumber}</p>
             )}
              <p style={{ marginBottom: '0.3rem' }}>{t.email}</p>
              <p>{t.location}</p>
            </div>
          </div>
          
          {/* Working Hours */}
          <div>
            <h4 style={{ 
              color: '#284268', 
              marginBottom: '0.8rem',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}>
              {t.workingHours}
            </h4>
            <p style={{ 
              lineHeight: '1.5',
              color: '#555555',
              fontSize: '0.85rem',
              marginBottom: '1rem'
            }}>
              {t.schedule}
            </p>
            
            <div>
              <h5 style={{ 
                color: '#284268', 
                marginBottom: '0.4rem',
                fontSize: '0.95rem'
              }}>
                {language === 'ar' ? 'خدماتنا المميزة' : 'Our Featured Services'}
              </h5>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                color: '#555555', 
                fontSize: '0.8rem',
                lineHeight: '1.4'
              }}>
                <li style={{ marginBottom: '0.2rem' }}>• {t.legalConsultation}</li>
                <li style={{ marginBottom: '0.2rem' }}>• {t.litigation}</li>
                <li style={{ marginBottom: '0.2rem' }}>• {t.commercialLaw}</li>
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
              width: '110px',
              height: '110px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/images/Logo.png" 
                alt="Hussein Alghamdi Law Firm Logo"
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
          borderTop: '1px solid rgba(40, 66, 104, 0.2)', 
          paddingTop: '1rem',
          textAlign: 'center'
        }}>
          {/* Social Media Icons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', marginBottom: '0.8rem' }}>
            <a href="https://www.instagram.com/almohmmedlaw/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: 'inline-block' }}>
              <img src="/icons/instagram.png" alt="Instagram" style={{ width: 24, height: 24, display: 'block' }} />
            </a>
            <a href="https://x.com/AlmohmmedLaw" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" style={{ display: 'inline-block' }}>
              <img src="/icons/twitter.png" alt="X (Tweet)" style={{ width: 24, height: 24, display: 'block' }} />
            </a>
            <a href="https://www.linkedin.com/in/al-mohammed-law-firm-and-legal-consultations-%D8%A2%D9%84-%D9%85%D8%AD%D9%85%D8%AF-%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D8%A9-%D9%88-%D8%A7%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9-0361a3343/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ display: 'inline-block' }}>
              <img src="/icons/linkedin.png" alt="LinkedIn" style={{ width: 24, height: 24, display: 'block' }} />
            </a>
          </div>
          <p style={{ 
            margin: 0, 
            color: '#284268',
            fontSize: '0.85rem'
          }}>
            {t.copyright}
          </p>
          <p style={{
            margin: '0.4rem 0 0',
            color: '#555555',
            fontSize: '0.75rem'
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
