import React from "react";
import trash from "../assets/imgs/trash.svg";
import edit from "../assets/imgs/edit.svg";
import xSqure from "../assets/imgs/x-square.svg";
import check from "../assets/imgs/check.svg";
import { Link } from "react-router-dom";

export default function JobModal({ job, onRemoveJob, UnSelcetJob }) {
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
    <div className="job-modal modal-wrapper">
      <div className="modal-content flex column align-center">
        <div className="actions flex align-center justify-center">
          <img
            src={trash}
            alt="trash"
            title="trash"
            onClick={(ev) => onRemoveJob(job._id, ev)}
          />
          <Link to={`/edit/${job._id}`}>
            {" "}
            <img src={edit} alt="edit" title="edit" />
          </Link>
          <img
            src={xSqure}
            alt="xSqure"
            title="cancel"
            onClick={() => UnSelcetJob()}
          />
        </div>
        <span>company: {job.company}</span>
        <span>position: {job.position}</span>
        <span >status: <span style={{color : renderStatus()}}> {job.status}</span>
        </span>
        <span>description: {job.description}</span>
        <span>
          applied at: {new Date(job.createdAt).toLocaleDateString("IL")}
        </span>
        {job.interviews.length > 0 ? (
          <div className="interviews flex column">
            <span>  interviews :{" "} </span>
            {job.interviews.map((interview, idx) => {
               return (<span key={idx}> <img src={check} alt="check" /> {interview} </span>);
            })}
          </div>
        ) : (
          <span> No interviews yet..</span>
        )}
      </div>
    </div>
  );
}
