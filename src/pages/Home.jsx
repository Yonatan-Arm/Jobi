import React, { useEffect, useState } from 'react'
import JobList from '../components/JobList'
import { jobService } from '../services/jobService'

export default function Home() {
const [jobs, setJobs] = useState(null)
useEffect(() => {
     async function fetchData() {
      const jobsToDisplay = await  jobService.query()
      setJobs(jobsToDisplay)
    }
    fetchData();
  return () => {
    setJobs(null)
  }
}, [])


  const  onAddPlace = () =>{
    console.log('click')
  }

  return (
    <div className='home'>
        <h2 > Jobi -search your new job</h2>
        <button onClick={() => onAddPlace()}> add </button>
        {jobs  &&
        <div className=''>
          <JobList jobs={jobs} />
        </div>
      }
    </div>
  )
}