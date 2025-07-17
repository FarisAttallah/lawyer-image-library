import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function JusticeSection({ isMobile, fonts }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem',
      backgroundColor: '#f8f9fa',
      backgroundImage: `
        linear-gradient(45deg, rgba(12, 75, 59, 0.02) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(12, 75, 59, 0.02) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(196, 154, 108, 0.02) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(196, 154, 108, 0.02) 75%)
      `,
      backgroundSize: '60px 60px',
      backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
      direction: language === 'ar' ? 'rtl' : 'ltr',
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Decorative Justice Scales Icon */}
        <div style={{
          position: 'absolute',
          top: isMobile ? '-1rem' : '-2rem',
          right: isMobile ? '1rem' : '2rem',
          fontSize: isMobile ? '3rem' : '4rem',
          color: 'rgba(196, 154, 108, 0.1)',
          zIndex: 1,
          transform: 'rotate(15deg)'
        }}>
          ⚖️
        </div>
        
        {/* Section Header with Theme */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '2rem' : '3rem',
          position: 'relative'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 2rem',
            backgroundColor: 'rgba(12, 75, 59, 0.1)',
            borderRadius: '25px',
            border: '2px solid rgba(196, 154, 108, 0.3)',
            marginBottom: '1rem'
          }}>
            <span style={{
              fontSize: isMobile ? '0.9rem' : '1rem',
              color: '#0c4b3b',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {language === 'ar' ? 'العدالة والخبرة' : 'Justice & Expertise'}
            </span>
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : (language === 'ar' ? '1fr 1fr' : '1fr 1fr'),
          gap: isMobile ? '2rem' : '4rem',
          alignItems: 'center',
          minHeight: isMobile ? 'auto' : '500px'
        }}>
          {/* Text Content */}
          <div style={{
            order: isMobile ? 1 : (language === 'ar' ? 2 : 1),
            padding: isMobile ? '1rem 0' : '2rem 0'
          }}>
            <h2 style={{
              fontSize: fonts.heroTitle,
              color: '#0c4b3b',
              marginBottom: '2rem',
              fontWeight: 'bold',
              lineHeight: '1.2',
              position: 'relative'
            }}>
              {/* Decorative line before title */}
              <div style={{
                position: 'absolute',
                top: '-1rem',
                left: language === 'ar' ? 'auto' : '0',
                right: language === 'ar' ? '0' : 'auto',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(90deg, #c49a6c, #226249)',
                borderRadius: '2px'
              }}></div>
              {language === 'ar' 
                ? 'العدالة والخبرة في خدمتكم' 
                : 'Justice & Experience at Your Service'
              }
            </h2>
            
            <div style={{
              fontSize: fonts.bodyLarge,
              lineHeight: '1.8',
              color: '#333',
              marginBottom: '2rem'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                {language === 'ar' 
                  ? 'نؤمن بأن العدالة ليست مجرد مفهوم، بل حق أساسي يستحقه كل فرد ومؤسسة. مع خبرة تتجاوز 13 عامًا في الساحة القانونية السعودية، نقدم لكم خدمات قانونية متميزة تجمع بين العلم والخبرة العملية.'
                  : 'We believe that justice is not just a concept, but a fundamental right that every individual and institution deserves. With over 13 years of experience in the Saudi legal arena, we provide you with distinguished legal services that combine knowledge and practical experience.'
                }
              </p>
              
              <p style={{ marginBottom: '2rem' }}>
                {language === 'ar' 
                  ? 'من القضايا البسيطة إلى المعاملات المعقدة، نضمن لكم تمثيلاً قانونياً قوياً ومؤثراً يحمي حقوقكم ويحقق مصالحكم بأعلى معايير المهنية والنزاهة.'
                  : 'From simple cases to complex transactions, we guarantee you strong and effective legal representation that protects your rights and achieves your interests with the highest standards of professionalism and integrity.'
                }
              </p>
            </div>
            
            {/* Key Points */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '1.5rem',
              marginBottom: '2.5rem'
            }}>
              <div style={{
                padding: '1.5rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                borderLeft: language === 'ar' ? 'none' : '4px solid #c49a6c',
                borderRight: language === 'ar' ? '4px solid #c49a6c' : 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Icon */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: language === 'ar' ? 'auto' : '1rem',
                  left: language === 'ar' ? '1rem' : 'auto',
                  fontSize: '2rem',
                  opacity: 0.2
                }}>
                  🎓
                </div>
                <h4 style={{ color: '#0c4b3b', marginBottom: '0.5rem', fontSize: fonts.cardTitle, position: 'relative', zIndex: 2 }}>
                  {language === 'ar' ? '13+ سنة خبرة' : '13+ Years Experience'}
                </h4>
                <p style={{ color: '#666', fontSize: fonts.body, position: 'relative', zIndex: 2 }}>
                  {language === 'ar' 
                    ? 'خبرة واسعة في جميع مجالات القانون السعودي'
                    : 'Extensive experience in all areas of Saudi law'
                  }
                </p>
              </div>
              
              <div style={{
                padding: '1.5rem',
                backgroundColor: 'white',
                borderRadius: '12px',
                borderLeft: language === 'ar' ? 'none' : '4px solid #226249',
                borderRight: language === 'ar' ? '4px solid #226249' : 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Icon */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: language === 'ar' ? 'auto' : '1rem',
                  left: language === 'ar' ? '1rem' : 'auto',
                  fontSize: '2rem',
                  opacity: 0.2
                }}>
                  🏆
                </div>
                <h4 style={{ color: '#0c4b3b', marginBottom: '0.5rem', fontSize: fonts.cardTitle, position: 'relative', zIndex: 2 }}>
                  {language === 'ar' ? '500+ قضية منجزة' : '500+ Cases Completed'}
                </h4>
                <p style={{ color: '#666', fontSize: fonts.body, position: 'relative', zIndex: 2 }}>
                  {language === 'ar' 
                    ? 'سجل حافل من القضايا الناجحة والعملاء الراضين'
                    : 'Proven track record of successful cases and satisfied clients'
                  }
                </p>
              </div>
            </div>
            
            {/* Call to Action */}
            <div style={{ position: 'relative' }}>
              <button style={{
                backgroundColor: '#c49a6c',
                color: 'white',
                border: 'none',
                padding: isMobile ? '1rem 1.5rem' : '1.2rem 2.5rem',
                fontSize: fonts.button,
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(196, 154, 108, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#a65c32'
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 20px rgba(196, 154, 108, 0.4)'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#c49a6c'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 12px rgba(196, 154, 108, 0.3)'
              }}>
                {/* Button icon */}
                <span style={{ marginRight: language === 'ar' ? '0' : '0.5rem', marginLeft: language === 'ar' ? '0.5rem' : '0' }}>
                  📞
                </span>
                {language === 'ar' ? 'احجز استشارتك القانونية' : 'Book Your Legal Consultation'}
              </button>
            </div>
          </div>
          
          {/* Image Content */}
          <div style={{
            order: isMobile ? 2 : (language === 'ar' ? 1 : 2),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: isMobile ? '400px' : '500px',
              height: isMobile ? '300px' : '400px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
              background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
            }}>
              {/* Legal themed border decoration */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '8px',
                background: 'linear-gradient(90deg, #c49a6c, #226249, #c49a6c)',
                zIndex: 2
              }}></div>
              
              <img 
                src="/images/judge_hammer.jpg" 
                alt={language === 'ar' ? 'صورة مطرقة القاضي - رمز العدالة' : 'Judge Hammer - Symbol of Justice'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'contrast(1.1) brightness(1.05)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)'
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)'
                }}
              />
              
              {/* Enhanced overlay with legal quote and decorative elements */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(12, 75, 59, 0.95))',
                padding: isMobile ? '1.5rem 1rem 1rem' : '2rem 1.5rem 1.5rem',
                color: 'white'
              }}>
                {/* Decorative quote marks */}
                <div style={{
                  fontSize: '2rem',
                  color: '#c49a6c',
                  textAlign: 'center',
                  marginBottom: '0.5rem',
                  opacity: 0.7
                }}>
                  ❝
                </div>
                <p style={{
                  fontSize: fonts.body,
                  fontStyle: 'italic',
                  textAlign: 'center',
                  margin: 0,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  fontWeight: '500'
                }}>
                  {language === 'ar' 
                    ? 'العدالة أساس الملك'
                    : 'Justice is the Foundation of Sovereignty'
                  }
                </p>
                <div style={{
                  fontSize: '2rem',
                  color: '#c49a6c',
                  textAlign: 'center',
                  marginTop: '0.5rem',
                  opacity: 0.7,
                  transform: 'rotate(180deg)'
                }}>
                  ❝
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
