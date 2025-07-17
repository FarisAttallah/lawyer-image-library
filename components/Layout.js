import Header from './Header'
import Footer from './Footer'
import { useResponsiveFonts } from '../hooks/useResponsiveFonts'

export default function Layout({ children }) {
  const { fontFamily } = useResponsiveFonts()
  
  return (
    <div style={{ 
      fontFamily,
      lineHeight: '1.6',
      position: 'relative',
      minHeight: '100vh',
      fontSize: '0.9rem' // Slightly smaller for English
    }}>
      {/* Fixed Transparent Header */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}>
        <Header transparent={true} />
      </div>

      <main style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
