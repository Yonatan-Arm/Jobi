// import { jobService } from "../../services/jobService.js";

export function setJobs(jobs) {
  return async (dispatch) => {
    console.log('hi');
    try {
      dispatch({ type: "SET_JOBS", jobs });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

// export function removeJob(JobId, user) {
//   return async (dispatch) => {
//     try {
//       // user = await userService.removeFriends(user, friendId);
//       dispatch({ type: "SET_JOBS", user });
//       // await userService.remove(friendId);
//       return user;
//     } catch (err) {
//       console.log("err:", err);
//     }
//   };
// }
// export function removeFriendsFromList(JobId, user) {
//   return async (dispatch) => {
//     try {
//       // user = await userService.removeFriends(user, JobId);
//       dispatch({ type: "SET_USER", user });
//       return user;
//     } catch (err) {
//       console.log("err:", err);
//     }
//   };
// }

// export function AddFriends(id, user) {
//   return async (dispatch) => {
//     try {
//       // user = await userService.addFriends(user, id);
//       dispatch({ type: "SET_JOBS", user });
//       return user;
//     } catch (err) {
//       console.log("err:", err);
//     }
//   };
// }
