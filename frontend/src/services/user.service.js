import { utilService } from "./util.service.js";
import { storageService } from "./async.service.js";
export const userService = {
  login,
  signup,
  logout,
  getLoggedinUser,
  getEmptyUser,
};

const LOGGEDIN_KEY = "LoggedInUser";
const STORAGE_KEY = "user_db";

async function login(userInfo) {
  try {
    const user = await getByUsername(userInfo.username, userInfo.password);
    console.log(user);
    if (!user) console.log("Invalid username or password");
    utilService.saveToSessionStorage(LOGGEDIN_KEY, user);
    return user;
  } catch {
    console.log("cant login");
  }
}
async function signup(user) {
  try {
    await storageService.post(STORAGE_KEY, user);
    utilService.saveToSessionStorage(LOGGEDIN_KEY, user);
    return user;
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

async function getByUsername(username, password) {
  try {
    const collection = await storageService.query(STORAGE_KEY);
    const user = await collection.filter(
      (user) => user.username === username && user.password === password
    );
    return user[0];
  } catch (err) {
    throw err;
  }
}

function getEmptyUser() {
  return {
    id: null,
    username: "",
    password: "",
    jobs: [
      {
        id: "1d5s2",
        company: "inMange ",
        position: "Frontend developer",
        status: "rejected",
        description: "comapany of projects",
        importance: 2,
        createdAt: Date.now(),
        interviews: ["hr interview", "mission in company"],
      },
      {
        id: "s5a6a",
        company: "Dateflow ",
        position: "Frontend developer",
        status: "applied",
        description: "comapany of projects",
        importance: 4,
        createdAt: Date.now(),
        interviews: [],
      },
      {
        id: "25s6s",
        company: "slash ",
        position: "Frontend developer",
        status: "rejected",
        description: "comapany of projects",
        importance: 1,
        createdAt: Date.now(),
        interviews: ["hr interview", "mission in company"],
      },
    ],
  };
}
