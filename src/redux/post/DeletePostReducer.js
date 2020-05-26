import { actionTypes } from "./postActions";
const initialState = {
  message: null,
  postStatus: {
    postInProgress: -1,
    successfulPost: -1,
    postResponse: {},
  },
};
export default function DeletePostReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        postStatus: {
          ...state.postStatus,
          postInProgress: 0,
          successfulPost: 1,
          postResponse: action.payload,
        },
      };
    case actionTypes.DELETE_POST_UNSUCCESS:
      return {
        ...state,
        message: action.payload,
        postStatus: {
          ...state.postStatus,
          postInProgress: 0,
          successfulPost: 0,
          postResponse: action.payload,
        },
      };
    default:
      return state;
  }
}
