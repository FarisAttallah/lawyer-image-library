import { useLanguage } from '../contexts/LanguageContext'

export default function LocationMap() {
  const { language } = useLanguage()
  
  const locationTexts = {
    ar: {
      title: 'موقعنا',
      subtitle: 'تفضل بزيارتنا في مكتبنا بالرياض',
      address: [
        'الرياض - المملكة العربية السعودية',
        'الرمز البريدي ١٢٣٣١ الرقم الاضافي ٦٥٨٣'
      ],
      directions: 'احصل على الاتجاهات',
      officeLocation: 'موقع المكتب',
      exactAddress: 'الرياض - المملكة العربية السعودية',
      district: 'الرمز البريدي ١٢٣٣١ الرقم الاضافي ٦٥٨٣',
      phoneNumber: '+٩٦٦ ٥٠ ١٢٣ ٤٥٦٧'
    },
    en: {
      title: 'Our Location',
      subtitle: 'Visit us at our office in Riyadh',
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
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      marginTop: '2rem'
    }}>
      <h2 style={{
        color: '#0c4b3b',
        fontSize: '2rem',
        marginBottom: '1rem',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        {t.title}
      </h2>
      
      <p style={{
        color: '#666',
        fontSize: '1.2rem',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        {t.subtitle}
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: language === 'ar' ? '1fr 2fr' : '2fr 1fr',
        gap: '2rem',
        alignItems: 'start'
      }}>
        {/* Google Maps Embed */}
        <div style={{
          width: '100%',
          height: '400px',
          border: '2px solid #c49a6c',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          order: language === 'ar' ? 2 : 1,
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
        }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6158337779886!2d46.6725!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sKing%20Fahd%20Rd%2C%20Al%20Olaya%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1642000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{
              border: 0,
              borderRadius: '10px'
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hussein Ahmed Al Mohammed Law Firm Location"
          />
          
          {/* Map overlay with office info */}
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            maxWidth: '250px',
            border: '2px solid #c49a6c'
          }}>
            <h4 style={{
              color: '#0c4b3b',
              fontSize: '1rem',
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              📍 {t.officeLocation}
            </h4>
            <p style={{
              color: '#666',
              fontSize: '0.85rem',
              lineHeight: '1.4',
              marginBottom: '0.5rem'
            }}>
              {t.exactAddress}
            </p>
            <p style={{
              color: '#666',
              fontSize: '0.8rem'
            }}>
              {t.district}
            </p>
          </div>
          
          {/* Directions button */}
          <a 
            href="https://maps.google.com/?q=King+Fahd+Road,+Al+Olaya+District,+Riyadh,+Saudi+Arabia"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              backgroundColor: '#c49a6c',
              color: 'white',
              padding: '0.7rem 1.2rem',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              border: '2px solid white'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#a65c32'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#c49a6c'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            🗺️ {t.directions}
          </a>
        </div>
        
        {/* Location Information */}
        <div style={{
          order: language === 'ar' ? 1 : 2
        }}>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '8px'
          }}>
            <h3 style={{
              color: '#0c4b3b',
              fontSize: '1.3rem',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              📍 {t.officeLocation}
            </h3>
            <div style={{
              color: '#666',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '1rem',
              fontFamily: language === 'ar' ? 'Tahoma, Arial, sans-serif' : 'inherit'
            }}>
              {t.address.map((line, index) => (
                <div key={index} style={{ marginBottom: '0.25rem' }}>
                  {line}
                </div>
              ))}
            </div>
            
            {/* Contact Quick Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📞</span>
                <span style={{ 
                  color: '#666',
                  fontFamily: language === 'ar' ? 'Tahoma, Arial, sans-serif' : 'inherit'
                }}>{t.phoneNumber}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✉️</span>
                <span style={{ color: '#666' }}>info@almohmmed.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
