import React from "react";
import trash from "../assets/imgs/trash.svg";
import edit from "../assets/imgs/edit.svg";
import { Link } from 'react-router-dom'

export default function JobCard({ job, onRemoveJob, onSelectJob  }) {
   const renderImportance = () => {
    switch(job.importance) {
      case '0':
        return '#acb8c6';
        case '1':
          return '#4d99e9';
      case '2':
        return '#ab9745';
      case '3':
        return '#ff2525';
      default:
        return 'grey';
    }
  }
   const renderStatus = () => {
    switch(job.status) {
      case 'applied':
        return '#4d99e9';
        case 'rejected':
          return '#e13450';
      case 'interviews':
        return '#3e7b1c';
      default:
        return 'grey';
    }
  }

  return (
    <div className="job-card flex column" onClick={()=>onSelectJob(job._id)}  >
      <div className="actions flex  justify-center row">
      <span style={{background : renderImportance()}} className="importance"></span>
      <img src={trash} alt="trash" title="trash" onClick={(ev)=>onRemoveJob(job._id,ev)} />
      <Link to={`/edit/${job._id}`}>  <img src={edit} alt="edit" title="edit"/></Link>
      </div>
      <span> {job.company}</span>
      <span>position: {job.position}</span>
      <span> status: {job.status}</span>
      <span> description: {job.description}</span>
      <span>
        {" "}
        applied at : {new Date(job.createdAt).toLocaleDateString("IL")}
      </span>
      <span className="status" style={{color : renderStatus()}}> {job.status}</span>
    </div>
  );
}
