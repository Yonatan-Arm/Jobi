import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { jobService } from '../services/jobService';

export default function JobEdit() {
    const [job, setJob] = useState(null)
    const {id} = useParams()
    
    useEffect(() => {
        loadJob()
    }, [])


    const loadJob = async () => {
        const job = id ? await jobService.getById(id) : jobService.getEmptyJob()
        setJob(job)
    }
    if(!job) return <div>load...</div>

  return (
    <div>
       <div className="job-card flex column">
      <span> {job.company}</span>
      <span>position: {job.position}</span>
      <span> status: {job.status}</span>
      <span> description: {job.description}</span>
      <span>
        {" "}
        applied at : {new Date(job.createdAt).toLocaleDateString("IL")}
      </span>
    </div>
    </div>
  )
}
