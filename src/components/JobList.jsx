import React from 'react'
import JobCard from './JobCard'

export default function JobList({jobs}) {
  return (
    <div className='cards-list simple-cards-grid '>
        {jobs.map((job) =>{
            return(
            <JobCard job={job} key={job.id} />
        )})}
        

    </div>
  )
}
