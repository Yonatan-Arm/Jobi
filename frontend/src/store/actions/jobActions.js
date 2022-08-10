import { jobService } from "../../services/jobService.js";

export function setJobs(jobs) {
  return async (dispatch) => {
    try {
      dispatch({ type: "SET_JOBS", jobs });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function removeJob(jobId, user) {
  return async (dispatch) => {
    try {
      user = await jobService.remove(user, jobId);
      dispatch({ type: "REMOVE_JOB", jobId });
       dispatch({ type: "SET_USER", user });
       return user.jobs
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function addJob(job, user) {
  return async (dispatch) => {
    try {
      user = await jobService.save(user, job);
      let jobs = user.jobs
      dispatch({ type: "SET_JOBS", jobs });
      dispatch({ type: "SET_USER", user });
    } catch (err) {
      console.log("err:", err);
    }
  };
}



