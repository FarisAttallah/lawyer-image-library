import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function Services({ isMobile, fonts }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  const services = [
    {
      title: t.legalConsultation,
      description: t.legalConsultationDesc,
      color: '#c49a6c'
    },
    {
      title: t.litigation,
      description: t.litigationDesc,
      color: '#c49a6c'
    },
    {
      title: t.commercialLaw,
      description: t.commercialLawDesc,
      color: '#c49a6c'
    },
    {
      title: t.laborLaw,
      description: t.laborLawDesc,
      color: '#c49a6c'
    },
    {
      title: t.contracts,
      description: t.contractsDesc,
      color: '#c49a6c'
    },
    {
      title: t.realEstate,
      description: t.realEstateDesc,
      color: '#c49a6c'
    },
    {
      title: t.arbitration,
      description: t.arbitrationDesc,
      color: '#c49a6c'
    },
    {
      title: t.compliance,
      description: t.complianceDesc,
      color: '#c49a6c'
    }
  ]
  
  return (
    <div style={{ 
      width: '100%',
      height: '100%',
      padding: isMobile ? '2rem 2rem' : '6rem 4rem',
      background: 'linear-gradient(135deg, #0c4b3b 0%, #226249 100%)',
      direction: language === 'ar' ? 'rtl' : 'ltr',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(196, 154, 108, 0.1)',
        zIndex: 1
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(196, 154, 108, 0.05)',
        zIndex: 1
      }}></div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '2.5rem' : '4rem'
        }}>
          
          
          <h2 
            className="services-title"
            style={{
              color: 'white',
              marginBottom: '1rem',
              textAlign: 'center',
              fontWeight: language === 'ar' ? '400' : 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.2',
              fontFamily: language === 'ar' ? 'BeINBlack, Arial, sans-serif' : 'Roboto, Arial, sans-serif'
            }}
          >
            {t.servicesTitle}
          </h2>
          
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #c49a6c, rgba(196, 154, 108, 0.5))',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>
        
        <div style={{
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', 
          gridTemplateRows: isMobile ? 'auto' : 'repeat(2, 1fr)',
          gap: isMobile ? '1.5rem' : '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white', 
              padding: isMobile ? '2rem 1.5rem' : '2.5rem 2rem', 
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              border: `3px solid ${service.color}`,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)'
              e.currentTarget.style.borderColor = '#c49a6c'
              // Animate the bottom indicator
              const indicator = e.currentTarget.querySelector('.hover-indicator')
              if (indicator) indicator.style.transform = 'scaleX(1)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)'
              e.currentTarget.style.borderColor = service.color
              // Reset the bottom indicator
              const indicator = e.currentTarget.querySelector('.hover-indicator')
              if (indicator) indicator.style.transform = 'scaleX(0)'
            }}>
              {/* Decorative corner element */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '60px',
                height: '60px',
                background: `linear-gradient(135deg, ${service.color}, transparent)`,
                opacity: 0.1
              }}></div>
              
              {/* Service icon based on index */}
              <div style={{
                fontSize: isMobile ? '2rem' : '2.5rem',
                marginBottom: isMobile ? '0.5rem' : '1rem',
                textAlign: 'center',
                color: '#3b3b3b',
                fontWeight: 'bold'
              }}>
                {index === 0 && '◉'} {/* Legal Consultation */}
                {index === 1 && '⚖'} {/* Litigation */}
                {index === 2 && '▣'} {/* Commercial Law */}
                {index === 3 && '◈'} {/* Labor Law */}
                {index === 4 && '⬒'} {/* Contracts */}
                {index === 5 && '⬢'} {/* Real Estate */}
                {index === 6 && '◊'} {/* Arbitration */}
                {index === 7 && '✓'} {/* Compliance */}
              </div>
              
              <h3 
                className="service-card-title"
                style={{ 
                  color: service.color, 
                  marginBottom: isMobile ? '0.5rem' : '1rem',
                  fontWeight: language === 'ar' ? '400' : 'bold',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {service.title}
              </h3>
              
              {/* Decorative line under title */}
              <div style={{
                width: '30px',
                height: '2px',
                background: `linear-gradient(90deg, ${service.color}, transparent)`,
                margin: isMobile ? '0 auto 0.5rem' : '0 auto 1rem',
                borderRadius: '2px'
              }}></div>
              
              <p 
                className="service-card-description"
                style={{ 
                  color: '#555',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 2,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: isMobile ? 3 : 4,
                  WebkitBoxOrient: 'vertical'
                }}
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
              
              {/* Hover indicator */}
              <div className="hover-indicator" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: `linear-gradient(90deg, ${service.color}, #c49a6c)`,
                transform: 'scaleX(0)',
                transition: 'transform 0.3s ease',
                transformOrigin: 'left'
              }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
