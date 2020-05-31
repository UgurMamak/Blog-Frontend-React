import { actionTypes } from "./UserActions";

const initialState = {
  updateMessage: null,
  successfulUpdate: -1

};
export default function UpdateUserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_USER_SUCCESS:
      return { 
        successfulUpdate:1,
        updateMessage: action.payload };
      case actionTypes.UPDATE_USER_UNSUCCESS:
      return { 
        successfulUpdate:0,
        updateMessage: action.payload };
    default:
      return state;
  }
} 
