import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Career from '../components/Career'
import LawyerProfile from '../components/LawyerProfile'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { useResponsiveFonts } from '../hooks/useResponsiveFonts'

export default function FounderPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isMobile, setIsMobile] = useState(false)
  const { fontFamily, fonts } = useResponsiveFonts()

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
    <div style={{
      fontFamily,
      lineHeight: '1.6',
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa'
    }}>

      {/* Normal Header with Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}>
        <Header transparent={false} />
      </div>

      <main style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        {/* Lawyer Profile Section */}
        <section style={{ 
          padding: '4rem 0'
        }}>
          <LawyerProfile isMobile={isMobile} fonts={fonts} />
        </section>

        {/* Career/Experience Section */}
        <Career isMobile={isMobile} fonts={fonts} />
      </main>

      <Footer />
    </div>
  )
}