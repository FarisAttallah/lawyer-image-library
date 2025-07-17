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
        backgroundColor: '#c49a6c',
        color: 'white',
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
        e.target.style.backgroundColor = '#a65c32'
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = '#c49a6c'
      }}
    >
      {language === 'ar' ? 'English' : 'العربية'}
    </button>
  )
}
