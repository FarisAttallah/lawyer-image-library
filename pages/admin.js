
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import JobPostingsAdmin from '../components/JobPostingsAdmin'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { useResponsiveFonts } from '../hooks/useResponsiveFonts'

export default function Admin() {
  const { language } = useLanguage()
  const t = translations[language]
  const isArabic = language === 'ar'
  const { fontFamily } = useResponsiveFonts()
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [setupMode, setSetupMode] = useState(false)
  const [loading, setLoading] = useState(true)
  // Responsive hero layout (match services.js)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768)
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // On mount, check if admin credentials exist in localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const adminData = localStorage.getItem('adminCredentials')
      if (!adminData) {
        setSetupMode(true)
        setLoading(false)
        return
      }
      // Check for session
      const session = localStorage.getItem('adminSession')
      if (session) {
        try {
          const { token, timestamp } = JSON.parse(session)
          const now = Date.now()
          // 30 minutes = 1800000 ms
          if (token && timestamp && now - timestamp < 1800000) {
            setAuthenticated(true)
            setLoading(false)
            return
          } else {
            localStorage.removeItem('adminSession')
          }
        } catch {}
      }
      setLoading(false)
    }
  }, [])



  // Handle admin setup
  const handleSetup = (e) => {
    e.preventDefault()
    if (!username || !password || !email) {
      setError('All fields are required')
      return
    }
    // Save credentials (insecure, for demo only)
    localStorage.setItem('adminCredentials', JSON.stringify({ username, password, email }))
    setSetupMode(false)
    setError('')
  }

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault()
    const adminData = localStorage.getItem('adminCredentials')
    if (!adminData) {
      setError('No admin account found. Please refresh.')
      return
    }
    const { username: storedUser, password: storedPass } = JSON.parse(adminData)
    if (username === storedUser && password === storedPass) {
      setAuthenticated(true)
      setError('')
      // Set session for 30 minutes
      const session = {
        token: Math.random().toString(36).substr(2),
        timestamp: Date.now()
      }
      localStorage.setItem('adminSession', JSON.stringify(session))
    } else {
      setError('Incorrect username or password')
    }
  }

  if (loading) return null

  // If authenticated, refresh session timestamp on any render
  if (authenticated && typeof window !== 'undefined') {
    const session = localStorage.getItem('adminSession')
    if (session) {
      try {
        const parsed = JSON.parse(session)
        parsed.timestamp = Date.now()
        localStorage.setItem('adminSession', JSON.stringify(parsed))
      } catch {}
    }
  }

  // Setup and login screens (centered, as before)
  if (setupMode) {
    return (
      <div style={{ minHeight: '100vh', background: '#284268' }}>
        <Header transparent={false} />
        <div style={{ marginTop: '4rem' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
          <form onSubmit={handleSetup} style={{
            background: 'white',
            padding: '2.5rem 2rem',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(12,75,59,0.18)',
            minWidth: '340px',
            maxWidth: '95vw',
            border: '2px solid #FFFFFF',
          }}>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#284268', fontWeight: 700, letterSpacing: '0.5px' }}>Admin Setup</h2>
            <input
              type="text"
              placeholder="Create username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '8px', border: '1.5px solid #FFFFFF', fontSize: '1rem', outline: 'none', background: '#f9fafb' }}
            />
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '8px', border: '1.5px solid #FFFFFF', fontSize: '1rem', outline: 'none', background: '#f9fafb' }}
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '8px', border: '1.5px solid #FFFFFF', fontSize: '1rem', outline: 'none', background: '#f9fafb' }}
            />
            {error && <div style={{ color: '#a94442', marginBottom: '1rem', textAlign: 'center', fontWeight: 500 }}>{error}</div>}
            <button type="submit" style={{ width: '100%', padding: '0.9rem', background: '#284268', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem', letterSpacing: '0.5px', boxShadow: '0 2px 8px rgba(12,75,59,0.10)' }}>Create Admin</button>
          </form>
        </div>
      </div>
    )
  }

  if (!authenticated) {
    return (
      <div style={{ minHeight: '100vh', background: '#284268' }}>
        <Header transparent={false} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
          <form onSubmit={handleLogin} style={{
            background: 'white',
            padding: '2.5rem 2rem',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(12,75,59,0.18)',
            minWidth: '340px',
            maxWidth: '95vw',
            border: '2px solid #FFFFFF',
          }}>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#284268', fontWeight: 700, letterSpacing: '0.5px' }}>Admin Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '8px', border: '1.5px solid #FFFFFF', fontSize: '1rem', outline: 'none', background: '#f9fafb' }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '8px', border: '1.5px solid #FFFFFF', fontSize: '1rem', outline: 'none', background: '#f9fafb' }}
            />
            {error && <div style={{ color: '#a94442', marginBottom: '1rem', textAlign: 'center', fontWeight: 500 }}>{error}</div>}
            <button type="submit" style={{ width: '100%', padding: '0.9rem', background: '#284268', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem', letterSpacing: '0.5px', boxShadow: '0 2px 8px rgba(12,75,59,0.10)' }}>Login</button>
          </form>
        </div>
      </div>
    )
  }



  return (
    <div style={{ fontFamily, minHeight: '100vh', background: '#f8f9fa' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <Header transparent={false} />
      </div>
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
          {/* Hero Section */}
          <section
            style={{
              position: 'relative',
              backgroundColor: '#284268',
              color: 'white',
              padding: isMobile ? '3rem 1rem' : '5rem 2rem',
              textAlign: 'center',
              backgroundImage: 'url(/images/office_space.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              margin: isMobile ? '3rem 0.5rem 0 0.5rem' : '4rem 2rem 0 2rem',
              minHeight: isMobile ? '300px' : '450px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
              overflow: 'hidden',
              marginBottom: '2.5rem',
              zIndex: 1,
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          >
            {/* Overlay for better text readability */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(40, 66, 104, 0.55) 0%, rgba(40, 66, 104, 0.85) 50%, rgba(40, 66, 104, 0.55) 100%)',
              zIndex: 1
            }} />
            <div style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '1200px',
              margin: '0 auto',
              width: '100%',
              padding: isMobile ? '0 1rem' : '0',
              animation: 'fadeInUp 1.2s ease-out'
            }}>
              <h1 style={{
                fontSize: isMobile ? '2rem' : '3.5rem',
                marginBottom: '1.5rem',
                fontWeight: 800,
                textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
                animation: 'fadeInUp 1.2s ease-out',
                textAlign: 'center',
                letterSpacing: isArabic ? '0' : '0.5px',
              }}>
                {isArabic ? 'لوحة الإدارة' : 'Admin Panel'}
              </h1>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.4rem',
                color: '#FFFFFF',
                maxWidth: '700px',
                margin: '0 auto',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                lineHeight: '1.6',
                animation: 'fadeInUp 1.2s ease-out',
                textAlign: 'center',
              }}>
                {/* FadeInUp Animation CSS */}
                <style>{`
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
                `}</style>
                {isArabic
                  ? 'قم بإدارة الوظائف وأدوات إدارة الموقع من هنا.'
                  : 'Manage job postings and site administration tools here.'}
              </p>
            </div>
          </section>
          {/* Job Postings Admin Tool */}
          <JobPostingsAdmin />
        </div>
      </main>
      <Footer />
    </div>
  )
}
