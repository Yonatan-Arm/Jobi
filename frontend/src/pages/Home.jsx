import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobList from "../components/JobList";
import { jobService } from "../services/jobService";
import fileAddLogo from '../assets/imgs/file-add.svg'
import JobModal from "../components/JobModal";
import { useSelector } from "react-redux";

export default function Home() {
  const [jobsToDisplay, setjobsToDisplay] = useState(null);
  const [jobToDisplay, setjobToDisplay] = useState(null);
  const [isJobSelceted, setisJobSelceted] = useState(null);
  const { jobs } = useSelector(({ jobModule }) => jobModule);

  useEffect(() => {
      setjobsToDisplay(jobs);
    return () => {
      setjobsToDisplay(null);
    };
  }, []);

  
  const onRemoveJob = async (id,ev) => {
    ev.stopPropagation()
    const jobs = await jobService.remove(id);
    setjobsToDisplay(jobs);
    if(isJobSelceted) setisJobSelceted(false)
  };

  const onSelectJob = async (id) => {
    const job = await jobService.getById(id);
    setjobToDisplay(job)
    setisJobSelceted(true)
  };

  const UnSelcetJob =  () => {
    setisJobSelceted(false)
  };


  return (
    <div className="home">
      <h2> Jobi -search your new job</h2>
      <Link className="add-btn"  to="edit"><img src={fileAddLogo} alt='add-logo' /> </Link>
      {jobsToDisplay && (
          <JobList jobs={jobsToDisplay} onRemoveJob={onRemoveJob} onSelectJob={onSelectJob} />
      )}
      {isJobSelceted && (
        <JobModal job={jobToDisplay} UnSelcetJob={UnSelcetJob} onRemoveJob={onRemoveJob} />
   
      )}
    </div>
  );
}
