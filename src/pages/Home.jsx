import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobList from "../components/JobList";
import { jobService } from "../services/jobService";
import fileAddLogo from '../assets/imgs/file-add.svg'
import JobCard from "../components/JobCard";
import JobModal from "../components/JobModal";

export default function Home() {
  const [jobs, setJobs] = useState(null);
  const [jobToDisplay, setjobToDisplay] = useState(false);
  const [isJobSelceted, setisJobSelceted] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const jobsToDisplay = await jobService.query();
      setJobs(jobsToDisplay);
    }
    fetchData();
    return () => {
      setJobs(null);
    };
  }, []);


  const onRemoveJob = async (id,ev) => {
    ev.stopPropagation()
    const jobs = await jobService.remove(id);
    setJobs(jobs);
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
      {jobs && (
          <JobList jobs={jobs} onRemoveJob={onRemoveJob} onSelectJob={onSelectJob} />
      )}
      {isJobSelceted && (
        <JobModal job={jobToDisplay} UnSelcetJob={UnSelcetJob} onRemoveJob={onRemoveJob} />
   
      )}
    </div>
  );
}
