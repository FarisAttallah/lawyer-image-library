import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { fetchJobPostings } from '../utils/jobPostingsApi'
import BrandingIcon from '../components/BrandingIcon'
import { useResponsiveFonts } from '../hooks/useResponsiveFonts'


export default function Careers() {
  const { language } = useLanguage()
  const t = translations[language]
  const isArabic = language === 'ar'
  const [isMobile, setIsMobile] = useState(false)
  const { fontFamily, fonts } = useResponsiveFonts()
  const [jobPostings, setJobPostings] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [applyJob, setApplyJob] = useState(null)
  const [applicant, setApplicant] = useState({ name: '', email: '', phone: '' })
  const [resumeFile, setResumeFile] = useState(null)
  const [applyError, setApplyError] = useState('')
  const [applySuccess, setApplySuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const fileInputRef = useRef()

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768)
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  useEffect(() => {
    async function loadJobs() {
      const jobs = await fetchJobPostings();
      setJobPostings(jobs);
      if (jobs.length > 0) setSelectedJob(null); // No job selected by default
    }
    loadJobs();
  }, [])

  // Modal open handler
  function openApplyModal(job) {
    setApplyJob(job)
    setShowApplyModal(true)
    setApplicant({ name: '', email: '', phone: '' })
    setResumeFile(null)
    setApplyError('')
    setApplySuccess(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  // Modal close handler
  function closeApplyModal() {
    setShowApplyModal(false)
    setApplyJob(null)
    setApplyError('')
    setApplySuccess(false)
    setResumeFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  // Handle form submit
  async function handleApplySubmit(e) {
    e.preventDefault()
    if (!applicant.name || !applicant.email || !applicant.phone || !resumeFile) {
      setApplyError('All fields are required, including resume.')
      return
    }
    setSubmitting(true)
    setApplyError('')
    setApplySuccess(false)
    try {
      const formData = new FormData()
      formData.append('jobTitle', applyJob.title_en)
      formData.append('jobLocation', applyJob.location_en)
      formData.append('jobTitleAr', applyJob.title_ar)
      formData.append('jobLocationAr', applyJob.location_ar)
      formData.append('jobId', applyJob.id)
      formData.append('name', applicant.name)
      formData.append('email', applicant.email)
      formData.append('phone', applicant.phone)
      formData.append('resume', resumeFile)

      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formData
      })
      if (res.ok) {
        setApplySuccess(true)
        setApplicant({ name: '', email: '', phone: '' })
        setResumeFile(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
        setTimeout(() => {
          setSubmitting(false)
          closeApplyModal()
        }, 2000)
      } else {
        const data = await res.json()
        setApplyError(data.error || 'Failed to send application. Please try again.')
        setSubmitting(false)
        // Scroll to top of modal
        document.querySelector('#apply-modal')?.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } catch (err) {
      setApplyError('Failed to send application. Please try again.')
      setSubmitting(false)
      document.querySelector('#apply-modal')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Helper to strip HTML tags
  function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]+>/g, '');
  }

  // Shared button style for careers actions - matching hero button theme
  const careersButtonStyle = {
    backgroundColor: '#FFFFFF',
    color: 'white',
    border: '2px solid transparent',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontFamily: 'BeINBlack, Roboto, Arial, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4), 0 0 0 0 rgba(255, 255, 255, 0.7)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    fontSize: '1.08rem',
    padding: '1.1rem',
    outline: 'none',
    marginTop: '0.5rem',
    animation: 'pulse 2s infinite'
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', fontFamily: 'BeINBlack, Roboto, Arial, sans-serif' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <Header transparent={false} />
      </div>
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}>
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', marginTop: '2.5rem' }}>
          {/* Hero Section */}
          <section
            style={{
              position: 'relative',
              backgroundColor: '#284268',
              color: 'white',
              padding: isMobile ? '3rem 1rem' : '5rem 2rem',
              textAlign: 'center',
              backgroundImage: 'url(/images/careers.jpg)',
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
              background: 'linear-gradient(135deg, rgba(40, 66, 104, 0.55) 0%, rgba(40, 66, 104, 0.85) 50%, rgba(12, 75, 59, 0.55) 100%)',
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
                fontSize: fonts.sectionTitle,
                marginBottom: '1.5rem',
                fontWeight: 800,
                textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
                animation: 'fadeInUp 1.2s ease-out',
                textAlign: 'center',
                letterSpacing: isArabic ? '0' : '0.5px',
              }}>
                {isArabic ? 'الوظائف' : 'Careers'}
              </h1>
              <p style={{
                fontSize: fonts.sectionSubtitle,
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
                  ? 'انضم إلى فريقنا واطلع على أحدث الفرص الوظيفية لدينا.'
                  : 'Join our team and view the latest career opportunities.'}
              </p>
            </div>
          </section>
          {/* Add vertical space between hero and job listings */}
          <div style={{ height: '8rem' }} />
          {/* Two-pane Job Postings List */}
          <div
            style={{
              display: isMobile ? 'block' : 'flex',
              maxWidth: 1200,
              margin: '0 auto',
              gap: isMobile ? 0 : '2.5rem',
              padding: isMobile ? '0 0.5rem' : '0 2rem',
              marginBottom: '4rem',
              direction: isArabic ? 'rtl' : 'ltr',
            }}
          >
            {/* Left: Modern Card List */}
            <div
              style={{
                ...(isMobile ? {
                  width: '100%',
                  minWidth: 0,
                  maxWidth: '100%',
                  borderRadius: '20px',
                  padding: '1.2rem 0.7rem',
                  marginBottom: '1.5rem',
                } : {
                  flex: '0 0 600px',
                  minWidth: 420,
                  maxWidth: 650,
                  borderRadius: '32px',
                  padding: '4rem 2.5rem',
                  marginBottom: 0,
                }),
                background: 'linear-gradient(135deg, #f9fafb 70%, #e6e6e6 100%)',
                border: '2.5px solid #e0e0e0',
                boxShadow: '0 12px 40px rgba(12,75,59,0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                justifyContent: 'flex-start',
                minHeight: 0,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <h2 style={{
                color: '#284268',
                fontWeight: 900,
                marginBottom: '1.5rem',
                fontSize: isMobile ? '1.18rem' : '1.35rem',
                letterSpacing: '0.5px',
                textAlign: isArabic ? 'right' : 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span style={{fontSize: '1.3em'}}>📋</span>
                {isArabic ? 'الوظائف المتاحة' : 'Available Job Postings'}
              </h2>
              {jobPostings.length === 0 ? (
                <div style={{ color: '#888', fontStyle: 'italic', marginBottom: '1rem', textAlign: isArabic ? 'right' : 'left' }}>
                  {isArabic ? 'لا توجد وظائف متاحة حالياً.' : 'No job postings available.'}
                </div>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.7rem',
                    maxHeight: '520px',
                    overflowY: 'auto',
                    minHeight: 0,
                  }}
                >
                  {jobPostings.map(job => (
                    <div
                      key={job.id}
                      style={{
                        ...(isMobile ? {
                          fontSize: '1.05rem',
                          padding: '1.1rem 0.7rem',
                          borderRadius: '12px',
                          marginBottom: '0.7rem',
                        } : {
                          fontSize: '1.32rem',
                          padding: isArabic ? '2.1rem 1.5rem 2.1rem 2.2rem' : '2.1rem 2.2rem 2.1rem 1.5rem',
                          borderRadius: '18px',
                          marginBottom: '0.2rem',
                        }),
                        background: selectedJob && selectedJob.id === job.id ? 'linear-gradient(90deg, #e7f2ef 80%, #FFFFFF22 100%)' : 'white',
                        border: selectedJob && selectedJob.id === job.id ? '3px solid #284268' : '2px solid #FFFFFF',
                        boxShadow: selectedJob && selectedJob.id === job.id ? '0 8px 32px rgba(12,75,59,0.16)' : '0 4px 16px rgba(12,75,59,0.09)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'box-shadow 0.25s cubic-bezier(.4,0,.2,1), background 0.25s cubic-bezier(.4,0,.2,1), border 0.25s cubic-bezier(.4,0,.2,1)',
                        direction: isArabic ? 'rtl' : 'ltr',
                        position: 'relative',
                        outline: selectedJob && selectedJob.id === job.id ? '2.5px solid #FFFFFF' : 'none',
                      }}
                      onClick={() => setSelectedJob(job)}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'linear-gradient(90deg, #f3f8f6 80%, #e7e7e7 100%)';
                        e.currentTarget.style.boxShadow = '0 8px 28px rgba(12,75,59,0.16)';
                        e.currentTarget.style.border = '2.5px solid #FFFFFF';
                      }}
                      onMouseLeave={e => {
                        if (selectedJob && selectedJob.id === job.id) {
                          e.currentTarget.style.background = 'linear-gradient(90deg, #e7f2ef 80%, #FFFFFF22 100%)';
                          e.currentTarget.style.boxShadow = '0 4px 16px rgba(12,75,59,0.13)';
                          e.currentTarget.style.border = '2.5px solid #284268';
                        } else {
                          e.currentTarget.style.background = 'white';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(12,75,59,0.07)';
                          e.currentTarget.style.border = '1.5px solid #FFFFFF';
                        }
                      }}
                    >
                      <div style={{
                        fontWeight: 900,
                        fontSize: isMobile ? '1.13rem' : '1.45rem',
                        color: '#284268',
                        textAlign: isArabic ? 'right' : 'left',
                        flex: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        marginRight: isArabic ? 0 : (isMobile ? '0.5rem' : '1.1rem'),
                        marginLeft: isArabic ? (isMobile ? '0.5rem' : '1.1rem') : 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: isMobile ? '0.3rem' : '0.7rem',
                      }}>{job[isArabic ? 'title_ar' : 'title_en']}
                        <span style={{fontSize: '1.1em', color: '#FFFFFF', marginLeft: isArabic ? 0 : 6, marginRight: isArabic ? 6 : 0}}>➔</span>
                      </div>
                      {/* Only show location, no description */}
                      <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: isMobile ? '1.08rem' : '1.18rem', marginBottom: '0.7rem', textAlign: isArabic ? 'right' : 'left' }}>{job[isArabic ? 'location_ar' : 'location_en']}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Right: Job Details Modern Card */}
            {!isMobile && (
              <div
                style={{
                  flex: 1,
                  background: 'linear-gradient(135deg, #f9fafb 70%, #e6e6e6 100%)',
                  border: '2.5px solid #FFFFFF',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(12,75,59,0.13)',
                  padding: '2.7rem 2.7rem 2rem 2.7rem',
                  marginLeft: isArabic ? 0 : '1.5rem',
                  marginRight: isArabic ? '1.5rem' : 0,
                  minHeight: 340,
                  display: selectedJob ? 'block' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  direction: isArabic ? 'rtl' : 'ltr',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative Accent Bar */}
                <div style={{position:'absolute',top:0,left:0,right:0,height:8,background:'linear-gradient(90deg,#284268 60%,#FFFFFF 100%)',borderTopLeftRadius:20,borderTopRightRadius:20,opacity:0.9}} />
                {selectedJob ? (
                  <>
                    <div style={{ fontWeight: 900, fontSize: '1.55rem', color: '#284268', marginBottom: '1.3rem', letterSpacing: '0.2px', textAlign: isArabic ? 'right' : 'left', display:'flex',alignItems:'center',gap:'0.5rem' }}>
                      <span style={{fontSize:'1.2em'}}>💼</span> {selectedJob[isArabic ? 'title_ar' : 'title_en']}
                    </div>
                    <div style={{ marginBottom: '1.3rem', color: '#414042', fontSize: '1.18rem', fontWeight: 500, textAlign: isArabic ? 'right' : 'left', lineHeight: 1.8 }}>
                      <div dangerouslySetInnerHTML={{ __html: selectedJob[isArabic ? 'description_ar' : 'description_en'] }} />
                    </div>
                    <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.13rem', marginBottom: '0.7rem', textAlign: isArabic ? 'right' : 'left', display:'flex',alignItems:'center',gap:'0.4rem' }}>
                      <span style={{fontSize:'1.1em'}}>📍</span> {selectedJob[isArabic ? 'location_ar' : 'location_en']}
                    </div>
                    <button
                      style={{
                        ...careersButtonStyle,
                        fontSize: '1.35rem',
                        padding: '1.3rem 3.2rem',
                        margin: '2.2rem auto 0 auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: submitting ? 0.7 : 1,
                      }}
                      onMouseOver={e => { e.currentTarget.style.backgroundColor = '#284268'; e.currentTarget.style.borderColor = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(40, 66, 104, 0.6)'; }}
                      onMouseOut={e => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(40, 66, 104, 0.4)'; }}
                      onClick={() => openApplyModal(selectedJob)}
                    >
                      {isArabic ? 'تقديم' : 'Apply'}
                    </button>
                  </>
                ) : (
                  <div style={{ color: '#888', fontStyle: 'italic', textAlign: 'center', width: '100%' }}>
                    {isArabic ? 'اختر وظيفة لعرض التفاصيل.' : 'Select a job to view details.'}
                  </div>
                )}
              </div>
            )}
            {/* On mobile, show details below list */}
            {isMobile && selectedJob && (
              <div
                style={{
                  background: 'linear-gradient(135deg, #f9fafb 70%, #e6e6e6 100%)',
                  border: '2.5px solid #FFFFFF',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(12,75,59,0.13)',
                  padding: '1.7rem 1.2rem 1.2rem 1.7rem',
                  marginTop: '1.5rem',
                  direction: isArabic ? 'rtl' : 'ltr',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{position:'absolute',top:0,left:0,right:0,height:8,background:'linear-gradient(90deg,#284268 60%,#FFFFFF 100%)',borderTopLeftRadius:20,borderTopRightRadius:20,opacity:0.9}} />
                <div style={{ fontWeight: 900, fontSize: '1.35rem', color: '#284268', marginBottom: '0.9rem', letterSpacing: '0.2px', textAlign: isArabic ? 'right' : 'left', display:'flex',alignItems:'center',gap:'0.5rem' }}>
                  <span style={{fontSize:'1.1em'}}>💼</span> {selectedJob[isArabic ? 'title_ar' : 'title_en']}
                </div>
                <div style={{ marginBottom: '0.9rem', color: '#414042', fontSize: '1.08rem', fontWeight: 500, textAlign: isArabic ? 'right' : 'left', lineHeight: 1.7 }}>
                  <div dangerouslySetInnerHTML={{ __html: selectedJob[isArabic ? 'description_ar' : 'description_en'] }} />
                </div>
                <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.7rem', textAlign: isArabic ? 'right' : 'left', display:'flex',alignItems:'center',gap:'0.4rem' }}>
                  <span style={{fontSize:'1em'}}>📍</span> {selectedJob[isArabic ? 'location_ar' : 'location_en']}
                </div>
                <button
                  style={{
                    ...careersButtonStyle,
                    opacity: submitting ? 0.7 : 1,
                  }}
                  onMouseOver={e => { e.currentTarget.style.backgroundColor = '#284268'; e.currentTarget.style.borderColor = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(40, 66, 104, 0.6)'; }}
                  onMouseOut={e => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(40, 66, 104, 0.4)'; }}
                  onClick={() => openApplyModal(selectedJob)}
                >
                  {isArabic ? 'تقديم' : 'Apply'}
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Apply Modal */}
        {showApplyModal && applyJob && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.35)',
            zIndex: 2000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div id="apply-modal" style={{
              background: 'white',
              borderRadius: 24,
              boxShadow: '0 12px 48px rgba(12,75,59,0.18)',
              padding: '3.5rem 3.5rem 2.5rem 3.5rem',
              minWidth: 600, maxWidth: 800, width: '100%',
              position: 'relative',
              textAlign: isArabic ? 'right' : 'left',
              maxHeight: '90vh',
              overflowY: 'auto',
              alignItems: isArabic ? 'flex-end' : 'flex-start',
              direction: isArabic ? 'rtl' : 'ltr',
            }}>
              {/* BrandingIcon at top left */}
              <div style={{ position: 'absolute', top: 24, left: isArabic ? 'unset' : 32, right: isArabic ? 32 : 'unset', zIndex: 1 }}>
                <BrandingIcon style={{ width: 54, height: 54 }} />
              </div>
              <button onClick={closeApplyModal} style={{ position: 'absolute', top: 28, right: isArabic ? 'unset' : 36, left: isArabic ? 36 : 'unset', background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: '#888', padding: 0, lineHeight: 1, zIndex: 2 }}>&times;</button>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#284268', fontWeight: 800, marginBottom: '0.7rem', fontSize: '1.7rem', letterSpacing: '0.5px', textAlign: 'center' }}>
                  {isArabic ? `التقديم على ${applyJob[isArabic ? 'title_ar' : 'title_en']}` : `Apply for ${applyJob[isArabic ? 'title_ar' : 'title_en']}`}
                </h2>
              </div>
              <div style={{ marginBottom: '1.1rem', color: '#FFFFFF', fontWeight: 700, fontSize: '1.13rem', textAlign: 'center' }}>{applyJob[isArabic ? 'location_ar' : 'location_en']}</div>
              <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.2rem', alignItems: isArabic ? 'flex-end' : 'flex-start', direction: isArabic ? 'rtl' : 'ltr', width: '100%' }}>
                {/* Two-column layout for labels and fields, swap order for Arabic */}
                <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', alignItems: 'center', gap: '1.1rem 1.2rem', width: '100%' }}>
                  {isArabic ? (
                    <>
                      <label htmlFor="apply-name" style={{ fontWeight: 600, color: '#284268', fontSize: '1.05rem', textAlign: 'right' }}>{isArabic ? 'الاسم' : 'Name'}</label>
                      <input
                        id="apply-name"
                        type="text"
                        value={applicant.name}
                        onChange={e => setApplicant(a => ({ ...a, name: e.target.value }))}
                        style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #FFFFFF', fontSize: '1.07rem', outline: 'none', background: '#f9fafb', fontWeight: 500, width: '100%', textAlign: 'right' }}
                        required
                      />
                      <label htmlFor="apply-email" style={{ fontWeight: 600, color: '#284268', fontSize: '1.05rem', textAlign: 'right' }}>{isArabic ? 'البريد الإلكتروني' : 'Email'}</label>
                      <input
                        id="apply-email"
                        type="email"
                        value={applicant.email}
                        onChange={e => setApplicant(a => ({ ...a, email: e.target.value }))}
                        style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #FFFFFF', fontSize: '1.07rem', outline: 'none', background: '#f9fafb', fontWeight: 500, width: '100%', textAlign: 'right' }}
                        required
                      />
                      <label htmlFor="apply-phone" style={{ fontWeight: 600, color: '#284268', fontSize: '1.05rem', textAlign: 'right' }}>{isArabic ? 'رقم الجوال' : 'Phone'}</label>
                      <input
                        id="apply-phone"
                        type="text"
                        value={applicant.phone}
                        onChange={e => setApplicant(a => ({ ...a, phone: e.target.value }))}
                        style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #FFFFFF', fontSize: '1.07rem', outline: 'none', background: '#f9fafb', fontWeight: 500, width: '100%', textAlign: 'right' }}
                        required
                      />
                      <label htmlFor="apply-resume" style={{ fontWeight: 600, color: '#284268', fontSize: '1.05rem', textAlign: 'right' }}>{isArabic ? 'السيرة الذاتية' : 'Resume'}</label>
                      {!resumeFile ? (
                        <input
                          id="apply-resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          ref={fileInputRef}
                          onChange={e => setResumeFile(e.target.files[0])}
                          style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #FFFFFF', fontSize: '1.07rem', background: '#f9fafb', fontWeight: 500, width: '100%', textAlign: 'right' }}
                          required
                        />
                      ) : (
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          padding: '0.9rem', 
                          borderRadius: 8, 
                          border: '1.5px solid #FFFFFF', 
                          background: '#f9fafb',
                          width: '100%'
                        }}>
                          <a 
                            href={URL.createObjectURL(resumeFile)}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ 
                              color: '#284268', 
                              textDecoration: 'none', 
                              fontWeight: 500,
                              flex: 1,
                              textAlign: 'right'
                            }}
                          >
                            📄 {resumeFile.name}
                          </a>
                          <button
                            type="button"
                            onClick={() => {
                              setResumeFile(null)
                              if (fileInputRef.current) fileInputRef.current.value = ''
                            }}
                            style={{
                              background: '#dc3545',
                              color: 'white',
                              border: 'none',
                              borderRadius: '50%',
                              width: '24px',
                              height: '24px',
                              cursor: 'pointer',
                              fontSize: '14px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 'bold'
                            }}
                            title={isArabic ? 'إزالة الملف' : 'Remove file'}
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <label htmlFor="apply-name" style={{ fontWeight: 600, color: '#284268', fontSize: '1.05rem', textAlign: 'left' }}>{isArabic ? 'الاسم' : 'Name'}</label>
                      <input
                        id="apply-name"
                        type="text"
                        value={applicant.name}
                        onChange={e => setApplicant(a => ({ ...a, name: e.target.value }))}
                        style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #FFFFFF', fontSize: '1.07rem', outline: 'none', background: '#f9fafb', fontWeight: 500, width: '100%', textAlign: 'left' }}
                        required
                      />
                      <label htmlFor="apply-email" style={{ fontWeight: 600, color: '#284268', fontSize: '1.05rem', textAlign: 'left' }}>{isArabic ? 'البريد الإلكتروني' : 'Email'}</label>
                      <input
                        id="apply-email"
                        type="email"
                        value={applicant.email}
                        onChange={e => setApplicant(a => ({ ...a, email: e.target.value }))}
                        style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #FFFFFF', fontSize: '1.07rem', outline: 'none', background: '#f9fafb', fontWeight: 500, width: '100%', textAlign: 'left' }}
                        required
                      />
                      <label htmlFor="apply-phone" style={{ fontWeight: 600, color: '#284268', fontSize: '1.05rem', textAlign: 'left' }}>{isArabic ? 'رقم الجوال' : 'Phone'}</label>
                      <input
                        id="apply-phone"
                        type="text"
                        value={applicant.phone}
                        onChange={e => setApplicant(a => ({ ...a, phone: e.target.value }))}
                        style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #FFFFFF', fontSize: '1.07rem', outline: 'none', background: '#f9fafb', fontWeight: 500, width: '100%', textAlign: 'left' }}
                        required
                      />
                      <label htmlFor="apply-resume" style={{ fontWeight: 600, color: '#284268', fontSize: '1.05rem', textAlign: 'left' }}>{isArabic ? 'السيرة الذاتية' : 'Resume'}</label>
                      {!resumeFile ? (
                        <input
                          id="apply-resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          ref={fileInputRef}
                          onChange={e => setResumeFile(e.target.files[0])}
                          style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #FFFFFF', fontSize: '1.07rem', background: '#f9fafb', fontWeight: 500, width: '100%', textAlign: 'left' }}
                          required
                        />
                      ) : (
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          padding: '0.9rem', 
                          borderRadius: 8, 
                          border: '1.5px solid #FFFFFF', 
                          background: '#f9fafb',
                          width: '100%'
                        }}>
                          <a 
                            href={URL.createObjectURL(resumeFile)}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ 
                              color: '#284268', 
                              textDecoration: 'none', 
                              fontWeight: 500,
                              flex: 1,
                              textAlign: 'left'
                            }}
                          >
                            📄 {resumeFile.name}
                          </a>
                          <button
                            type="button"
                            onClick={() => {
                              setResumeFile(null)
                              if (fileInputRef.current) fileInputRef.current.value = ''
                            }}
                            style={{
                              background: '#dc3545',
                              color: 'white',
                              border: 'none',
                              borderRadius: '50%',
                              width: '24px',
                              height: '24px',
                              cursor: 'pointer',
                              fontSize: '14px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 'bold'
                            }}
                            title={isArabic ? 'إزالة الملف' : 'Remove file'}
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
                {applyError && <div style={{ color: '#a94442', fontWeight: 600, textAlign: 'center' }}>{applyError}</div>}
                {applySuccess && <div style={{ color: '#284268', fontWeight: 700, textAlign: 'center' }}>{isArabic ? 'تم التقديم بنجاح!' : 'Application submitted successfully!'}</div>}
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    ...careersButtonStyle,
                    opacity: submitting ? 0.7 : 1,
                  }}
                  onMouseOver={e => { e.currentTarget.style.backgroundColor = '#284268'; e.currentTarget.style.borderColor = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(40, 66, 104, 0.6)'; }}
                  onMouseOut={e => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(40, 66, 104, 0.4)'; }}
                >
                  {submitting ? (
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                      <span className="spinner" style={{ width: 22, height: 22, border: '3px solid #fff', borderTop: '3px solid #FFFFFF', borderRadius: '50%', display: 'inline-block', animation: 'spin 1s linear infinite' }}></span>
                      {isArabic ? 'جاري الإرسال...' : 'Submitting...'}
                    </span>
                  ) : (
                    isArabic ? 'إرسال الطلب' : 'Submit Application'
                  )}
                </button>
                <style>{`
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                  
                  @keyframes pulse {
                    0% {
                      box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4), 0 0 0 0 rgba(255, 255, 255, 0.7);
                    }
                    70% {
                      box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4), 0 0 0 10px rgba(255, 255, 255, 0);
                    }
                    100% {
                      box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4), 0 0 0 0 rgba(255, 255, 255, 0);
                    }
                  }
                `}</style>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
