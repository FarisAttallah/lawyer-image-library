import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function ContactInfo() {
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
      firmName: 'مكتب حسين أحمد آل محمد للمحاماة والاستشارات القانونية',
      address: [
        'طريق الملك فهد',
        'حي العليا',
        'الرياض ١٢٢١١',
        'المملكة العربية السعودية'
      ],
      experience: 'خبرة قانونية تتجاوز ١٣ عامًا من التميز والثقة',
      phone: 'الهاتف',
      phoneNumber: '+٩٦٦ ٥٠ ١٢٣ ٤٥٦٧',
      email: 'البريد الإلكتروني',
      emailAddress: 'info@husseinallaw.com',
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
      firmName: 'Hussein Ahmed Al Mohammed Law Firm & Legal Consultations',
      address: [
        'King Fahd Road',
        'Al Olaya District',
        'Riyadh 12211',
        'Saudi Arabia'
      ],
      experience: 'Legal expertise spanning over 13 years of excellence and trust',
      phone: 'Phone',
      phoneNumber: '+966 50 123 4567',
      email: 'Email',
      emailAddress: 'info@husseinallaw.com',
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
      backgroundColor: 'white',
      padding: isMobile ? '1.5rem' : '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      height: 'fit-content',
      margin: isMobile ? '0 0.5rem' : '0'
    }}>
      <h2 style={{
        color: '#0c4b3b',
        fontSize: isMobile ? '1.5rem' : '2rem',
        marginBottom: '1.5rem',
        fontWeight: 'bold',
        textAlign: isMobile ? 'center' : 'left'
      }}>
        {content.title}
      </h2>
      
      {/* Firm Name & Experience */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{
          color: '#226249',
          fontSize: isMobile ? '1.1rem' : '1.4rem',
          marginBottom: '0.5rem',
          fontWeight: 'bold',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          {content.firmName}
        </h3>
        <p style={{
          color: '#c49a6c',
          fontSize: isMobile ? '0.9rem' : '1.1rem',
          fontWeight: '500',
          marginBottom: '0.5rem',
          textAlign: isMobile ? 'center' : 'left',
          fontFamily: language === 'ar' ? 'Tahoma, Arial, sans-serif' : 'inherit'
        }}>
          {content.experience}
        </p>
        <div style={{
          color: '#666',
          fontSize: isMobile ? '0.85rem' : '1rem',
          textAlign: isMobile ? 'center' : 'left',
          fontFamily: language === 'ar' ? 'Tahoma, Arial, sans-serif' : 'inherit'
        }}>
          {content.address.map((line, index) => (
            <div key={index} style={{ marginBottom: '0.25rem' }}>
              {line}
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact Details */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{
            color: '#0c4b3b',
            fontSize: '1.1rem',
            marginBottom: '0.5rem',
            fontWeight: 'bold'
          }}>
            📞 {content.phone}
          </h4>
          <p style={{ 
            color: '#666', 
            fontSize: '1rem', 
            marginLeft: language === 'ar' ? '0' : '1.5rem', 
            marginRight: language === 'ar' ? '1.5rem' : '0',
            fontFamily: language === 'ar' ? 'Tahoma, Arial, sans-serif' : 'inherit'
          }}>
            {content.phoneNumber}
          </p>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{
            color: '#0c4b3b',
            fontSize: '1.1rem',
            marginBottom: '0.5rem',
            fontWeight: 'bold'
          }}>
            ✉️ {content.email}
          </h4>
          <p style={{ color: '#666', fontSize: '1rem', marginLeft: language === 'ar' ? '0' : '1.5rem', marginRight: language === 'ar' ? '1.5rem' : '0' }}>
            {content.emailAddress}
          </p>
        </div>
      </div>
      
      {/* Working Hours */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{
          color: '#0c4b3b',
          fontSize: '1.1rem',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          🕒 {content.workingHours}
        </h4>
        <div style={{ marginLeft: language === 'ar' ? '0' : '1.5rem', marginRight: language === 'ar' ? '1.5rem' : '0' }}>
          <p style={{ 
            color: '#666', 
            fontSize: '1rem', 
            marginBottom: '0.5rem',
            fontFamily: language === 'ar' ? 'Tahoma, Arial, sans-serif' : 'inherit'
          }}>
            {content.workingHoursDetails}
          </p>
          <p style={{ 
            color: '#666', 
            fontSize: '1rem', 
            marginBottom: '1rem',
            fontFamily: language === 'ar' ? 'Tahoma, Arial, sans-serif' : 'inherit'
          }}>
            {content.officeHours}
          </p>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '1rem',
            borderRadius: '8px',
            borderLeft: language === 'ar' ? 'none' : '4px solid #c49a6c',
            borderRight: language === 'ar' ? '4px solid #c49a6c' : 'none'
          }}>
            <p style={{ color: '#0c4b3b', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              🚨 {content.emergencyContact}
            </p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
              {content.emergencyNote}
            </p>
          </div>
        </div>
      </div>
      
      {/* Specializations */}
      <div>
        <h4 style={{
          color: '#0c4b3b',
          fontSize: '1.1rem',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          ⚖️ {content.specializations}
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '0.5rem',
          marginLeft: language === 'ar' ? '0' : '1.5rem',
          marginRight: language === 'ar' ? '1.5rem' : '0'
        }}>
          {content.specializationsList.map((item, index) => (
            <div key={index} style={{
              padding: '0.5rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '6px',
              border: '1px solid #e9ecef'
            }}>
              <span style={{ color: '#666', fontSize: '0.95rem' }}>• {item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
