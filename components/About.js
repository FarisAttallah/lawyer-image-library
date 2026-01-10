import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function About({ isMobile, fonts }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem',
      backgroundColor: 'white',
      direction: language === 'ar' ? 'rtl' : 'ltr',
      display: 'flex',
      alignItems: 'center',
      overflow: 'auto'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* About Us */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 
          className="services-title"
          style={{
            color: '#284268',
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            {t.aboutTitle}
          </h2>
          <br/>
          <p 
          className="service-card-title"
          style={{
            
            fontSize: fonts.bodyLarge,
            lineHeight: '1.8',
            color: '#414042',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            marginBottom: '1.5rem'
          }}>
            {t.aboutDescription1}
          </p>
          <p 
          className="service-card-title"
          style={{
            
            fontSize: fonts.bodyLarge,
            lineHeight: '1.8',
            color: '#414042',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            marginBottom: '1.5rem'
          }}>
            {t.aboutDescription2}
          </p>
          <p 
          className="service-card-title"
          style={{
            
            fontSize: fonts.bodyLarge,
            lineHeight: '1.8',
            color: '#414042',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            marginBottom: '3rem'
          }}>
            {t.aboutDescription3}
          </p>
        </div>

        {/* Vision, Mission, Values Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '7rem'
        }}>
          {/* Vision */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '12px',
            border: '2px solid #FFFFFF',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h3 
            className="service-card-title"
            style={{
              color: '#284268',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              {t.visionTitle}
            </h3>
            <p style={{
              fontSize: fonts.body,
              lineHeight: '1.7',
              color: '#555'
            }}>
              {t.vision}
            </p>
          </div>

          {/* Mission */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '12px',
            border: '2px solid #284268',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h3
            className="service-card-title"
            style={{
              color: '#284268',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              {t.missionTitle}
            </h3>
            <p
            className="service-card-description"
            style={{
              lineHeight: '1.7',
              color: '#555'
            }}>
              {t.mission}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div style={{ marginBottom: '7rem' }}>
          <h3 
          className="services-title"
          style={{
            color: '#284268',
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            {t.valuesTitle}
          </h3>
          <div style={{
            marginTop: isMobile ? '2rem' : '3rem',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}>
            {[
              {
                title: t.transparency,
                description: t.transparencyDesc,
                borderColor: '#FFFFFF'
              },
              {
                title: t.confidentiality,
                description: t.confidentialityDesc,
                borderColor: '#284268'
              },
              {
                title: t.professionalism,
                description: t.professionalismDesc,
                borderColor: '#284268'
              },
              {
                title: t.justice,
                description: t.justiceDesc,
                borderColor: '#FFFFFF'
              },
              {
                title: t.development,
                description: t.developmentDesc,
                borderColor: '#284268'
              }
            ].map((card, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderLeft: language === 'ar' ? 'none' : `4px solid ${card.borderColor}`,
                borderRight: language === 'ar' ? `4px solid ${card.borderColor}` : 'none'
              }}>
                <h4 
                className="service-card-title"
                style={{ color: '#284268', marginBottom: '0.5rem' }}>
                  {card.title}
                </h4>
                <p 
                className="service-card-description"
                style={{ color: '#666', lineHeight: '1.6'}}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}
