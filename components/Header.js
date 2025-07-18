import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import LanguageToggle from './LanguageToggle'
import ImageLogo from './ImageLogo'
import BrandingIcon from './BrandingIcon'
import Logo from './Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header({ transparent = false }) {
  const { language } = useLanguage()
  const t = translations[language]
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  
  // Check if screen is mobile size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth > 768) {
        setIsMenuOpen(false) // Close menu when switching to desktop
      }
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Handle smooth scrolling to sections when navigating with hash
  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Also handle on initial load
    handleRouteChange();

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events])

  // Handle smooth scrolling for same-page navigation
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    
    // If we're on the same page, just scroll
    if (router.pathname === '/') {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate with hash
      router.push(`/${targetId}`);
    }
  }
  
  return (
    <header style={{ 
      backgroundColor: transparent ? 'rgba(12, 75, 59, 0.2)' : '#0c4b3b',
      backdropFilter: transparent ? 'blur(10px)' : 'none',
      WebkitBackdropFilter: transparent ? 'blur(10px)' : 'none',
      color: 'white', 
      paddingTop: '0', // No top padding - touches the screen
      paddingBottom: isMobile ? '0.5rem' : '0.5rem',
      paddingLeft: isMobile ? '1rem' : '2rem',
      paddingRight: isMobile ? '1rem' : '2rem',
      boxShadow: transparent ? '0 2px 20px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)',
      direction: language === 'ar' ? 'rtl' : 'ltr',
      position: transparent ? 'absolute' : 'fixed', // Absolute for transparent, fixed for other pages
      top: '0',
      left: '0',
      right: '0',
      zIndex: 1000,
      border: transparent ? '1px solid rgba(255,255,255,0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* Logo - centered */}
        <Link href="/" style={{ 
          textDecoration: 'none'
        }}>
          <ImageLogo size={isMobile ? 'small' : 'medium'} />
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <nav>
              <ul style={{ 
                display: 'flex', 
                listStyle: 'none', 
                margin: 0, 
                padding: 0, 
                gap: '2rem' 
              }}>
                <li>
                  <Link href="/" style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#c49a6c'}
                  onMouseOut={(e) => e.target.style.color = 'white'}>
                    {t.home}
                  </Link>
                </li>
                <li>
                  <Link href="/about" style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#c49a6c'}
                  onMouseOut={(e) => e.target.style.color = 'white'}>
                    {t.about}
                  </Link>
                </li>
                <li>
                  <Link href="/services" style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#c49a6c'}
                  onMouseOut={(e) => e.target.style.color = 'white'}>
                    {t.services}
                  </Link>
                </li>
                <li>
                  <Link href="/careers" style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#c49a6c'}
                  onMouseOut={(e) => e.target.style.color = 'white'}>
                    {language === 'ar' ? 'الوظائف' : 'Careers'}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#c49a6c'}
                  onMouseOut={(e) => e.target.style.color = 'white'}>
                    {t.contact}
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* For Arabic, icon is to the right of the button; for English, icon is to the left */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12rem', flexDirection: 'row', direction: 'ltr' }}>
              {language === 'ar' ? (
                <>
                  <BrandingIcon size="large" />
                  <LanguageToggle />
                </>
              ) : (
                <>
                  <LanguageToggle />
                  <BrandingIcon size="large" />
                </>
              )}
            </div>
          </div>
        )}
        
        {/* Mobile Menu Button and Language Toggle */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12rem' }}>
              {language === 'ar' ? (
                <>
                  <BrandingIcon size="large" />
                  <LanguageToggle />
                </>
              ) : (
                <>
                  <LanguageToggle />
                  <BrandingIcon size="large" />
                </>
              )}
            </div>
            
            {/* Hamburger Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '3px',
                width: '30px',
                height: '30px',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }} />
              <div style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                opacity: isMenuOpen ? 0 : 1
              }} />
              <div style={{
                width: '20px',
                height: '2px',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
              }} />
            </button>
          </div>
        )}
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobile && isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#0c4b3b',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          zIndex: 1000,
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}>
          <nav>
            <ul style={{ 
              listStyle: 'none', 
              margin: 0, 
              padding: '1rem 0',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <li>
                <Link 
                  href="/" 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    display: 'block',
                    padding: '0.7rem 2rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    transition: 'background-color 0.3s ease',
                    fontSize: '0.9rem'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(196, 154, 108, 0.2)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    display: 'block',
                    padding: '0.7rem 2rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    transition: 'background-color 0.3s ease',
                    fontSize: '0.9rem'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(196, 154, 108, 0.2)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    display: 'block',
                    padding: '0.7rem 2rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    transition: 'background-color 0.3s ease',
                    fontSize: '0.9rem'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(196, 154, 108, 0.2)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {t.services}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    display: 'block',
                    padding: '0.7rem 2rem',
                    transition: 'background-color 0.3s ease',
                    fontSize: '0.9rem'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(196, 154, 108, 0.2)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
