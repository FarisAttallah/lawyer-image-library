import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import Link from 'next/link'

export default function Hero({ isMobile, fonts }) {
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <section style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundImage: 'url(/images/Riyadh_Tower_Ameen.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      direction: language === 'ar' ? 'rtl' : 'ltr',
      imageRendering: '-webkit-optimize-contrast',
      WebkitFilter: 'contrast(1.2) brightness(0.85) saturate(1.1)',
      filter: 'contrast(1.2) brightness(0.85) saturate(1.1)',
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      zIndex: 1
    }}>
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
        zIndex: 1
      }} />
      
      {/* Cinematic vignette effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(34, 98, 73, 0.25) 100%)',
        zIndex: 2
      }} />
      
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
        zIndex: 1
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
        zIndex: 1
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
          {t.welcome}
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
          {t.subtitle}
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
            fontWeight: language === 'ar' ? '400' : 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 20px rgba(196, 154, 108, 0.4), 0 0 0 0 rgba(196, 154, 108, 0.7)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            position: 'relative',
            overflow: 'hidden',
            animation: 'pulse 2s infinite'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'transparent'
            e.target.style.borderColor = '#c49a6c'
            e.target.style.color = '#c49a6c'
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
