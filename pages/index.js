import { useResponsiveFonts } from '../hooks/useResponsiveFonts'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'

export default function Home() {
  const { isMobile, fonts } = useResponsiveFonts()
  const { language } = useLanguage()
  const t = translations[language]
  
  return (
    <Layout>
      {/* Hero Section - Full Viewport */}
      <section style={{ 
        position: 'relative',
        height: '100vh',
        width: '100vw',
        margin: '0',
        padding: '0',
        overflow: 'hidden'
      }}>
        <Hero isMobile={isMobile} fonts={fonts} />
      </section>

      
      <div style={{ height: '0rem' }} />
    </Layout>
  )
}
