import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../utils/translations'
import { fetchJobPostings, addJobPosting, deleteJobPosting } from '../utils/jobPostingsApi'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { useMediaQuery } from 'react-responsive';

// Helper to strip HTML tags
function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, '');
}

export default function JobPostingsAdmin() {
  const { language } = useLanguage()
  const t = translations[language]
  const isArabic = language === 'ar'
  const [jobPostings, setJobPostings] = useState([])
  const [jobTitleEn, setJobTitleEn] = useState('')
  const [jobTitleAr, setJobTitleAr] = useState('')
  const [jobDescEn, setJobDescEn] = useState('')
  const [jobDescAr, setJobDescAr] = useState('')
  const [jobLocationEn, setJobLocationEn] = useState('')
  const [jobLocationAr, setJobLocationAr] = useState('')
  const [jobError, setJobError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [addSuccess, setAddSuccess] = useState(false)
  const [viewMoreJob, setViewMoreJob] = useState(null);
  const [step, setStep] = useState(1);
  const [descModalOpen, setDescModalOpen] = useState(false);
  const [descStep, setDescStep] = useState(1); // 1 = EN, 2 = AR
  const isMobile = useMediaQuery({ maxWidth: 700 });

  // Load job postings from API on mount
  useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs() {
    const jobs = await fetchJobPostings();
    setJobPostings(jobs);
  }

  // Add a new job posting
  const handleStep1Next = (e) => {
    e.preventDefault();
    if (!jobTitleEn || !jobTitleAr || !jobLocationEn || !jobLocationAr) {
      setJobError(isArabic ? 'جميع الحقول مطلوبة' : 'All fields are required');
      return;
    }
    setJobError('');
    setDescStep(1);
    setDescModalOpen(true);
  };

  const handleDescNext = (e) => {
    e.preventDefault();
    if (!jobDescEn) {
      setJobError(isArabic ? 'الوصف الإنجليزي مطلوب' : 'English description is required');
      return;
    }
    setJobError('');
    setDescStep(2);
  };

  const handleAddJob = async (e) => {
    e.preventDefault();
    if (!jobDescAr) {
      setJobError(isArabic ? 'الوصف العربي مطلوب' : 'Arabic description is required');
      return;
    }
    setSubmitting(true);
    setJobError('');
    setAddSuccess(false);
    try {
      const newJob = {
        id: Date.now(),
        title_en: jobTitleEn,
        title_ar: jobTitleAr,
        description_en: jobDescEn,
        description_ar: jobDescAr,
        location_en: jobLocationEn,
        location_ar: jobLocationAr
      };
      await addJobPosting(newJob);
      setJobTitleEn('');
      setJobTitleAr('');
      setJobDescEn('');
      setJobDescAr('');
      setJobLocationEn('');
      setJobLocationAr('');
      setAddSuccess(true);
      setTimeout(() => setAddSuccess(false), 2000);
      setDescModalOpen(false);
      loadJobs();
    } catch (err) {
      setJobError(isArabic ? 'حدث خطأ أثناء إضافة الوظيفة' : 'An error occurred while adding the job');
    } finally {
      setSubmitting(false);
    }
  };

  // Delete a job posting
  const handleDeleteJob = async (id) => {
    await deleteJobPosting(id);
    loadJobs();
  };

  // Shared button style for admin actions
  const adminButtonStyle = {
    backgroundColor: '#3b3b3b',
    color: 'white',
    border: '2px solid transparent',
    borderRadius: '8px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 6px 20px rgba(59, 59, 59, 0.4)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    fontSize: '1.08rem',
    padding: '1.1rem',
    outline: 'none',
    marginTop: '0.5rem',
  };

  // Responsive two-pane layout with language support
  return (
    <div
      className="admin-flex-parent"
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '1.2rem' : '2.5rem',
        maxWidth: 1200,
        margin: '0 auto',
        alignItems: 'flex-start',
        width: '100%',
        boxSizing: 'border-box',
        padding: isMobile ? '0 0.5rem' : '0 2rem',
        marginBottom: isMobile ? '2rem' : '4rem',
        direction: isArabic ? 'rtl' : 'ltr',
      }}
    >
      {/* Step 1: Basic Info Form */}
      <div style={{
        flex: isMobile ? 'unset' : (isArabic ? 'unset' : '0 0 440px'),
        minWidth: isMobile ? 0 : 340,
        maxWidth: isMobile ? '100%' : 480,
        marginBottom: isMobile ? '1.2rem' : '2rem',
        background: 'linear-gradient(135deg, #f9fafb 70%, #e6e6e6 100%)',
        border: '2px solid #e0e0e0',
        borderRadius: isMobile ? '16px' : '24px',
        boxShadow: isMobile ? '0 4px 16px rgba(12,75,59,0.10)' : '0 8px 32px rgba(12,75,59,0.12)',
        padding: isMobile ? '1.5rem 1rem' : '3rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        minHeight: 0,
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%',
      }}>
        <h2 style={{ color: '#0c4b3b', fontWeight: 900, marginBottom: '2rem', fontSize: '1.7rem', letterSpacing: '0.5px', textAlign: isArabic ? 'right' : 'left' }}>
          {isArabic ? 'إضافة وظيفة جديدة' : 'Add New Job Posting'}
        </h2>
        <form onSubmit={handleStep1Next} style={{
          display: 'flex', flexDirection: 'column', gap: '2rem',
          direction: isArabic ? 'rtl' : 'ltr',
          width: '100%',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', alignItems: 'center', gap: '1.1rem 1.2rem', width: '100%' }}>
            {isArabic ? (
              <>
                <label htmlFor="job-title-en" style={{ fontWeight: 700, color: '#0c4b3b', fontSize: '1.08rem', textAlign: 'right' }}>{isArabic ? 'المسمى (إنجليزي)' : 'Title (EN)'}</label>
                <input id="job-title-en" type="text" value={jobTitleEn} onChange={e => setJobTitleEn(e.target.value)} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #c49a6c', fontSize: '1.07rem', outline: 'none', background: 'white', fontWeight: 500, width: '100%', textAlign: 'right' }} required />
                <label htmlFor="job-location-en" style={{ fontWeight: 700, color: '#0c4b3b', fontSize: '1.08rem', textAlign: 'right' }}>{isArabic ? 'الموقع (إنجليزي)' : 'Location (EN)'}</label>
                <input id="job-location-en" type="text" value={jobLocationEn} onChange={e => setJobLocationEn(e.target.value)} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #c49a6c', fontSize: '1.07rem', outline: 'none', background: 'white', fontWeight: 500, width: '100%', textAlign: 'right' }} required />
                <label htmlFor="job-title-ar" style={{ fontWeight: 700, color: '#0c4b3b', fontSize: '1.08rem', textAlign: 'right' }}>{isArabic ? 'المسمى (عربي)' : 'Title (AR)'}</label>
                <input id="job-title-ar" type="text" value={jobTitleAr} onChange={e => setJobTitleAr(e.target.value)} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #c49a6c', fontSize: '1.07rem', outline: 'none', background: 'white', fontWeight: 500, width: '100%', textAlign: 'right' }} required />
                <label htmlFor="job-location-ar" style={{ fontWeight: 700, color: '#0c4b3b', fontSize: '1.08rem', textAlign: 'right' }}>{isArabic ? 'الموقع (عربي)' : 'Location (AR)'}</label>
                <input id="job-location-ar" type="text" value={jobLocationAr} onChange={e => setJobLocationAr(e.target.value)} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #c49a6c', fontSize: '1.07rem', outline: 'none', background: 'white', fontWeight: 500, width: '100%', textAlign: 'right' }} required />
              </>
            ) : (
              <>
                <label htmlFor="job-title-en" style={{ fontWeight: 700, color: '#0c4b3b', fontSize: '1.08rem', textAlign: 'left' }}>{isArabic ? 'المسمى (إنجليزي)' : 'Title (EN)'}</label>
                <input id="job-title-en" type="text" value={jobTitleEn} onChange={e => setJobTitleEn(e.target.value)} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #c49a6c', fontSize: '1.07rem', outline: 'none', background: 'white', fontWeight: 500, width: '100%', textAlign: 'left' }} required />
                <label htmlFor="job-location-en" style={{ fontWeight: 700, color: '#0c4b3b', fontSize: '1.08rem', textAlign: 'left' }}>{isArabic ? 'الموقع (إنجليزي)' : 'Location (EN)'}</label>
                <input id="job-location-en" type="text" value={jobLocationEn} onChange={e => setJobLocationEn(e.target.value)} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #c49a6c', fontSize: '1.07rem', outline: 'none', background: 'white', fontWeight: 500, width: '100%', textAlign: 'left' }} required />
                <label htmlFor="job-title-ar" style={{ fontWeight: 700, color: '#0c4b3b', fontSize: '1.08rem', textAlign: 'left' }}>{isArabic ? 'المسمى (عربي)' : 'Title (AR)'}</label>
                <input id="job-title-ar" type="text" value={jobTitleAr} onChange={e => setJobTitleAr(e.target.value)} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #c49a6c', fontSize: '1.07rem', outline: 'none', background: 'white', fontWeight: 500, width: '100%', textAlign: 'left' }} required />
                <label htmlFor="job-location-ar" style={{ fontWeight: 700, color: '#0c4b3b', fontSize: '1.08rem', textAlign: 'left' }}>{isArabic ? 'الموقع (عربي)' : 'Location (AR)'}</label>
                <input id="job-location-ar" type="text" value={jobLocationAr} onChange={e => setJobLocationAr(e.target.value)} style={{ padding: '0.9rem', borderRadius: 8, border: '1.5px solid #c49a6c', fontSize: '1.07rem', outline: 'none', background: 'white', fontWeight: 500, width: '100%', textAlign: 'left' }} required />
              </>
            )}
          </div>
          {jobError && <div style={{ color: '#a94442', marginBottom: '0.5rem', textAlign: 'center', fontWeight: 600 }}>{jobError}</div>}
          {addSuccess && <div style={{ color: '#0c4b3b', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>{isArabic ? 'تمت إضافة الوظيفة بنجاح!' : 'Job added successfully!'}</div>}
          <button
            type="submit"
            style={{ ...adminButtonStyle, opacity: submitting ? 0.7 : 1 }}
            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#5a5a5a'; e.currentTarget.style.borderColor = '#3b3b3b'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 59, 59, 0.6)'; }}
            onMouseOut={e => { e.currentTarget.style.backgroundColor = '#3b3b3b'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 59, 59, 0.4)'; }}
          >
            {isArabic ? 'التالي: الوصف' : 'Next: Description'}
          </button>
        </form>
      </div>
      {/* Step 2: Description Modal (EN/AR) */}
      {descModalOpen && descStep === 1 && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.35)',
          zIndex: 3000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: 'white',
            borderRadius: 24,
            boxShadow: '0 12px 48px rgba(12,75,59,0.18)',
            padding: '3.5rem 3.5rem 2.5rem 3.5rem',
            minWidth: 900, maxWidth: 1200, width: '100%',
            position: 'relative',
            textAlign: 'left',
            maxHeight: '90vh',
            overflowY: 'auto',
            display: 'flex', flexDirection: 'column',
          }}>
            <button onClick={() => setDescModalOpen(false)} style={{ position: 'absolute', top: 24, right: 36, background: 'none', border: 'none', fontSize: 32, cursor: 'pointer', color: '#888', padding: 0, lineHeight: 1, zIndex: 2 }}>&times;</button>
            <h2 style={{ color: '#0c4b3b', fontWeight: 800, marginBottom: '1.1rem', fontSize: '2rem', letterSpacing: '0.5px' }}>{isArabic ? 'الوصف الوظيفي (إنجليزي)' : 'Job Description (EN)'}</h2>
            <form onSubmit={handleDescNext}>
              <div style={{ marginBottom: '2.2rem' }}>
                <ReactQuill theme="snow" value={jobDescEn} onChange={setJobDescEn} style={{ background: 'white', borderRadius: 12, minHeight: 300, height: 300 }} />
              </div>
              {jobError && <div style={{ color: '#a94442', marginBottom: '0.5rem', textAlign: 'center', fontWeight: 600 }}>{jobError}</div>}
              <button
                type="submit"
                style={{ ...adminButtonStyle, opacity: submitting ? 0.7 : 1 }}
                onMouseOver={e => { e.currentTarget.style.backgroundColor = '#5a5a5a'; e.currentTarget.style.borderColor = '#3b3b3b'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 59, 59, 0.6)'; }}
                onMouseOut={e => { e.currentTarget.style.backgroundColor = '#3b3b3b'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 59, 59, 0.4)'; }}
              >
                {isArabic ? 'التالي: الوصف العربي' : 'Next: Arabic Description'}
              </button>
            </form>
          </div>
        </div>
      )}
      {descModalOpen && descStep === 2 && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.35)',
          zIndex: 3000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: 'white',
            borderRadius: 24,
            boxShadow: '0 12px 48px rgba(12,75,59,0.18)',
            padding: '3.5rem 3.5rem 2.5rem 3.5rem',
            minWidth: 900, maxWidth: 1200, width: '100%',
            position: 'relative',
            textAlign: 'right',
            maxHeight: '90vh',
            overflowY: 'auto',
            display: 'flex', flexDirection: 'column',
          }}>
            <button onClick={() => setDescStep(1)} style={{ position: 'absolute', top: 24, left: 36, background: 'none', border: 'none', fontSize: 32, cursor: 'pointer', color: '#888', padding: 0, lineHeight: 1, zIndex: 2 }}>&larr;</button>
            <button onClick={() => setDescModalOpen(false)} style={{ position: 'absolute', top: 24, right: 36, background: 'none', border: 'none', fontSize: 32, cursor: 'pointer', color: '#888', padding: 0, lineHeight: 1, zIndex: 2 }}>&times;</button>
            <h2 style={{ color: '#0c4b3b', fontWeight: 800, marginBottom: '1.1rem', fontSize: '2rem', letterSpacing: '0.5px', textAlign: 'right' }}>{isArabic ? 'الوصف الوظيفي (عربي)' : 'Job Description (AR)'}</h2>
            <form onSubmit={handleAddJob}>
              <div style={{ marginBottom: '2.2rem' }}>
                <ReactQuill theme="snow" value={jobDescAr} onChange={setJobDescAr} style={{ background: 'white', borderRadius: 12, minHeight: 300, height: 300 }} />
              </div>
              {jobError && <div style={{ color: '#a94442', marginBottom: '0.5rem', textAlign: 'center', fontWeight: 600 }}>{jobError}</div>}
              <button
                type="submit"
                disabled={submitting}
                style={{ ...adminButtonStyle, opacity: submitting ? 0.7 : 1 }}
                onMouseOver={e => { e.currentTarget.style.backgroundColor = '#5a5a5a'; e.currentTarget.style.borderColor = '#3b3b3b'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 59, 59, 0.6)'; }}
                onMouseOut={e => { e.currentTarget.style.backgroundColor = '#3b3b3b'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 59, 59, 0.4)'; }}
              >
                {submitting ? (isArabic ? 'جاري الإضافة...' : 'Adding...') : (isArabic ? 'إضافة الوظيفة' : 'Add Job')}
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Job List Pane */}
      <div style={{
        flex: 1,
        minWidth: isMobile ? 0 : 340,
        maxWidth: isMobile ? '100%' : 700,
        background: 'linear-gradient(135deg, #f9fafb 70%, #e6e6e6 100%)',
        border: '2px solid #e0e0e0',
        borderRadius: isMobile ? '16px' : '24px',
        boxShadow: isMobile ? '0 4px 16px rgba(12,75,59,0.10)' : '0 8px 32px rgba(12,75,59,0.12)',
        padding: isMobile ? '1.5rem 1rem' : '3rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        minHeight: 0,
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}>
        <div style={{
          background: 'white',
          borderRadius: 18,
          boxShadow: '0 6px 32px rgba(12,75,59,0.13)',
          padding: '2.2rem 2.2rem 2rem 2.2rem',
          border: '2px solid #c49a6c',
          minWidth: 320,
          maxWidth: 800,
          marginTop: 0,
          maxHeight: 520,
          overflowY: 'auto',
        }}>
          <h2 style={{
            color: '#0c4b3b',
            fontWeight: 900,
            marginBottom: '1.5rem',
            fontSize: '1.35rem',
            letterSpacing: '0.5px',
            textAlign: isArabic ? 'right' : 'left',
            background: 'white',
            zIndex: 2,
            position: 'relative',
          }}>{isArabic ? 'الوظائف الحالية' : 'Current Jobs'}</h2>
          {jobPostings.length === 0 ? (
            <div style={{ color: '#888', fontStyle: 'italic', marginBottom: '1rem', textAlign: 'center' }}>{isArabic ? 'لا توجد وظائف حالياً.' : 'No job postings yet.'}</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {jobPostings.map(job => (
                <div key={job.id} style={{
                  background: '#f9fafb',
                  border: '2px solid #e0e0e0',
                  borderRadius: '14px',
                  boxShadow: '0 2px 8px rgba(12,75,59,0.07)',
                  padding: isArabic ? '1.5rem 1.2rem 1.2rem 1.5rem' : '1.5rem 1.5rem 1.2rem 1.2rem',
                  position: 'relative',
                  transition: 'box-shadow 0.2s',
                  direction: isArabic ? 'rtl' : 'ltr',
                  marginBottom: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}>
                  <div style={{ fontWeight: 800, fontSize: '1.18rem', color: '#0c4b3b', marginBottom: '0.5rem', letterSpacing: '0.2px', textAlign: isArabic ? 'right' : 'left' }}>{job[isArabic ? 'title_ar' : 'title_en']}</div>
                  {/* REMOVE description preview here */}
                  <div style={{ color: '#c49a6c', fontWeight: 700, fontSize: '1.01rem', marginBottom: '0.7rem', textAlign: isArabic ? 'right' : 'left' }}>{job[isArabic ? 'location_ar' : 'location_en']}</div>
                  <div style={{ color: '#0c4b3b', fontWeight: 600, fontSize: '0.98rem', marginBottom: '0.5rem', textAlign: isArabic ? 'right' : 'left', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ background: '#e7f2ef', color: '#0c4b3b', borderRadius: 8, padding: '0.2rem 0.7rem', fontWeight: 700, fontSize: '0.95rem', marginRight: isArabic ? 0 : 8, marginLeft: isArabic ? 8 : 0 }}>
                      {isArabic ? 'عدد المتقدمين' : 'Applicants'}: {job.applicants ?? 0}
                    </span>
                  </div>
                  {/* View More button */}
                  {job[isArabic ? 'description_ar' : 'description_en']?.length > 80 && (
                    <button
                      onClick={() => setViewMoreJob(job)}
                      style={{ ...adminButtonStyle, opacity: submitting ? 0.7 : 1 }}
                      onMouseOver={e => { e.currentTarget.style.backgroundColor = '#5a5a5a'; e.currentTarget.style.borderColor = '#3b3b3b'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 59, 59, 0.6)'; }}
                      onMouseOut={e => { e.currentTarget.style.backgroundColor = '#3b3b3b'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 59, 59, 0.4)'; }}
                    >
                      {isArabic ? 'عرض المزيد' : 'View More'}
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteJob(job.id)}
                    style={{
                      position: 'absolute',
                      top: '1.1rem',
                      [isArabic ? 'left' : 'right']: '1.1rem',
                      background: '#c49a6c',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '0.45rem 1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      fontSize: '0.98rem',
                      boxShadow: '0 1px 4px rgba(12,75,59,0.08)',
                      transition: 'background 0.2s',
                    }}
                    onMouseOver={e => e.currentTarget.style.background = '#a65c32'}
                    onMouseOut={e => e.currentTarget.style.background = '#c49a6c'}
                  >
                    {isArabic ? 'حذف' : 'Delete'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Modal for View More */}
      {viewMoreJob && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.35)',
          zIndex: 3000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: 'white',
            borderRadius: 20,
            boxShadow: '0 12px 48px rgba(12,75,59,0.18)',
            padding: '2.5rem 2.5rem 2rem 2.5rem',
            minWidth: 400, maxWidth: 600, width: '100%',
            position: 'relative',
            textAlign: isArabic ? 'right' : 'left',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}>
            <button onClick={() => setViewMoreJob(null)} style={{ position: 'absolute', top: 18, right: 24, background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: '#888', padding: 0, lineHeight: 1, zIndex: 2 }}>&times;</button>
            <h2 style={{ color: '#0c4b3b', fontWeight: 800, marginBottom: '1.1rem', fontSize: '1.35rem', letterSpacing: '0.5px' }}>{viewMoreJob[isArabic ? 'title_ar' : 'title_en']}</h2>
            <div style={{ color: '#c49a6c', fontWeight: 700, fontSize: '1.08rem', marginBottom: '0.7rem' }}>{viewMoreJob[isArabic ? 'location_ar' : 'location_en']}</div>
            <div style={{ color: '#0c4b3b', fontWeight: 600, fontSize: '1.01rem', marginBottom: '1.2rem' }}>{isArabic ? 'عدد المتقدمين' : 'Applicants'}: {viewMoreJob.applicants ?? 0}</div>
            <div style={{ color: '#333', fontSize: '1.08rem', fontWeight: 500, lineHeight: 1.7, marginBottom: '0.5rem' }}>
              <div dangerouslySetInnerHTML={{ __html: viewMoreJob[isArabic ? 'description_ar' : 'description_en'] }} />
            </div>
          </div>
        </div>
      )}
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1100px) {
          .admin-flex-parent {
            flex-direction: column !important;
            gap: 2rem !important;
            padding: 0 0.5rem !important;
          }
          .admin-flex-parent > div {
            max-width: 100% !important;
            min-width: unset !important;
          }
        }
      `}</style>
    </div>
  )
}