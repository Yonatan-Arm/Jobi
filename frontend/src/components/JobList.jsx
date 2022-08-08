import React from 'react'
import JobCard from './JobCard'

export default function JobList({jobs, onRemoveJob,onSelectJob}) {
  return (
    <div className='cards-list simple-cards-grid '>
        {jobs.map((job) =>{
            return(
            <JobCard job={job}  onRemoveJob={onRemoveJob} onSelectJob={onSelectJob}  key={job.id} />
        )})}
        

    </div>
  )
}
