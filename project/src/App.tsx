import { useState,useEffect } from 'react';
import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import JobGrid from './components/JobGrid';
import PostJobModal from './components/PostJobModal';
import JobDetailModal from './components/JobDetailModal';
import { Job } from './types/Job';
import { ThemeProvider } from './contexts/ThemeContext';

//Refactor: Move mockJobs data and job filtering logic to separate modules

import { filterJobs } from './utils/filterJobs';


import { fetchJobs } from './services/jobService';






export interface FilterState {
  search: string;
  location: string;
  jobType: string;
  experience: string;
}

function App() {

  const [jobs,setJobs] = useState<Job[]>([]);

  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    location: '',
    jobType: '',
    experience: ''
  });

  useEffect(()=>{
    const loadJobs =async()=>{
      const jobData = await fetchJobs();
      //Test for jobData
      console.log("fetchJobs() called");
      console.log("Fetched jobs:", jobData);
      setJobs(jobData);
      setFilteredJobs(jobData);
    };
    loadJobs();
  },[])


  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    const filtered = filterJobs(jobs, newFilters);
    setFilteredJobs(filtered);
  };


  const handlePostJob = () => {
    setIsPostModalOpen(true);
  };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleCloseJobDetail = () => {
    setSelectedJob(null);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header onPostJob={handlePostJob} />
        <main className="container mx-auto px-6 py-8 max-w-6xl">
          <SearchFilters 
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          
          <JobGrid jobs={filteredJobs} onJobClick={handleJobClick} />
        </main>
        
        <PostJobModal 
          isOpen={isPostModalOpen}
          onClose={() => setIsPostModalOpen(false)}
        />

        <JobDetailModal 
          job={selectedJob}
          isOpen={!!selectedJob}
          onClose={handleCloseJobDetail}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;