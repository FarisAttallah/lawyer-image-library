import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero({ isMobile, fonts }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideOffset, setSlideOffset] = useState(0)
  
  const slides = [
    {
      image: '/images/Riyadh_Tower_Ameen.png',
      title: t.welcome,
      subtitle: t.subtitle
    },
    {
      image: '/images/Hero_office.png',
      title: t.welcome,
      subtitle: t.subtitle
    },
    {
      image: '/images/Hero_office_nopeople.png',
      title: t.welcome,
      subtitle: t.subtitle
    }
  ]
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 5000) // Change slide every 5 seconds
    
    return () => clearInterval(interval)
  }, [currentSlide, isAnimating])
  
  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideOffset(prev => prev - 100) // Always move left
    setTimeout(() => {
      const nextIndex = (currentSlide + 1) % slides.length
      setCurrentSlide(nextIndex)
      setSlideOffset(0) // Reset offset after transition
      setIsAnimating(false)
    }, 800)
  }
  
  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSlideOffset(prev => prev + 100) // Move right temporarily for prev
    setTimeout(() => {
      const prevIndex = (currentSlide - 1 + slides.length) % slides.length
      setCurrentSlide(prevIndex)
      setSlideOffset(0) // Reset offset after transition
      setIsAnimating(false)
    }, 800)
  }
  
  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    // Always animate left regardless of target slide
    setSlideOffset(-100)
    setTimeout(() => {
      setCurrentSlide(index)
      setSlideOffset(0)
      setIsAnimating(false)
    }, 800)
  }
  
  // Create extended slides array for seamless infinite loop
  const getExtendedSlides = () => {
    return [
      slides[slides.length - 1], // Last slide at the beginning
      ...slides,
      slides[0] // First slide at the end
    ]
  }
  
  const extendedSlides = getExtendedSlides()
  const extendedCurrentSlide = currentSlide + 1 // Offset by 1 because we added one slide at the beginning
  
  return (
    <section style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      direction: language === 'ar' ? 'rtl' : 'ltr',
      zIndex: 1
    }}>
      {/* Background Images with sliding animation */}
      {extendedSlides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            imageRendering: '-webkit-optimize-contrast',
            WebkitFilter: 'contrast(1.2) brightness(0.85) saturate(1.1)',
            filter: 'contrast(1.2) brightness(0.85) saturate(1.1)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: `translateX(${((index - extendedCurrentSlide) * 100) + slideOffset}%)`,
            transition: isAnimating ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
            zIndex: index === extendedCurrentSlide ? 2 : 1
          }}
        />
      ))}
      
      {/* Enhanced multi-layer gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(
          135deg, 
          rgba(12, 75, 59, 0.6) 0%, 
          rgba(34, 98, 73, 0.4) 30%,
          rgba(0, 0, 0, 0.3) 70%,
          rgba(12, 75, 59, 0.7) 100%
        )`,
        zIndex: 5
      }} />
      
      {/* Cinematic vignette effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(34, 98, 73, 0.25) 100%)',
        zIndex: 6
      }} />
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        style={{
          position: 'absolute',
          left: isMobile ? '10px' : '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(196, 154, 108, 0.9)',
          border: 'none',
          borderRadius: '50%',
          width: isMobile ? '40px' : '50px',
          height: isMobile ? '40px' : '50px',
          color: 'white',
          fontSize: isMobile ? '18px' : '24px',
          cursor: isAnimating ? 'not-allowed' : 'pointer',
          zIndex: 15,
          transition: 'all 0.3s ease',
          opacity: isAnimating ? 0.5 : 1,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }}
        onMouseOver={(e) => {
          if (!isAnimating) {
            e.target.style.background = 'rgba(196, 154, 108, 1)'
            e.target.style.transform = 'translateY(-50%) scale(1.1)'
          }
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'rgba(196, 154, 108, 0.9)'
          e.target.style.transform = 'translateY(-50%) scale(1)'
        }}
      >
        ‹
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        style={{
          position: 'absolute',
          right: isMobile ? '10px' : '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(196, 154, 108, 0.9)',
          border: 'none',
          borderRadius: '50%',
          width: isMobile ? '40px' : '50px',
          height: isMobile ? '40px' : '50px',
          color: 'white',
          fontSize: isMobile ? '18px' : '24px',
          cursor: isAnimating ? 'not-allowed' : 'pointer',
          zIndex: 15,
          transition: 'all 0.3s ease',
          opacity: isAnimating ? 0.5 : 1,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }}
        onMouseOver={(e) => {
          if (!isAnimating) {
            e.target.style.background = 'rgba(196, 154, 108, 1)'
            e.target.style.transform = 'translateY(-50%) scale(1.1)'
          }
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'rgba(196, 154, 108, 0.9)'
          e.target.style.transform = 'translateY(-50%) scale(1)'
        }}
      >
        ›
      </button>
      
      {/* Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '20px' : '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 15
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            style={{
              width: isMobile ? '8px' : '10px',
              height: isMobile ? '8px' : '10px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentSlide ? '#c49a6c' : 'rgba(255, 255, 255, 0.5)',
              cursor: isAnimating ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              opacity: isAnimating ? 0.5 : 1
            }}
            onMouseOver={(e) => {
              if (!isAnimating && index !== currentSlide) {
                e.target.style.background = 'rgba(255, 255, 255, 0.8)'
              }
            }}
            onMouseOut={(e) => {
              if (index !== currentSlide) {
                e.target.style.background = 'rgba(255, 255, 255, 0.5)'
              }
            }}
          />
        ))}
      </div>
      
      {/* Animated floating elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '3px',
        height: '100px',
        background: 'linear-gradient(to bottom, transparent, #c49a6c, transparent)',
        opacity: 0.6,
        animation: 'float 3s ease-in-out infinite',
        zIndex: 5
      }} />
      <div style={{
        position: 'absolute',
        bottom: '25%',
        left: '15%',
        width: '2px',
        height: '80px',
        background: 'linear-gradient(to bottom, transparent, #c49a6c, transparent)',
        opacity: 0.4,
        animation: 'float 4s ease-in-out infinite reverse',
        zIndex: 5
      }} />
      
      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: isMobile ? '2rem 1.5rem' : '4rem 2rem',
        maxWidth: '1100px',
        color: 'white',
        textAlign: 'center',
        animation: 'fadeInUp 1.2s ease-out',
        width: '100%'
      }}>
        <h2 style={{ 
          color: 'white',
          fontSize: fonts.heroTitle,
          marginBottom: '1.5rem',
          textShadow: '4px 4px 12px rgba(0,0,0,0.9), 0 0 30px rgba(196, 154, 108, 0.3)',
          fontWeight: language === 'ar' ? '250' : 'bold',
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          position: 'relative'
        }}>
          {slides[currentSlide].title}
        </h2>
        <p style={{ 
          color: '#f8f9fa', 
          fontSize: fonts.heroSubtitle,
          lineHeight: '1.7',
          textShadow: '3px 3px 8px rgba(0,0,0,0.9)',
          marginBottom: '2.5rem',
          maxWidth: '700px',
          margin: '0 auto 2.5rem auto',
          fontWeight: '300',
          opacity: '0.95'
        }}>
          {slides[currentSlide].subtitle}
        </p>
        
        {/* Enhanced call to action button with pulse effect */}
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#c49a6c',
            color: 'white',
            border: '2px solid transparent',
            padding: isMobile ? '1rem 2rem' : '1.2rem 2.5rem',
            fontSize: fonts.heroButton,
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontFamily: 'BeINBlack, Roboto, Arial, sans-serif',
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 20px rgba(196, 154, 108, 0.4), 0 0 0 0 rgba(196, 154, 108, 0.7)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            position: 'relative',
            overflow: 'hidden',
            animation: 'pulse 2s infinite'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#a65c32'
            e.target.style.borderColor = '#c49a6c'
            e.target.style.color = 'white'
            e.target.style.transform = 'translateY(-3px)'
            e.target.style.boxShadow = '0 8px 25px rgba(196, 154, 108, 0.6)'
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#c49a6c'
            e.target.style.borderColor = 'transparent'
            e.target.style.color = 'white'
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 6px 20px rgba(196, 154, 108, 0.4)'
          }}>
            {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
          </button>
        </Link>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 6px 20px rgba(196, 154, 108, 0.4), 0 0 0 0 rgba(196, 154, 108, 0.7);
          }
          70% {
            box-shadow: 0 6px 20px rgba(196, 154, 108, 0.4), 0 0 0 10px rgba(196, 154, 108, 0);
          }
          100% {
            box-shadow: 0 6px 20px rgba(196, 154, 108, 0.4), 0 0 0 0 rgba(196, 154, 108, 0);
          }
        }
        
        section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(196, 154, 108, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(34, 98, 73, 0.1) 0%, transparent 50%);
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
    </section>
  )
}
