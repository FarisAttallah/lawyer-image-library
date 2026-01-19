import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
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
  
  return (
    <button
      onClick={toggleLanguage}
      style={{
        backgroundColor: '#FFFFFF',
        color: '#284268',
        border: 'none',
        padding: isMobile ? '0.4rem 0.6rem' : '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: isMobile ? '0.7rem' : '0.9rem',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        minWidth: isMobile ? '70px' : '80px',
        textAlign: 'center'
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = '#284268'
        e.target.style.color = '#FFFFFF'
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = '#FFFFFF'
        e.target.style.color = '#284268'
      }}
    >
      {language === 'ar' ? 'English' : 'العربية'}
    </button>
  )
}
