import { actionTypes } from "./UserActions";
const initialState = {
  userInfo: [],
};

export default function UserListReducer(state = initialState.userInfo, action) {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      //console.log("GET_USER_SUCCESS",action.payload)
      return action.payload; 
     // return {userInfo:action.payload}
    default:
     // console.log("default",action.payload)
      return state;
  }
}
