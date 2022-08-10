import { userService } from "../../services/user.service.js";

export function onLogin(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.login(credentials);
      dispatch({
        type: "SET_USER",
        user,
      });
      if (user.jobs) {
        let jobs = user.jobs;
        dispatch({
          type: "SET_JOBS",
          jobs,
        });
      }
      return user;
    } catch (err) {
      throw err;
    }
  };
}

export function onSignup(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.signup(credentials);
      dispatch({
        type: "SET_USER",
        user,
      });
      if (user.jobs) {
        let jobs = user.jobs;
        dispatch({
          type: "SET_JOBS",
          jobs,
        });
      }
      return user;
    } catch (err) {
      throw err;
    }
  };
}

export function onLogout() {
  return async (dispatch) => {
    try {
      await userService.logout();
      dispatch({
        type: "SET_USER",
        user: null,
      });
      dispatch({
        type: "SET_JOBS",
        jobs: null,
      });
    } catch (err) {
      throw err;
    }
  };
}
