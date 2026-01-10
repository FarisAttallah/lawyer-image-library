import Header from './Header'
import Footer from './Footer'
import BrandingLoader from './BrandingLoader'
import { useResponsiveFonts } from '../hooks/useResponsiveFonts'

export default function Layout({ children }) {
  const { fontFamily } = useResponsiveFonts()
  
  return (
    <div style={{ 
      fontFamily,
      lineHeight: '1.6',
      position: 'relative',
      minHeight: '100vh',
      fontSize: '0.9rem',
      scrollBehavior: 'smooth'
    }}>
      
      {/* Header is now fixed positioned in the Header component itself */}
      <Header transparent={false} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
