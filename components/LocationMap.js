import { useLanguage } from '../contexts/LanguageContext'
import { useResponsiveFonts } from '../hooks/useResponsiveFonts'

export default function LocationMap() {
  const { language } = useLanguage()
  const { isMobile } = useResponsiveFonts()
  
  const locationTexts = {
    ar: {
      title: 'تفضل بزيارتنا في مكتبنا بالرياض',
      address: [
        'الرياض - المملكة العربية السعودية',
        'الرمز البريدي ١٢٣٣١ الرقم الاضافي ٦٥٨٣'
      ],
      directions: 'احصل على الاتجاهات',
      officeLocation: 'موقع المكتب',
      exactAddress: 'الرياض - المملكة العربية السعودية',
      district: 'الرمز البريدي ١٢٣٣١ الرقم الاضافي ٦٥٨٣',
      phoneNumber: '+966 50 123 4567'
    },
    en: {
      title: 'Visit us at our office in Riyadh',
      address: [
        'Riyadh - Saudi Arabia',
        'Postal Code 12331 Additional Number 6583'
      ],
      directions: 'Get Directions',
      officeLocation: 'Office Location',
      exactAddress: 'Riyadh - Saudi Arabia',
      district: 'Postal Code 12331 Additional Number 6583',
      phoneNumber: '+966 50 123 4567'
    }
  }
  
  const t = locationTexts[language]
  
  return (
    <div style={{
      backgroundColor: 'white',
      padding: isMobile ? '1rem' : '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      marginTop: '2rem'
    }}>
      <h2 style={{
        color: '#0c4b3b',
        fontSize: isMobile ? '1.5rem' : '2rem',
        marginBottom: isMobile ? '1.5rem' : '2rem',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        {t.title}
      </h2>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        {/* Single Location Display */}
        <div style={{
          width: '100%',
          maxWidth: isMobile ? '100%' : '700px',
          height: isMobile ? '400px' : '500px',
          border: '2px solid #c49a6c',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Google Maps Embed + Contact Content */}
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Map */}
            <div style={{ flex: '0 0 auto', width: '100%', height: isMobile ? '50%' : '65%' }}>
              <iframe
                title="Office Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent('الأمير محمد بن سعود بن عبدالعزيز, Al Olaya, Riyadh 12331, Saudi Arabia')}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Details + Contact */}
            <div style={{
              flex: '1 1 auto',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: isMobile ? '1rem' : '1.5rem 2rem'
            }}>
              <div style={{ textAlign: language === 'ar' ? 'right' : 'left', flex: '1 1 60%' }}>
                <h3 style={{ color: '#0c4b3b', margin: 0, fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: '600' }}>{t.exactAddress}</h3>
                <div style={{ color: '#666', marginTop: '0.5rem', lineHeight: '1.5', fontSize: isMobile ? '0.95rem' : '1rem' }}>
                  {t.address.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.6rem' : '0.8rem', alignItems: isMobile ? 'center' : 'flex-end', marginTop: isMobile ? '0.8rem' : 0 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '0.6rem' : '1rem',
                  padding: '0.6rem 0.8rem',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  borderRadius: '8px',
                  border: '1px solid rgba(196,154,108,0.25)'
                }}>
                  <span style={{ fontSize: isMobile ? '1.1rem' : '1.3rem' }}>📞</span>
                  <span style={{ color: '#666', fontWeight: 'bold', fontSize: isMobile ? '0.95rem' : '1rem' }}>
                    <span dir="ltr" style={{ unicodeBidi: 'isolate', display: 'inline-block' }}>{t.phoneNumber}</span>
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '0.6rem' : '1rem',
                  padding: '0.6rem 0.8rem',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  borderRadius: '8px',
                  border: '1px solid rgba(196,154,108,0.25)'
                }}>
                  <span style={{ fontSize: isMobile ? '1.1rem' : '1.3rem' }}>✉️</span>
                  <span style={{ color: '#666', fontSize: isMobile ? '0.95rem' : '1rem' }}>info@almohmmed.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
