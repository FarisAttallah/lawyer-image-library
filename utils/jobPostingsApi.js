import { supabase } from './supabaseClient'

// Fetch all job postings
export async function fetchJobPostings() {
  const { data, error } = await supabase.from('jobs').select('*').order('id', { ascending: false })
  if (error) throw error
  return data
}

// Add a new job posting
export async function addJobPosting(job) {
  const { error } = await supabase.from('jobs').insert([job])
  if (error) throw error
  return true
}

// Delete a job posting by id
export async function deleteJobPosting(id) {
  const { error } = await supabase.from('jobs').delete().eq('id', id)
  if (error) throw error
  return true
} 
