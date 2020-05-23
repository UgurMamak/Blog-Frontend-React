import { actionTypes } from "./UserActions";
const initialState = {
  userInfo: [],
};

export default function UserListReducer(state = initialState.userInfo, action) {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      return action.payload; 
    default:
      return state;
  }
}
