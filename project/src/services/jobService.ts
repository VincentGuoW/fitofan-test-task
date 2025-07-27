import { Job } from '../types/Job';
import { mockJobs } from '../data/mockJobs';
import { FilterState } from '../App';
import { filterJobs } from '../utils/filterJobs';

//Add supabase as data resource. But if supabase crush back to mockJobs
import { supabase } from './supabaseClient';

export const fetchJobs = async (): Promise<Job[]> => {
  const { data, error } = await supabase
    .from('jobs')
    .select('*');


  if (error || !data|| data.length === 0) {
    console.warn('Supabase failed or returned empty. Falling back to mockJobs:', error?.message);
    return mockJobs;
  }

  const jobs: Job[] = data.map((job: any) => ({
    ...job,
    requirements: typeof job.requirements === 'string'
      ? job.requirements.split(';').map((req: string) => req.trim())
      : [],
  }));

  return jobs;
};

export const fetchFilteredJobs = async (filters: FilterState): Promise<Job[]> => {
  const allJobs = await fetchJobs();
  return filterJobs(allJobs, filters);
};
