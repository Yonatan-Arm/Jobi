import { userService } from "../../services/user.service.js";

// const guestUser = {
//   _id: '1',
//   fullname: 'Guest',
//   username: 'guest@gmail.com',
// }

const initialState = {
  //   user: userService.getLoggedinUser() || guestUser,
  user: userService.getLoggedinUser(),
  users: [],
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return  { ...state, user: action.user  };
      default:
        return state;
    }
  };
