import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function Career({ isMobile, fonts }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <div style={{
      width: '100%',
      padding: isMobile ? '3rem 1rem' : '5rem 2rem',
      background: `
        linear-gradient(135deg, #f8f9fa 0%, #ffffff 30%, #f0f4f8 70%, #e8f4f8 100%),
        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(40, 66, 104, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(40, 66, 104, 0.04) 0%, transparent 50%)
      `,
      direction: language === 'ar' ? 'rtl' : 'ltr',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated geometric background elements */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '3%',
        width: '120px',
        height: '120px',
        background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        borderRadius: '20px',
        transform: 'rotate(45deg)',
        animation: 'float 6s ease-in-out infinite',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, rgba(40, 66, 104, 0.08), rgba(40, 66, 104, 0.03))',
        borderRadius: '50%',
        animation: 'pulse 4s ease-in-out infinite',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '15%',
        width: '60px',
        height: '60px',
        background: 'linear-gradient(90deg, rgba(40, 66, 104, 0.06), rgba(40, 66, 104, 0.02))',
        borderRadius: '12px',
        transform: 'rotate(-15deg)',
        animation: 'spin 8s linear infinite',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '25%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'linear-gradient(225deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02))',
        borderRadius: '50% 20px 50% 20px',
        animation: 'bounce 5s ease-in-out infinite',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        top: '70%',
        left: '50%',
        width: '40px',
        height: '40px',
        background: 'linear-gradient(315deg, rgba(40, 66, 104, 0.05), rgba(40, 66, 104, 0.01))',
        borderRadius: '8px',
        transform: 'rotate(30deg)',
        animation: 'slide 7s ease-in-out infinite',
        zIndex: 1
      }} />
      
      {/* Animated wave effect */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        height: '100%',
        background: `
          linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.02) 25%, transparent 50%, rgba(40, 66, 104, 0.02) 75%, transparent 100%)
        `,
        animation: 'wave 10s ease-in-out infinite',
        zIndex: 1
      }} />
              <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
        {/* Section Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: fonts.sectionTitle,
            color: '#284268',
            fontWeight: language === 'ar' ? '400' : 'bold',
            marginBottom: '1rem',
            position: 'relative'
          }}>
            {t.careerTitle}
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #FFFFFF, #284268)',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Experience Section */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 15px 40px rgba(0,0,0,0.12), 0 5px 15px rgba(0,0,0,0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h3 style={{
              fontSize: fonts.subsectionTitle,
              color: '#284268',
              marginBottom: '2rem',
              fontWeight: language === 'ar' ? '400' : 'bold',
              textAlign: language === 'ar' ? 'right' : 'left',
              position: 'relative',
              zIndex: 2
            }}>
              {language === 'ar' ? 'الخبرات المهنية' : 'Professional Experience'}
            </h3>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '2rem',
              position: 'relative',
              zIndex: 2
            }}>
              {/* Experience Item 1 */}
              <div style={{
                borderLeft: language === 'ar' ? 'none' : '4px solid #FFFFFF',
                borderRight: language === 'ar' ? '4px solid #FFFFFF' : 'none',
                paddingLeft: language === 'ar' ? '0' : '1.5rem',
                paddingRight: language === 'ar' ? '1.5rem' : '0',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: fonts.body,
                  color: '#414042',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {t.experience1}
                </div>
                <div style={{
                  fontSize: fonts.body,
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {language === 'ar' ? 'أكتوبر 2024 - ' : 'October 2024 - '}{t.currentPosition}
                </div>
              </div>

              {/* Experience Item 2 */}
              <div style={{
                borderLeft: language === 'ar' ? 'none' : '4px solid #FFFFFF',
                borderRight: language === 'ar' ? '4px solid #FFFFFF' : 'none',
                paddingLeft: language === 'ar' ? '0' : '1.5rem',
                paddingRight: language === 'ar' ? '1.5rem' : '0'
              }}>
                <div style={{
                  fontSize: fonts.body,
                  color: '#414042',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {t.experience2}
                </div>
                <div style={{
                  fontSize: fonts.body,
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {language === 'ar' ? 'سبتمبر 2023 - ' : 'September 2023 - '}{t.currentPosition}
                </div>
              </div>

              {/* Experience Item 3 */}
              <div style={{
                borderLeft: language === 'ar' ? 'none' : '4px solid #FFFFFF',
                borderRight: language === 'ar' ? '4px solid #FFFFFF' : 'none',
                paddingLeft: language === 'ar' ? '0' : '1.5rem',
                paddingRight: language === 'ar' ? '1.5rem' : '0'
              }}>
                <div style={{
                  fontSize: fonts.body,
                  color: '#414042',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {t.experience3}
                </div>
                <div style={{
                  fontSize: fonts.body,
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {language === 'ar' ? 'مايو 2018 - ' : 'May 2018 - '}{t.currentPosition}
                </div>
              </div>

              {/* Experience Item 4 */}
              <div style={{
                borderLeft: language === 'ar' ? 'none' : '4px solid #FFFFFF',
                borderRight: language === 'ar' ? '4px solid #FFFFFF' : 'none',
                paddingLeft: language === 'ar' ? '0' : '1.5rem',
                paddingRight: language === 'ar' ? '1.5rem' : '0'
              }}>
                <div style={{
                  fontSize: fonts.body,
                  color: '#414042',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {t.experience4}
                </div>
                <div style={{
                  fontSize: fonts.body,
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {language === 'ar' ? 'مارس 2012 - نوفمبر 2014' : 'March 2012 - November 2014'}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 15px 40px rgba(0,0,0,0.12), 0 5px 15px rgba(0,0,0,0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h3 style={{
              fontSize: fonts.subsectionTitle,
              color: '#284268',
              marginBottom: '2rem',
              fontWeight: language === 'ar' ? '400' : 'bold',
              textAlign: language === 'ar' ? 'right' : 'left',
              position: 'relative',
              zIndex: 2
            }}>
              {t.educationTitle}
            </h3>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '2rem',
              position: 'relative',
              zIndex: 2
            }}>
              {/* Education Item 1 */}
              <div style={{
                borderLeft: language === 'ar' ? 'none' : '4px solid #284268',
                borderRight: language === 'ar' ? '4px solid #284268' : 'none',
                paddingLeft: language === 'ar' ? '0' : '1.5rem',
                paddingRight: language === 'ar' ? '1.5rem' : '0'
              }}>
                <div style={{
                  fontSize: fonts.body,
                  color: '#414042',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {t.education1Degree}
                </div>
                <div style={{
                  fontSize: fonts.body,
                  color: '#666',
                  marginBottom: '0.3rem'
                }}>
                  {t.education1Level}
                </div>
                <div style={{
                  fontSize: fonts.body,
                  color: '#414042',
                  marginBottom: '0.3rem'
                }}>
                  {t.education1Institution}
                </div>
                <div style={{
                  fontSize: fonts.body,
                  color: '#FFFFFF',
                  fontWeight: 'bold'
                }}>
                  {language === 'ar' ? 'يوليو 2008 - نوفمبر 2011' : 'July 2008 - November 2011'}
                </div>
              </div>

              {/* Education Item 2 */}
              <div style={{
                borderLeft: language === 'ar' ? 'none' : '4px solid #284268',
                borderRight: language === 'ar' ? '4px solid #284268' : 'none',
                paddingLeft: language === 'ar' ? '0' : '1.5rem',
                paddingRight: language === 'ar' ? '1.5rem' : '0'
              }}>
                <div style={{
                  fontSize: fonts.body,
                  color: '#414042',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {t.education2Degree}
                </div>
                <div style={{
                  fontSize: fonts.body,
                  color: '#666',
                  marginBottom: '0.3rem'
                }}>
                  {t.education2Level}
                </div>
                <div style={{
                  fontSize: fonts.body,
                  color: '#414042',
                  marginBottom: '0.3rem'
                }}>
                  {t.education2Institution}
                </div>
                <div style={{
                  fontSize: fonts.body,
                  color: '#FFFFFF',
                  fontWeight: 'bold'
                }}>
                  {language === 'ar' ? 'مايو 2004 - أبريل 2008' : 'May 2004 - April 2008'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: rotate(45deg) translateY(0px); }
          50% { transform: rotate(45deg) translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        @keyframes spin {
          0% { transform: rotate(-15deg); }
          100% { transform: rotate(345deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes slide {
          0%, 100% { transform: rotate(30deg) translateX(0px); }
          50% { transform: rotate(30deg) translateX(20px); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
} 
