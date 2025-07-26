import { Job } from '../types/Job';
import { mockJobs } from '../data/mockJobs';
import { FilterState } from '../App';
import { filterJobs } from '../utils/filterJobs';

export const fetchJobs = async (): Promise<Job[]> => {
  return mockJobs; 
};

export const fetchFilteredJobs = async (filters: FilterState): Promise<Job[]> => {
  const allJobs = await fetchJobs();
  return filterJobs(allJobs, filters);
};
