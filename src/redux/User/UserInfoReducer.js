import { actionTypes } from "./UserActions";
const initialState = {
  userInfo: {},
};

export default function UserInfoReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_INFO:
      return{userInfo:action.payload};  
    default:
      return state;
  }
}
