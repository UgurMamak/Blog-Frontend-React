import { actionTypes } from "./UserActions";
const initialState = {
  message: null,
  postStatus: {
    postInProgress: -1,
    successfulPost: -1,
    postResponse: {},
  },
};
export default function SavePostReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        postStatus: {
          ...state.postStatus,
          postInProgress: 0,
          successfulPost: 1, 
          postResponse: action.payload,
        },
      };
    case actionTypes.CREATE_POST_UNSUCCESS:
      return {
        ...state,
        message: action.payload,
        postStatus: {
          ...state.registerStatus,
          postProgress: 1,
          postRegister: 0,
          postResponse: action.payload,
        },
      };

    default:
      return state;
  }
}
