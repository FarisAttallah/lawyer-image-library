import { useLanguage } from '../contexts/LanguageContext'

export default function Logo({ size = 'medium' }) {
  const { language } = useLanguage()
  
  // Size configurations
  const sizes = {
    small: {
      width: '140px',
      height: '80px',
      nameFont: language === 'ar' ? '0.9rem' : '0.8rem',
      subtitleFont: language === 'ar' ? '0.65rem' : '0.55rem',
      padding: '0.5rem',
      iconSize: '16px'
    },
    medium: {
      width: '170px',
      height: '95px',
      nameFont: language === 'ar' ? '1.1rem' : '0.95rem',
      subtitleFont: language === 'ar' ? '0.75rem' : '0.65rem',
      padding: '0.7rem',
      iconSize: '20px'
    },
    large: {
      width: '200px',
      height: '110px',
      nameFont: language === 'ar' ? '1.3rem' : '1.1rem',
      subtitleFont: language === 'ar' ? '0.85rem' : '0.7rem',
      padding: '0.9rem',
      iconSize: '24px'
    }
  }
  
  const currentSize = sizes[size]
  
  return (
    <div style={{
      width: currentSize.width,
      height: currentSize.height,
      background: 'linear-gradient(135deg, #226249 0%, #2a7353 50%, #1e5a42 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: currentSize.padding,
      borderRadius: '8px',
      boxShadow: '0 4px 16px rgba(34, 98, 73, 0.3)',
      border: '2px solid rgba(196, 154, 108, 0.4)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative corner accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '30px',
        height: '30px',
        background: 'linear-gradient(135deg, #c49a6c, #a65c32)',
        clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        opacity: 0.8
      }} />
      
      {/* Decorative line under names */}
      <div style={{
        position: 'absolute',
        bottom: currentSize.padding,
        left: currentSize.padding,
        right: currentSize.padding,
        height: '2px',
        background: 'linear-gradient(90deg, #c49a6c, transparent)',
        marginTop: '4px'
      }} />
      
      {/* Justice scale icon */}
      <div style={{
        position: 'absolute',
        top: '8px',
        left: '8px',
        width: currentSize.iconSize,
        height: currentSize.iconSize,
        color: '#c49a6c',
        opacity: 0.7,
        fontSize: currentSize.iconSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        ⚖️
      </div>
      
      {/* Main content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '8px',
        marginLeft: language === 'ar' ? '0' : '12px' // Add left margin for English to avoid icon overlap
      }}>
        {/* Hussein & Almohmmed in stylized format */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '6px'
        }}>
          <div style={{
            color: 'white',
            fontSize: currentSize.nameFont,
            fontWeight: '700',
            fontFamily: 'Roboto, Arial, sans-serif',
            letterSpacing: '0.5px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            lineHeight: '1.1'
          }}>
            {language === 'ar' ? 'حسين آل محمد' : 'HUSSEIN'}
          </div>
          <div style={{
            color: '#c49a6c',
            fontSize: currentSize.nameFont,
            fontWeight: '700',
            fontFamily: 'Roboto, Arial, sans-serif',
            letterSpacing: '0.5px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            lineHeight: '1.1',
            marginTop: '-2px'
          }}>
            {language === 'ar' ? '' : 'Almohmmed'}
          </div>
        </div>
        
        {/* Law & Legal Consultations with professional styling */}
        <div style={{
          color: 'white',
          fontSize: currentSize.subtitleFont,
          fontWeight: '400',
          fontFamily: 'Roboto, Arial, sans-serif',
          opacity: 0.95,
          letterSpacing: '0.3px',
          textTransform: 'uppercase',
          lineHeight: '1.2'
        }}>
          {language === 'ar' ? 'المحاماة والاستشارات القانونية' : 'LAW & LEGAL CONSULTATIONS'}
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '3px',
        background: 'linear-gradient(90deg, #c49a6c 0%, #a65c32 50%, transparent 100%)'
      }} />
    </div>
  )
}
