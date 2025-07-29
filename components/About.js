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
            color: '#0c4b3b',
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
            color: '#333',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            marginBottom: '3rem'
          }}>
            {t.aboutDescription}
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
            border: '2px solid #c49a6c',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h3 
            className="service-card-title"
            style={{
              color: '#0c4b3b',
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
            border: '2px solid #226249',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h3
            className="service-card-title"
            style={{
              color: '#0c4b3b',
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
            color: '#0c4b3b',
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
                borderColor: '#c49a6c'
              },
              {
                title: t.confidentiality,
                description: t.confidentialityDesc,
                borderColor: '#226249'
              },
              {
                title: t.professionalism,
                description: t.professionalismDesc,
                borderColor: '#a65c32'
              },
              {
                title: t.justice,
                description: t.justiceDesc,
                borderColor: '#c49a6c'
              },
              {
                title: t.development,
                description: t.developmentDesc,
                borderColor: '#226249'
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
                style={{ color: '#0c4b3b', marginBottom: '0.5rem' }}>
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

        {/* Team Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 
          className="services-title"
          style={{
            color: '#0c4b3b',
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            {t.teamTitle}
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Team Content */}
            <div style={{
              order: isMobile ? 2 : (language === 'ar' ? 2 : 1)
            }}>
              <p 
              className="service-card-title"
              style={{
                fontSize: fonts.bodyLarge,
                lineHeight: '1.8',
                color: '#333',
                marginBottom: '1.5rem',
                fontWeight: 'bold'
              }}>
                {t.teamDescription}
              </p>
              <p 
              className="service-card-description"
              style={{
                fontSize: fonts.body,
                lineHeight: '1.7',
                color: '#555',
                marginBottom: '1.5rem'
              }}>
                {t.teamDetails}
              </p>
              <p 
              className="service-card-description"
              style={{
                fontSize: fonts.body,
                lineHeight: '1.7',
                color: '#555'
              }}>
                {t.teamApproach}
              </p>
            </div>

            {/* Team Image */}
            <div style={{
              order: isMobile ? 1 : (language === 'ar' ? 1 : 2),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                maxWidth: '500px',
                width: '100%'
              }}>
                <img 
                  src="/images/collab.png" 
                  alt={language === 'ar' ? 'فريق العمل' : 'Our Team'}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover'
                  }}
                />
                {/* Subtle overlay */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: 'linear-gradient(135deg, rgba(196, 154, 108, 0.1) 0%, transparent 40%, rgba(12, 75, 59, 0.1) 100%)',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
