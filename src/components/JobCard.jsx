import React from "react";
import trash from "../assets/imgs/trash.svg";
import edit from "../assets/imgs/edit.svg";
import { Link } from 'react-router-dom'

export default function JobCard({ job, onRemoveJob }) {
  return (
    <div className="job-card flex column">
      <div className="actions row">
      <img src={trash} alt="trash" title="trash" onClick={()=>onRemoveJob(job.id)} />
      <Link to={`edit/${job.id}`}>  <img src={edit} alt="edit" title="edit"/></Link>
      </div>
      <span> {job.company}</span>
      <span>position: {job.position}</span>
      <span> status: {job.status}</span>
      <span> description: {job.description}</span>
      <span>
        {" "}
        applied at : {new Date(job.createdAt).toLocaleDateString("IL")}
      </span>
    </div>
  );
}
