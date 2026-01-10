import { useLanguage } from '../contexts/LanguageContext'

export default function JobPostingsList({ jobPostings, isMobile }) {
  const { language } = useLanguage()
  const isArabic = language === 'ar'

  return (
    <div style={{
      maxWidth: 1200,
      margin: '0 auto',
      marginBottom: '4rem',
      padding: isMobile ? '0 1rem' : '0 2rem',
      direction: isArabic ? 'rtl' : 'ltr',
    }}>
      <h2 style={{
        color: '#284268',
        fontWeight: 800,
        marginBottom: '2rem',
        fontSize: isMobile ? '1.3rem' : '1.7rem',
        letterSpacing: '0.5px',
        textAlign: 'center',
      }}>
        {isArabic ? 'الوظائف المتاحة' : 'Available Job Postings'}
      </h2>
      {jobPostings.length === 0 ? (
        <div style={{ color: '#888', fontStyle: 'italic', marginBottom: '1rem', textAlign: 'center' }}>
          {isArabic ? 'لا توجد وظائف متاحة حالياً.' : 'No job postings available.'}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {jobPostings.map(job => (
            <div key={job.id} style={{
              background: 'white',
              border: '2px solid #FFFFFF',
              borderRadius: '14px',
              boxShadow: '0 4px 18px rgba(12,75,59,0.08)',
              padding: isArabic ? '1.5rem 1.2rem 1.2rem 1.5rem' : '1.5rem 1.5rem 1.2rem 1.2rem',
              position: 'relative',
              transition: 'box-shadow 0.2s',
              direction: isArabic ? 'rtl' : 'ltr',
            }}>
              <div style={{ fontWeight: 800, fontSize: '1.18rem', color: '#284268', marginBottom: '0.5rem', letterSpacing: '0.2px', textAlign: isArabic ? 'right' : 'left' }}>{job.title}</div>
              <div style={{ marginBottom: '0.5rem', color: '#414042', fontSize: '1.01rem', fontWeight: 500, textAlign: isArabic ? 'right' : 'left' }}>{job.description}</div>
              <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.01rem', marginBottom: '0.7rem', textAlign: isArabic ? 'right' : 'left' }}>{job.location}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
