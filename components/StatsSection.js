import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { useEffect, useState, useRef } from 'react';

export default function StatsSection({ isMobile, fonts }) {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  // Helper to extract number from stat string (handles + and %)
  function getTargetNumber(str) {
    if (str.includes('%')) return parseInt(str);
    if (str.includes('+')) return parseInt(str);
    return parseInt(str);
  }

  const { language } = useLanguage()
  const t = translations[language]
  // Updated stats to reflect actual firm data
  const statsTranslations = {
    ar: {
      yearsExperience: 'سنة خبرة',
      cases: 'قضية منجزة',
      clients: 'عميل راض',
      successRate: 'معدل النجاح',
      years: '13+',
      totalCases: '500+',
      totalClients: '300+',
      success: '95%'
    },
    en: {
      yearsExperience: 'Years Experience',
      cases: 'Cases Completed',
      clients: 'Satisfied Clients',
      successRate: 'Success Rate',
      years: '13+',
      totalCases: '500+',
      totalClients: '300+',
      success: '95%'
    }
  }
  const stats = statsTranslations[language]
  // Array of stat values for animation
  const statValues = [stats.years, stats.totalCases, stats.totalClients, stats.success];
  // Animated values state
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start = [0, 0, 0, 0];
    let ends = statValues.map(getTargetNumber);
    let increments = ends.map((end) => Math.max(1, Math.floor(end / 60)));
    let interval = setInterval(() => {
      start = start.map((val, i) => {
        if (val < ends[i]) {
          return Math.min(val + increments[i], ends[i]);
        }
        return val;
      });
      setAnimatedValues([...start]);
      if (start.every((val, i) => val === ends[i])) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [hasAnimated, language]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={sectionRef} style={{
      width: '100%',
      minHeight: '350px',
      background: 'linear-gradient(135deg, #0c4b3b 0%, #226249 100%)',
      padding: isMobile ? '2rem 0.5rem' : '4rem 0',
      color: 'white',
      direction: language === 'ar' ? 'rtl' : 'ltr',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative blurred circles for glassmorphism effect */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        left: '-80px',
        width: '220px',
        height: '220px',
        borderRadius: '50%',
        background: 'rgba(196,154,108,0.12)',
        filter: 'blur(12px)',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(34,98,73,0.10)',
        filter: 'blur(16px)',
        zIndex: 1
      }} />
      <div style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        <h2 
        className="services-title"
        style={{
          textAlign: 'center',
          color: '#c49a6c',
          fontWeight: 'bold',
          letterSpacing: '1px',
          textShadow: '2px 2px 8px rgba(0,0,0,0.12)'
        }}>
          {language === 'ar' ? 'إنجازاتنا بالأرقام' : 'Our Achievements in Numbers'}
        </h2>
        <br/>
        <div style={{
          display: isMobile ? 'grid' : 'flex',
          flexDirection: isMobile ? undefined : 'row',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: isMobile ? '1.5rem' : '2.5rem',
          width: '100%',
          textAlign: 'center',
          margin: '0 auto',
          flexWrap: isMobile ? undefined : 'wrap'
        }}>
          {/* Stat Cards - all consistent styling */}
          {[{
            value: stats.years,
            label: stats.yearsExperience,
            suffix: '+'
          }, {
            value: stats.totalCases,
            label: stats.cases,
            suffix: '+'
          }, {
            value: stats.totalClients,
            label: stats.clients,
            suffix: '+'
          }, {
            value: stats.success,
            label: stats.successRate,
            suffix: '%'
          }].map((stat, idx) => (
            <div key={idx} style={{
              flex: isMobile ? undefined : '1',
              minWidth: isMobile ? undefined : '200px',
              maxWidth: isMobile ? undefined : '300px',
              padding: isMobile ? '1.5rem' : '2.5rem 2rem',
              borderRadius: '18px',
              background: 'rgba(255,255,255,0.18)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
              border: '2px solid #c49a6c',
              backdropFilter: 'blur(14px)',
              transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)',
              position: 'relative',
              zIndex: 2,
              margin: isMobile ? '0' : '0 0.5rem',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px) scale(1.04)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
              <div style={{
                fontSize: isMobile ? '2.8rem' : '4.2rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem',
                letterSpacing: '1px',
                textShadow: '2px 2px 8px rgba(0,0,0,0.10)'
              }}>
                {animatedValues[idx]}{stat.suffix}
              </div>
              <div className="service-card-title"
              style={{
                opacity: 0.92,
                color: 'white',
                letterSpacing: '0.5px'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
