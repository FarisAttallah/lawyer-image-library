import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export function useResponsiveFonts() {
  const [isMobile, setIsMobile] = useState(false)
  const { language } = useLanguage()
  
  // Font family based on language
  const fontFamily = language === 'ar' ? 'BeINBlack, Arial, sans-serif' : 'Roboto, Arial, sans-serif'
  
  // Size multiplier for English (making it slightly smaller)
  const englishSizeMultiplier = language === 'en' ? 0.9 : 1
  
  // Check if screen is mobile size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])
  
  // CENTRALIZED FONT SIZES - MODIFY THESE TO CHANGE ALL MOBILE FONTS
  const baseFontSizes = {
    // Hero Section
    heroTitle: isMobile ? '2.2rem' : '3.5rem',
    heroSubtitle: isMobile ? '1.1rem' : '1.4rem',
    heroButton: isMobile ? '1rem' : '1.2rem',
    
    // Section Titles
    sectionTitle: isMobile ? '2rem' : '3.5rem',
    sectionSubtitle: isMobile ? '1.2rem' : '1.5rem',
    subsectionTitle: isMobile ? '1.4rem' : '1.8rem',
    
    // Content Text
    heading1: isMobile ? '2rem' : '2.8rem',
    heading2: isMobile ? '1.6rem' : '2.2rem',
    heading3: isMobile ? '1.3rem' : '1.8rem',
    heading4: isMobile ? '1.1rem' : '1.4rem',
    
    // Body Text
    bodyLarge: isMobile ? '1rem' : '1.3rem',
    body: isMobile ? '0.9rem' : '1.1rem',
    bodyRegular: isMobile ? '0.9rem' : '1rem',
    bodySmall: isMobile ? '0.8rem' : '0.9rem',
    
    // Stats
    statNumber: isMobile ? '2.2rem' : '3rem',
    statLabel: isMobile ? '1rem' : '1.2rem',
    statsNumber: isMobile ? '2.5rem' : '3.5rem',
    statsLabel: isMobile ? '0.9rem' : '1.1rem',
    
    // Services & Cards
    serviceTitle: isMobile ? '1.3rem' : '1.6rem',
    serviceDescription: isMobile ? '0.9rem' : '1.05rem',
    cardTitle: isMobile ? '1.1rem' : '1.3rem',
    cardDescription: isMobile ? '0.85rem' : '1rem',
    
    // Buttons
    button: isMobile ? '0.9rem' : '1.1rem',
    buttonLarge: isMobile ? '1rem' : '1.2rem',
    
    // Navigation
    navLink: isMobile ? '0.9rem' : '1rem',
    navMobile: '0.9rem',
    navDesktop: '1rem',
    headerTitle: isMobile ? '1.3rem' : '1.5rem',
    
    // Forms
    formLabel: isMobile ? '0.9rem' : '1rem',
    formInput: isMobile ? '16px' : '1rem', // 16px prevents zoom on iOS
    
    // Justice/About sections
    justiceTitle: isMobile ? '1.8rem' : '2.3rem',
    justiceText: isMobile ? '0.95rem' : '1.1rem',
    
    // Footer
    footerTitle: isMobile ? '1.1rem' : '1.3rem',
    footerText: isMobile ? '0.8rem' : '0.9rem'
  }
  
  // Apply English size multiplier to all sizes
  const fontSizes = {}
  Object.keys(baseFontSizes).forEach(key => {
    const baseSize = baseFontSizes[key]
    if (typeof baseSize === 'string' && baseSize.includes('rem')) {
      const numValue = parseFloat(baseSize)
      const adjustedSize = numValue * englishSizeMultiplier
      fontSizes[key] = adjustedSize + 'rem'
    } else {
      fontSizes[key] = baseSize // Keep non-rem values as is (like px values)
    }
  })

  return {
    isMobile,
    fonts: fontSizes,
    fontFamily
  }
}
