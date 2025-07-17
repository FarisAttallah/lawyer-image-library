import { useResponsiveFonts } from '../hooks/useResponsiveFonts'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import JusticeSection from '../components/JusticeSection'
import About from '../components/About'
import StatsSection from '../components/StatsSection'
import Services from '../components/Services'

export default function Home() {
  const { isMobile, fonts } = useResponsiveFonts()
  
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

      {/* Services Section */}
      <section style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0'
      }}>
        <Services isMobile={isMobile} fonts={fonts} />
      </section>

      {/* Justice Section */}
      <section style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0'
      }}>
        <JusticeSection isMobile={isMobile} fonts={fonts} />
      </section>
      
      {/* About Section */}
      <section style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0'
      }}>
        <About isMobile={isMobile} fonts={fonts} />
      </section>
      
      {/* Stats Section */}
      <section style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0'
      }}>
        <StatsSection isMobile={isMobile} fonts={fonts} />
      </section>
    </Layout>
  )
}
