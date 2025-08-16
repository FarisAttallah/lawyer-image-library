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
      phoneNumber: '+٦٦٩ ٠٥ ٣٢١ ٧٦٥٤'
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
          {/* Location Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: isMobile ? '1.5rem' : '2.5rem'
          }}>
            <div style={{
              fontSize: isMobile ? '3rem' : '4.5rem',
              marginBottom: '0rem',
              animation: 'bounce 2s infinite'
            }}>
              📍
            </div>
            <h3 style={{
              color: '#0c4b3b',
              fontSize: isMobile ? '1.4rem' : '2rem',
              marginBottom: isMobile ? '0.8rem' : '1rem',
              fontWeight: 'bold'
            }}>
              {t.officeLocation}
            </h3>
            <div style={{
              color: '#666',
              fontSize: isMobile ? '1rem' : '1.3rem',
              lineHeight: '1.6',
              marginBottom: isMobile ? '1.5rem' : '2.5rem',
              fontFamily: 'BeINBlack, Roboto, Arial, sans-serif'
            }}>
              {t.address.map((line, index) => (
                <div key={index} style={{ marginBottom: isMobile ? '0.5rem' : '0.8rem' }}>
                  {line}
                </div>
              ))}
            </div>
            
            {/* Contact Information */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '0.8rem' : '1.2rem',
              alignItems: 'center'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: isMobile ? '0.6rem' : '1rem',
                padding: isMobile ? '0.8rem 1.2rem' : '1rem 2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                border: '1px solid rgba(196, 154, 108, 0.3)'
              }}>
                <span style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>📞</span>
                <span style={{ 
                  color: '#666',
                  fontSize: isMobile ? '0.9rem' : '1.2rem',
                  fontWeight: 'bold',
                  fontFamily: language === 'ar' ? 'sans-serif' : 'BeINBlack, Roboto, Arial, sans-serif'
                }}>{t.phoneNumber}</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: isMobile ? '0.6rem' : '1rem',
                padding: isMobile ? '0.8rem 1.2rem' : '1rem 2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                border: '1px solid rgba(196, 154, 108, 0.3)',
                marginBottom: isMobile ? '0.5rem' : '1rem'
              }}>
                <span style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>✉️</span>
                <span style={{ 
                  color: '#666', 
                  fontSize: isMobile ? '0.9rem' : '1.2rem',
                  fontFamily: 'BeINBlack, Roboto, Arial, sans-serif'
                }}>info@almohmmed.com</span>
              </div>
            </div>
          </div>
          

          
          <style jsx>{`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
              }
              40% {
                transform: translateY(-10px);
              }
              60% {
                transform: translateY(-5px);
              }
            }
            @keyframes pulse {
              0%, 100% {
                transform: scale(1);
                opacity: 0.6;
              }
              50% {
                transform: scale(1.1);
                opacity: 0.8;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}
