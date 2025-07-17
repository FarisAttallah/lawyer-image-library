import { useLanguage } from '../contexts/LanguageContext'

export default function LocationMap() {
  const { language } = useLanguage()
  
  const locationTexts = {
    ar: {
      title: 'موقعنا',
      subtitle: 'تفضل بزيارتنا في مكتبنا بالرياض',
      address: 'طريق الملك فهد، حي العليا، الرياض 12211، المملكة العربية السعودية',
      directions: 'احصل على الاتجاهات',
      mapPlaceholder: 'خريطة موقع المكتب',
      officeLocation: 'موقع المكتب',
      nearbyLandmarks: 'المعالم القريبة',
      parkingInfo: 'مواقف مجانية متاحة',
      publicTransport: 'يمكن الوصول بوسائل النقل العام',
      exactAddress: 'طريق الملك فهد، حي العليا',
      district: 'حي العليا',
      landmarks: [
        'مركز الملك عبد العزيز التاريخي',
        'برج المملكة',
        'مركز التجارة العالمي',
        'مجمع الفيصلية'
      ]
    },
    en: {
      title: 'Our Location',
      subtitle: 'Visit us at our office in Riyadh',
      address: 'King Fahd Road, Al Olaya District, Riyadh 12211, Saudi Arabia',
      directions: 'Get Directions',
      mapPlaceholder: 'Office Location Map',
      officeLocation: 'Office Location',
      nearbyLandmarks: 'Nearby Landmarks',
      parkingInfo: 'Free parking available',
      publicTransport: 'Accessible by public transport',
      exactAddress: 'King Fahd Road, Al Olaya District',
      district: 'Al Olaya District',
      landmarks: [
        'King Abdulaziz Historical Center',
        'Kingdom Tower',
        'World Trade Center',
        'Al Faisaliah Complex'
      ]
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
            borderRadius: '8px',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{
              color: '#0c4b3b',
              fontSize: '1.3rem',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              📍 {t.officeLocation}
            </h3>
            <p style={{
              color: '#666',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              {t.address}
            </p>
            
            {/* Contact Quick Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>📞</span>
                <span style={{ color: '#666' }}>+966 50 123 4567</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✉️</span>
                <span style={{ color: '#666' }}>info@husseinallaw.com</span>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{
              padding: '1rem',
              backgroundColor: '#e8f5e8',
              borderRadius: '8px',
              border: '1px solid #c3e6cb'
            }}>
              <h4 style={{
                color: '#0c4b3b',
                fontSize: '1rem',
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>
                🚗 {language === 'ar' ? 'مواقف السيارات' : 'Parking'}
              </h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                {t.parkingInfo}
              </p>
            </div>
            
            <div style={{
              padding: '1rem',
              backgroundColor: '#e7f3ff',
              borderRadius: '8px',
              border: '1px solid #b8daff'
            }}>
              <h4 style={{
                color: '#0c4b3b',
                fontSize: '1rem',
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>
                🚌 {language === 'ar' ? 'النقل العام' : 'Public Transport'}
              </h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                {t.publicTransport}
              </p>
            </div>
            
            <div style={{
              padding: '1rem',
              backgroundColor: '#fff3cd',
              borderRadius: '8px',
              border: '1px solid #ffeaa7'
            }}>
              <h4 style={{
                color: '#0c4b3b',
                fontSize: '1rem',
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>
                🏢 {t.nearbyLandmarks}
              </h4>
              <div style={{ color: '#666', fontSize: '0.9rem' }}>
                {t.landmarks.map((landmark, index) => (
                  <div key={index} style={{ marginBottom: '0.3rem' }}>
                    • {landmark}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
