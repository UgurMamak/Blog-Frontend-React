import { actionTypes } from "./postActions";

const initialState = {
  postDetail: [],
  postDetailStatus: {
    successfulPost: -1, //login başarılı başarısız durumunu tespit etmek içn
    loginResponse: {},
  },
};
export default function PostListReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POSTDETAIL_SUCCESS:
      return {
        ...state,
        postDetail: action.payload,
        postDetailStatus: {
          ...state.postDetailStatus,
          successfulPost: 1,
        },
      };
    case actionTypes.GET_POSTDETAIL_UNSUCCESS:
      return {
        ...state,
        postDetail: action.payload,
        postDetailStatus: {
          ...state.postDetailStatus,
          successfulPost: 0,
        },
      };

    default:
      return state;
  }
}
