import { storageService } from "./async.service.js";
export const jobService = {
  query,
  getById,
  remove,
  save,
  getEmptyJob,
};

const STORAGE_KEY = "jobs_db";
const Jobs = [
  {
    id:'1d5s2',
    company: "inMange ",
    position: "Frontend developer",
    status: "rejected",
    description: "comapany of projects",
    importance: 2,
    createdAt: Date.now(),
    interviews: [
      "hr interview",
      "mission in company",
    ],
  },
  {
    id:'s5a6a',
    company: "Dateflow ",
    position: "Frontend developer",
    status: "applied",
    description: "comapany of projects",
    importance: 4,
    createdAt: Date.now(),
    interviews: [],
  },
  {
    id:'25s6s',
    company: "slash ",
    position: "Frontend developer",
    status: "rejected",
    description: "comapany of projects",
    importance: 1,
    createdAt: Date.now(),
    interviews: [ "hr interview",
    "mission in company",],
  },
];

// storageService.postMany(STORAGE_KEY, Jobs )

async function query(filterValue) {
  try {
    // const tasks = await axios.get(TASK_URL, { params: filterValue })
    const tasks = await storageService.query(STORAGE_KEY);
    if(!tasks.length){
      const jobs = await storageService.postMany(STORAGE_KEY, Jobs )
      return jobs
    }
    return tasks;
  } catch (error) {
    throw new Error("error on quey FE", error);
  }
}

async function getById(id) {
  try {
    // return await axios.get(TASK_URL + id).then((res) => res.data)
    return await storageService.get(STORAGE_KEY, id);
  } catch (error) {
    throw new Error("error on getById FE", error);
  }
}

async function remove(id) {
  try {
    // return await axios.delete(`${TASK_URL}${id}/`)
    return await storageService.remove(STORAGE_KEY, id);
  } catch (error) {
    throw new Error("error on remove Fe", error);
  }
}

async function save(job) {
  try {
    if (job.id) {
      // return await axios.put(`${TASK_URL}`, task)
      return await storageService.put(STORAGE_KEY, job);
    }
    // const addedTask = await axios.post(`${TASK_URL}`, { ...task })
    const addedJob = await storageService.post(STORAGE_KEY, job);
    return addedJob;
  } catch (error) {
    throw new Error("error on save Job", error);
  }
}

function getEmptyJob() {
  return {
    id:null,
    company: "",
    position: "",
    status: "applied",
    description: "",
    importance:0,
    createdAt: Date.now(),
    interviews: [],
  };
}
