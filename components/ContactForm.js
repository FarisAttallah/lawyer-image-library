import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function ContactForm({ fonts }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [isMobile, setIsMobile] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    commercialRegister: '',
    serviceType: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  // Check if screen is mobile size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])
  
  const services = [
    'استشارة قانونية عامة',
    'قضايا تجارية وشركات',
    'قضايا عمالية',
    'عقود واتفاقيات',
    'قضايا عقارية',
    'تحكيم ونزاعات',
    'امتثال وحوكمة',
    'أخرى'
  ]
  
  const servicesEn = [
    'General Legal Consultation',
    'Commercial & Corporate Cases',
    'Labor Law Cases',
    'Contracts & Agreements',
    'Real Estate Cases',
    'Arbitration & Disputes',
    'Compliance & Governance',
    'Other'
  ]
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.serviceType || !formData.subject || !formData.message) {
        setSubmitStatus('error')
        return
      }
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          commercialRegister: formData.commercialRegister,
          serviceType: formData.serviceType,
          subject: formData.subject,
          message: formData.message
        })
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          commercialRegister: '',
          serviceType: '',
          subject: '',
          message: ''
        })
      } else {
        const errorData = await response.json()
        console.error('API Error:', errorData)
        setSubmitStatus('error')
      }
      
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const inputStyle = {
    width: '100%',
    padding: isMobile ? '0.6rem' : '0.75rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    fontSize: isMobile ? '16px' : '1rem', // 16px prevents zoom on iOS
    transition: 'border-color 0.3s ease',
    direction: language === 'ar' ? 'rtl' : 'ltr'
  }
  
  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#284268',
    fontWeight: 'bold',
    fontSize: isMobile ? '0.9rem' : '1rem'
  }
  
  return (
    <div id="contactForm" style={{
      backgroundColor: 'white',
      padding: isMobile ? '1.5rem' : '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      height: 'fit-content',
      margin: isMobile ? '0 0.5rem' : '0',
      scrollMarginTop: '100px' // Adds space when scrolling to this element
    }}>
      <h2 style={{
        color: '#284268',
        fontSize: isMobile ? '1.5rem' : '2rem',
        marginBottom: '1rem',
        fontWeight: 'bold',
        textAlign: isMobile ? 'center' : (language === 'ar' ? 'right' : 'left')
      }}>
        {t.contactFormTitle}
      </h2>
      
      {submitStatus === 'success' && (
        <div style={{
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          border: '1px solid #c3e6cb'
        }}>
          ✅ {t.successMessage}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div style={{
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          border: '1px solid #f5c6cb'
        }}>
          ❌ {t.errorMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Name Field */}
        <div>
          <label style={labelStyle}>
            {t.fullName} <span style={{ color: '#dc3545' }}>†</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#FFFFFF'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          />
        </div>
        
        {/* Email Field */}
        <div>
          <label style={labelStyle}>
            {t.emailLabel} <span style={{ color: '#dc3545' }}>†</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#FFFFFF'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          />
        </div>
        
        {/* Phone Field */}
        <div>
          <label style={labelStyle}>
            {t.phoneLabel}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#FFFFFF'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          />
        </div>
        
        {/* Commercial Register Field */}
        <div>
          <label style={labelStyle}>
            {t.commercialRegister}
          </label>
          <input
            type="text"
            name="commercialRegister"
            value={formData.commercialRegister}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder={language === 'ar' ? 'رقم السجل التجاري' : 'Commercial Register Number'}
            onFocus={(e) => e.target.style.borderColor = '#FFFFFF'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          />
        </div>
        
        {/* Service Type */}
        <div>
          <label style={labelStyle}>
            {t.serviceType} <span style={{ color: '#dc3545' }}>†</span>
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            required
            style={{
              ...inputStyle,
              cursor: 'pointer'
            }}
            onFocus={(e) => e.target.style.borderColor = '#FFFFFF'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          >
            <option value="">{language === 'ar' ? 'اختر نوع الخدمة' : 'Select Service Type'}</option>
            {(language === 'ar' ? services : servicesEn).map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>
        
        {/* Subject Field */}
        <div>
          <label style={labelStyle}>
            {t.consultationSubject} <span style={{ color: '#dc3545' }}>†</span>
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#FFFFFF'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          />
        </div>
        
        {/* Message Field */}
        <div>
          <label style={labelStyle}>
            {t.consultationDetails} <span style={{ color: '#dc3545' }}>†</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            style={{
              ...inputStyle,
              resize: 'vertical',
              minHeight: '120px'
            }}
            onFocus={(e) => e.target.style.borderColor = '#FFFFFF'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          />
        </div>
        
        {/* Submit Button styled like Hero.js */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: isSubmitting ? '#6c757d' : '#FFFFFF',
            color: 'white',
            border: '2px solid transparent',
            padding: isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
            fontSize: isMobile ? '1rem' : '1.2rem',
            borderRadius: '8px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4), 0 0 0 0 rgba(255, 255, 255, 0.7)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '1rem',
            animation: !isSubmitting ? 'pulse 2s infinite' : 'none',
            outline: 'none',
          }}
          onMouseOver={(e) => {
            if (!isSubmitting) {
              e.target.style.backgroundColor = '#284268';
              e.target.style.borderColor = '#FFFFFF';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.6)';
            }
          }}
          onMouseOut={(e) => {
            if (!isSubmitting) {
              e.target.style.backgroundColor = '#FFFFFF';
              e.target.style.borderColor = 'transparent';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.4)';
            }
          }}
        >
          {isSubmitting ? t.submitting : t.submitMessage}
          <style>{`
            @keyframes pulse {
              0% {
                box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4), 0 0 0 0 rgba(255, 255, 255, 0.7);
              }
              70% {
                box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4), 0 0 0 10px rgba(255, 255, 255, 0);
              }
              100% {
                box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4), 0 0 0 0 rgba(255, 255, 255, 0);
              }
            }
          `}</style>
        </button>
      </form>
    </div>
  )
}
