import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobService } from "../services/jobService";
import { useForm } from '../hooks/useForm'
import backBtn from '../assets/imgs/back.svg'

export default function JobEdit() {
  const [job,handleChange, setJob] = useForm(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    const job = id ? await jobService.getById(id) : jobService.getEmptyJob();
    setJob(job);
  };

  const onSaveJob = async (ev) => {
    ev.preventDefault()
    if(!job.company) return 
    await jobService.save({...job})
    navigate("/")
}

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



  if (!job) return <div>load...</div>;

  return (
      <section className='edit'>
            <h2>{job.id ? 'Edit' : 'Add'} job</h2>
            <img src={backBtn} alt="back" className="back-btn" onClick={() => navigate("/")} title="back" />
            <form onSubmit={onSaveJob}  className="flex column">  
              <div  className="flex column">
                <label htmlFor="company">company</label>
                <input  onChange={handleChange} value={job.company} type="text" name="company" id="company" />
              </div>
              <div  className="flex column">
                <label htmlFor="position">position</label>
                <input  onChange={handleChange} value={job.position} type="text" name="position" id="position" />
              </div>
              <div  className="flex column">
                <label htmlFor="description">description</label>
                <input  onChange={handleChange} value={job.description} type="text" name="description" id="description" />
              </div>
              <div className="flex row line">      
              <div className="flex column">
                <label htmlFor="status">status</label>
                <select onChange={handleChange} value={job.status} name="status" id="status">
                    <option value="" disabled> status</option>
                    <option value='applied'>applied</option>
                    <option value="rejected">rejected</option>
                    <option value="interviews">interviews</option>
                </select>
              </div>
              
              <div className="flex column">
                <label htmlFor="importance">importance</label>
                <select onChange={handleChange} value={job.importance} name="importance" id="importance">
                    <option value="" disabled>importance</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
              <span style={{background : renderImportance()}} className="importance"></span>
              </div>
              </div>
                <button>Save</button>
            </form>
       </section>

  );
}
