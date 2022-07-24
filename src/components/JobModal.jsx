import React from "react";
import trash from "../assets/imgs/trash.svg";
import edit from "../assets/imgs/edit.svg";
import xSqure from '../assets/imgs/x-square.svg'
import { Link } from 'react-router-dom'

export default function JobModal({ job,onRemoveJob,UnSelcetJob }) {
  return (
    <div className="job-modal modal-wrapper">
      <div className="modal-content flex column">
        <div className="actions flex align-center justify-center">
          <img
            src={trash}
            alt="trash"
            title="trash"
            onClick={(ev) => onRemoveJob(job.id, ev)}
          />
          <Link to={`edit/${job.id}`}>
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
        <span>status:{job.status}</span>
      </div>
    </div>
  );
}
