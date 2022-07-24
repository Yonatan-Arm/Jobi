import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobList from "../components/JobList";
import { jobService } from "../services/jobService";
import fileAddLogo from '../assets/imgs/file-add.svg'

export default function Home() {
  const [jobs, setJobs] = useState(null);

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


  const onRemoveJob = async (id) => {
    const jobs = await jobService.remove(id);
    setJobs(jobs);
  };
  return (
    <div className="home">
      <h2> Jobi -search your new job</h2>
      <Link className="add-btn"  to="edit"><img src={fileAddLogo} alt='add-logo' /> </Link>
      {jobs && (
          <JobList jobs={jobs} onRemoveJob={onRemoveJob} />
      )}
    </div>
  );
}
