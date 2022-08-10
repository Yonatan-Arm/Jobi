import { utilService } from "./util.service.js";
import { storageService } from "./async.service.js";
import { httpService } from "./http.service.js";
export const userService = {
  login,
  signup,
  logout,
  getLoggedinUser,
  getEmptyUser,
  update,
  add,
};

const LOGGEDIN_KEY = "LoggedInUser";
const STORAGE_KEY = "user_db";
const ENDPOINT = "user";

async function login(userInfo) {
  try {
    const user = await httpService.post("auth/login", userInfo);
    if (user) utilService.saveToSessionStorage(LOGGEDIN_KEY, user);;
      return user;
  } catch (err) {
    throw err;
  }
}
async function signup(user) {
  try {
    const userToSave = await httpService.post("auth/signup", user);
    utilService.saveToSessionStorage(LOGGEDIN_KEY, user);
    return userToSave;
  } catch {
    console.log("cant login");
  }
}
function getLoggedinUser() {
  return utilService.loadFromSessionStorage(LOGGEDIN_KEY);
}

async function logout() {
  try {
    return await utilService.removeFromSessionStorage(LOGGEDIN_KEY);
  } catch {
    console.log("logout failed");
  }
}



async function add(user) {
  return await httpService.post(ENDPOINT, user);
}

async function update(user) {
  try {
    return await httpService.put(`${ENDPOINT}/${user._id}`, user);
  } catch (err) {
    console.log("cannot update user", err);
  }
}


function getEmptyUser() {
  return {
    _id: null,
    username: "",
    password: "",
    jobs: [
      {
        _id: "1d5s2",
        company: "Meta ",
        position: "Frontend developer",
        status: "rejected",
        description: "comapany of projects",
        importance: 2,
        createdAt: Date.now(),
        interviews: ["hr interview", "mission in company"],
      },
      {
        _id: "s5a6a",
        company: "Microsoft ",
        position: "Fullstack developer",
        status: "applied",
        description: "comapany of projects",
        importance: 4,
        createdAt: Date.now(),
        interviews: [],
      },
      {
        _id: "25s6s",
        company: "Google ",
        position: "Frontend developer",
        status: "rejected",
        description: "comapany of websites",
        importance: 1,
        createdAt: Date.now(),
        interviews: ["hr interview", "mission in company"],
      },
    ],
  };
}


