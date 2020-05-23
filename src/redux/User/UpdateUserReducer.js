import { actionTypes } from "./UserActions";

const initialState = {
  updateMessage: null,
};
export default function UpdateUserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_USER_SUCCESS:
      return { updateMessage: action.payload };
    default:
      return state;
  }
}
