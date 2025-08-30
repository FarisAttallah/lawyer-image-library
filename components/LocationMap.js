import { useLanguage } from '../contexts/LanguageContext'
import { useResponsiveFonts } from '../hooks/useResponsiveFonts'

export default function LocationMap() {
  const { language } = useLanguage()
  const { isMobile } = useResponsiveFonts()
  
  const locationTexts = {
    ar: {
      title: 'تفضل بزيارتنا في مكتبنا بالرياض',
      address: [
        'الأمير محمد بن سعود بن عبدالعزيز',
        'العليا، الرياض 12331',
        'المملكة العربية السعودية'
      ],
      directions: 'احصل على الاتجاهات',
      officeLocation: 'موقع المكتب',
      exactAddress: 'الرياض - المملكة العربية السعودية',
      district: 'الرمز البريدي ١٢٣٣١ الرقم الاضافي ٦٥٨٣',
      phoneNumber: '+966 55 905 5731',
      officePhoneNumber: '+966 11 494 4110',
    },
    en: {
      title: 'Visit us at our office in Riyadh',
      address: [
        'Prince Mohammed bin Saud bin Abdulaziz',
        'Al Olaya, Riyadh 12331',
        'Saudi Arabia'
      ],
      directions: 'Get Directions',
      officeLocation: 'Office Location',
      exactAddress: 'Riyadh - Saudi Arabia',
      district: 'Postal Code 12331 Additional Number 6583',
      phoneNumber: '+966 55 905 5731',
      officePhoneNumber: '+966 11 494 4110',
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
                  border: '1px solid rgba(196,154,108,0.25)',
                  // Force LTR flow so the icon stays at the physical left in Arabic
                  direction: language === 'ar' ? 'ltr' : 'ltr'
                }}>
                  <span style={{ fontSize: isMobile ? '1.1rem' : '1.3rem' }}>📞</span>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    fontSize: isMobile ? '0.95rem' : '1rem', 
                    fontWeight: 'bold', 
                    color: '#666',
                    textAlign: language === 'ar' ? 'right' : 'left'
                  }}>
                    <span>
                      <span dir="ltr" style={{ unicodeBidi: 'isolate', display: 'inline-block' }}>{t.phoneNumber}</span>
                    </span>
                    <span>
                      <span dir="ltr" style={{ unicodeBidi: 'isolate', display: 'inline-block' }}>{t.officePhoneNumber}</span>
                    </span>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '0.6rem' : '1rem',
                  padding: '0.6rem 0.8rem',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  borderRadius: '8px',
                  border: '1px solid rgba(196,154,108,0.25)',
                  direction: language === 'ar' ? 'ltr' : 'ltr'
                }}>
                  <span style={{ fontSize: isMobile ? '1.1rem' : '1.3rem' }}>✉️</span>
                  <span style={{ 
                    color: '#666', 
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    textAlign: language === 'ar' ? 'right' : 'left',
                    direction: 'ltr',
                    unicodeBidi: 'isolate'
                  }}>info@almohmmed.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
