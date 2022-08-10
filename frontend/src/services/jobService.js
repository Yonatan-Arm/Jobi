import { storageService } from "./async.service.js";
import { userService } from "./user.service.js";
import { utilService } from "./util.service.js";
export const jobService = {
  query,
  getJobById,
  remove,
  save,
  getEmptyJob,
};

const STORAGE_KEY = "jobs_db";
const Jobs = [
  {
    _id: "1d5s2",
    company: "inMange ",
    position: "Frontend developer",
    status: "rejected",
    description: "comapany of projects",
    importance: 2,
    createdAt: Date.now(),
    interviews: ["hr interview", "mission in company"],
  },
  {
    _id: "s5a6a",
    company: "Dateflow ",
    position: "Frontend developer",
    status: "applied",
    description: "comapany of projects",
    importance: 4,
    createdAt: Date.now(),
    interviews: [],
  },
  {
    _id: "25s6s",
    company: "slash ",
    position: "Frontend developer",
    status: "rejected",
    description: "comapany of projects",
    importance: 1,
    createdAt: Date.now(),
    interviews: ["hr interview", "mission in company"],
  },
];


async function query(filterValue) {
  try {
    // const tasks = await axios.get(TASK_URL, { params: filterValue })
    const tasks = await storageService.query(STORAGE_KEY);
    if (!tasks.length) {
      const jobs = await storageService.postMany(STORAGE_KEY, Jobs);
      return jobs;
    }
    return tasks;
  } catch (error) {
    throw new Error("error on quey FE", error);
  }
}

async function getJobById(jobs, id) {
  try {
    return jobs.find((job) => job._id === id);
  } catch (error) {
    throw new Error("error on getById FE", error);
  }
}

async function remove(user, id) {
  try {
    const idx = user.jobs.findIndex((entity) => entity._id === id);
    if (idx === -1)
      return Promise.reject(`Unknown Entity ${user.username} with Id: ${id}`);
    user.jobs.splice(idx, 1);
    return await userService.update(user);
  } catch (error) {
    throw new Error("error on remove Fe", error);
  }
}

async function save(user, job) {
  try {
    if(job._id) {
      const idx = user.jobs.findIndex(
        (j) => j._id === job._id
      );
      user.jobs.splice(idx, 1, job);
      return await userService.update(user);
    }
    else{
      job._id = await utilService.makeId()
      user.jobs.push(job)
      return await userService.update(user);
    }
  } catch (error) {
    throw new Error("error on save Job", error);
  }
}


function getEmptyJob() {
  return {
    _id: null,
    company: "",
    position: "",
    status: "applied",
    description: "",
    importance: 0,
    createdAt: Date.now(),
    interviews: [],
  };
}
