import React from 'react'
import trash from '../assets/imgs/trash.svg'

export default function JobCard({job}) {
  return (
    <div className='job-card flex column'>
        <img src={trash} alt="trash" title="trash" />
        <span> {job.company}</span>
        <span>position: {job.position}</span>
        <span> status: {job.status}</span>
        <span> description: {job.description}</span>
        <span> applied at : {new Date(job.createdAt).toLocaleDateString('IL')}</span>

    </div>
  )
}


// {new Date(dateobject ).toLocaleDateString()}