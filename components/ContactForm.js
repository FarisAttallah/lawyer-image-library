import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function ContactForm() {
  const { language } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    legalService: ''
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
  
  const formTexts = {
    ar: {
      title: 'أرسل لنا رسالة',
      subtitle: 'نحن نقدر تواصلكم ونسعى للرد عليكم في أقرب وقت ممكن',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      subject: 'موضوع الاستشارة',
      legalService: 'نوع الخدمة القانونية',
      message: 'تفاصيل الاستشارة أو القضية',
      submit: 'إرسال الرسالة',
      submitting: 'جاري الإرسال...',
      successMessage: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
      errorMessage: 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.',
      required: 'مطلوب',
      selectService: 'اختر نوع الخدمة',
      services: [
        'استشارة قانونية عامة',
        'قضايا تجارية وشركات',
        'قضايا عمالية',
        'عقود واتفاقيات',
        'قضايا عقارية',
        'تحكيم ونزاعات',
        'امتثال وحوكمة',
        'أخرى'
      ]
    },
    en: {
      title: 'Send Us a Message',
      subtitle: 'We value your communication and strive to respond as soon as possible',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Consultation Subject',
      legalService: 'Type of Legal Service',
      message: 'Consultation Details or Case Information',
      submit: 'Send Message',
      submitting: 'Sending...',
      successMessage: 'Your message has been sent successfully! We will contact you soon.',
      errorMessage: 'An error occurred while sending the message. Please try again.',
      required: 'Required',
      selectService: 'Select Service Type',
      services: [
        'General Legal Consultation',
        'Commercial & Corporate Cases',
        'Labor Law Cases',
        'Contracts & Agreements',
        'Real Estate Cases',
        'Arbitration & Disputes',
        'Compliance & Governance',
        'Other'
      ]
    }
  }
  
  const t = formTexts[language]
  
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
      // Here you can implement the email sending logic
      // For now, we'll simulate a successful submission
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // TODO: Replace this with actual email sending logic
      // You can use services like EmailJS, Formspree, or your own backend API
      console.log('Form Data to be sent:', formData)
      
      // For demonstration, we'll show success
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        legalService: ''
      })
      
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
    fontFamily: language === 'ar' ? 'BeINBlack, Arial, sans-serif' : 'Roboto, sans-serif',
    transition: 'border-color 0.3s ease',
    direction: language === 'ar' ? 'rtl' : 'ltr'
  }
  
  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#0c4b3b',
    fontWeight: 'bold',
    fontSize: isMobile ? '0.9rem' : '1rem'
  }
  
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
        marginBottom: '1rem',
        fontWeight: 'bold',
        textAlign: isMobile ? 'center' : 'left'
      }}>
        {t.title}
      </h2>
      
      <p style={{
        color: '#666',
        marginBottom: '2rem',
        lineHeight: '1.6',
        fontSize: isMobile ? '0.9rem' : '1rem',
        textAlign: isMobile ? 'center' : 'left'
      }}>
        {t.subtitle}
      </p>
      
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
            {t.name} <span style={{ color: '#dc3545', fontFamily: 'Arial, sans-serif' }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#c49a6c'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          />
        </div>
        
        {/* Email Field */}
        <div>
          <label style={labelStyle}>
            {t.email} <span style={{ color: '#dc3545', fontFamily: 'Arial, sans-serif' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#c49a6c'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          />
        </div>
        
        {/* Phone Field */}
        <div>
          <label style={labelStyle}>
            {t.phone}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#c49a6c'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          />
        </div>
        
        {/* Legal Service Type */}
        <div>
          <label style={labelStyle}>
            {t.legalService} <span style={{ color: '#dc3545', fontFamily: 'Arial, sans-serif' }}>*</span>
          </label>
          <select
            name="legalService"
            value={formData.legalService}
            onChange={handleInputChange}
            required
            style={{
              ...inputStyle,
              cursor: 'pointer'
            }}
            onFocus={(e) => e.target.style.borderColor = '#c49a6c'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          >
            <option value="">{t.selectService}</option>
            {t.services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>
        
        {/* Subject Field */}
        <div>
          <label style={labelStyle}>
            {t.subject} <span style={{ color: '#dc3545', fontFamily: 'Arial, sans-serif' }}>*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#c49a6c'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          />
        </div>
        
        {/* Message Field */}
        <div>
          <label style={labelStyle}>
            {t.message} <span style={{ color: '#dc3545', fontFamily: 'Arial, sans-serif' }}>*</span>
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
            onFocus={(e) => e.target.style.borderColor = '#c49a6c'}
            onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
          />
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: isSubmitting ? '#6c757d' : '#c49a6c',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '1rem'
          }}
          onMouseOver={(e) => {
            if (!isSubmitting) {
              e.target.style.backgroundColor = '#a65c32'
              e.target.style.transform = 'translateY(-2px)'
            }
          }}
          onMouseOut={(e) => {
            if (!isSubmitting) {
              e.target.style.backgroundColor = '#c49a6c'
              e.target.style.transform = 'translateY(0)'
            }
          }}
        >
          {isSubmitting ? t.submitting : t.submit}
        </button>
      </form>
    </div>
  )
}
