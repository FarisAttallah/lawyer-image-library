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
          <h2 style={{
            fontSize: fonts.sectionTitle,
            color: '#0c4b3b',
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            {t.aboutTitle}
          </h2>
          <p style={{
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
          marginBottom: '4rem'
        }}>
          {/* Vision */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: isMobile ? '1.5rem' : '2rem',
            borderRadius: '12px',
            border: '2px solid #c49a6c',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              fontSize: fonts.subsectionTitle,
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
            <h3 style={{
              fontSize: fonts.subsectionTitle,
              color: '#0c4b3b',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              {t.missionTitle}
            </h3>
            <p style={{
              fontSize: fonts.body,
              lineHeight: '1.7',
              color: '#555'
            }}>
              {t.mission}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{
            fontSize: fonts.sectionSubtitle,
            color: '#0c4b3b',
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            {t.valuesTitle}
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Transparency */}
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: language === 'ar' ? 'none' : '4px solid #c49a6c',
              borderRight: language === 'ar' ? '4px solid #c49a6c' : 'none'
            }}>
              <h4 style={{ color: '#0c4b3b', marginBottom: '0.5rem', fontSize: fonts.cardTitle }}>
                {t.transparency}
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: fonts.body }}>
                {t.transparencyDesc}
              </p>
            </div>

            {/* Confidentiality */}
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: language === 'ar' ? 'none' : '4px solid #226249',
              borderRight: language === 'ar' ? '4px solid #226249' : 'none'
            }}>
              <h4 style={{ color: '#0c4b3b', marginBottom: '0.5rem', fontSize: fonts.cardTitle }}>
                {t.confidentiality}
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: fonts.body }}>
                {t.confidentialityDesc}
              </p>
            </div>

            {/* Professionalism */}
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: language === 'ar' ? 'none' : '4px solid #a65c32',
              borderRight: language === 'ar' ? '4px solid #a65c32' : 'none'
            }}>
              <h4 style={{ color: '#0c4b3b', marginBottom: '0.5rem', fontSize: fonts.cardTitle }}>
                {t.professionalism}
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: fonts.body }}>
                {t.professionalismDesc}
              </p>
            </div>

            {/* Justice */}
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: language === 'ar' ? 'none' : '4px solid #c49a6c',
              borderRight: language === 'ar' ? '4px solid #c49a6c' : 'none'
            }}>
              <h4 style={{ color: '#0c4b3b', marginBottom: '0.5rem', fontSize: fonts.cardTitle }}>
                {t.justice}
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: fonts.body }}>
                {t.justiceDesc}
              </p>
            </div>

            {/* Development */}
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: language === 'ar' ? 'none' : '4px solid #226249',
              borderRight: language === 'ar' ? '4px solid #226249' : 'none'
            }}>
              <h4 style={{ color: '#0c4b3b', marginBottom: '0.5rem', fontSize: fonts.cardTitle }}>
                {t.development}
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: fonts.body }}>
                {t.developmentDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Lawyer Quote Section */}
        <div style={{
          backgroundColor: 'linear-gradient(135deg, #0c4b3b 0%, #226249 100%)',
          background: 'linear-gradient(135deg, #0c4b3b 0%, #226249 100%)',
          padding: isMobile ? '2rem 1.5rem' : '3rem 2rem',
          borderRadius: '12px',
          color: 'white',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
        }}>
          <h3 style={{
            fontSize: fonts.subsectionTitle,
            marginBottom: '1.5rem',
            color: '#c49a6c',
            fontWeight: 'bold'
          }}>
            {t.lawyerQuoteTitle}
          </h3>
          <blockquote style={{
            fontSize: fonts.bodyLarge,
            lineHeight: '1.8',
            fontStyle: 'italic',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative'
          }}>
            "{t.lawyerQuote}"
          </blockquote>
        </div>
      </div>
    </div>
  )
}
