import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function ContactInfo({ fonts }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if screen is mobile size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])
  
  const contactData = {
    ar: {
      title: 'معلومات التواصل',
      firmName: 'مكتب حسين بن أحمد آل محمد للمحاماة والاستشارات القانونية',
      address: [
        'الرياض - المملكة العربية السعودية',
        'الرمز البريدي ١٢٣٣١ الرقم الاضافي ٦٥٨٣'
      ],
      experience: 'خبرة قانونية تتجاوز ١٣ عاما من التميز والثقة',
      phone: 'الهاتف',
      phoneNumber: '+966 50 123 4567',
      email: 'البريد الإلكتروني',
      emailAddress: 'info@almohmmed.com',
      workingHours: 'ساعات العمل',
      workingHoursDetails: 'الأحد - الخميس: ٨:٠٠ ص - ٦:٠٠ م',
      officeHours: 'السبت: ٩:٠٠ ص - ٢:٠٠ م',
      emergencyContact: 'للحالات الطارئة',
      emergencyNote: 'متاح على مدار الساعة للاستشارات العاجلة',
      specializations: 'تخصصاتنا',
      specializationsList: [
        'الاستشارات القانونية',
        'التقاضي والترافع',
        'القانون التجاري والشركات',
        'القانون العمالي',
        'العقود والاتفاقيات',
        'القضايا العقارية',
        'التحكيم وتسوية النزاعات',
        'الامتثال والحوكمة'
      ]
    },
    en: {
      title: 'Contact Information',
      firmName: 'Hussein Ahmed Almohmmed Law Firm & Legal Consultations',
      address: [
        'Riyadh - Saudi Arabia',
        'Postal Code 12331 Additional Number 6583'
      ],
      experience: 'Legal expertise spanning over 13 years of excellence and trust',
      phone: 'Phone',
      phoneNumber: '+966 50 123 4567',
      email: 'Email',
      emailAddress: 'info@almohmmed.com',
      workingHours: 'Working Hours',
      workingHoursDetails: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
      officeHours: 'Saturday: 9:00 AM - 2:00 PM',
      emergencyContact: 'Emergency Contact',
      emergencyNote: 'Available 24/7 for urgent consultations',
      specializations: 'Our Specializations',
      specializationsList: [
        'Legal Consultations',
        'Litigation & Advocacy',
        'Commercial Law & Corporate',
        'Labor Law',
        'Contracts & Agreements',
        'Real Estate Cases',
        'Arbitration & Dispute Resolution',
        'Compliance & Governance'
      ]
    }
  }
  
  const content = contactData[language]
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '600px',
      padding: isMobile ? '1rem' : '2rem 1rem'
    }}>
      {/* Main Heading */}
      <h2 
      
      style={{
        color: '#0c4b3b',
        fontSize: isMobile ? '1.6rem' : '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '1rem',
        animation: 'slideInFromTop 1s ease-out'
      }}>
        {language === 'ar' ? 'استشارتك القانونية تبدأ من هنا' : 'Your Legal Consultation Starts Here'}
      </h2>
      
      {/* Main Contact Image */}
      <div style={{
        position: 'relative',
        width: isMobile ? '100%' : '100%',
        maxWidth: isMobile ? '400px' : '800px',
        height: isMobile ? '250px' : '600px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        marginBottom: '2rem',
        margin: '0 auto 2rem auto'
      }}>
        {/* Legal themed border decoration */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '8px',
          zIndex: 2
        }}></div>
        
        <img 
          src="images/team_2.png" 
          alt="Contact Us - Hussein Almohmmed Law Firm"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'contrast(1.1) brightness(1.05)',
            transition: 'transform 0.3s ease',
            transform: 'scale(1)' // Fill container by default
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.05)'
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)'
          }}
        />
        
        {/* Enhanced overlay with contact message */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(transparent, rgba(12, 75, 59, 0.95))',
          padding: isMobile ? '1.5rem 1rem 1rem' : '2rem 1.5rem 1.5rem',
          color: 'white'
        }}>
          
        </div>
      </div>
      
      {/* Supporting Text */}
      <p style={{
        color: '#666',
        fontSize: fonts.body,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: '1.5rem',
        maxWidth: '100%',
        lineHeight: '1.6',
        animation: 'slideInFromTop 1s ease-out 0.3s both'
      }}>
        {language === 'ar' 
          ? 'خبرة قانونية تتجاوز ١٣ عاما في خدمتك'
          : 'Over 13 years of legal expertise at your service'
        }
      </p>
      
      <style jsx>{`
        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
