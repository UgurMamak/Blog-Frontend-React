import { actionTypes } from "./CommentActions";

const initialState = {
  message: null,
  commentStatus: {
    registerInProgress: -1,
    successfulComment: -1, //comment eklemenin başarısız olup olmadığını kontrol etmek için
    commentResponse: {},
  },
  deleteStatus: -1,
};

export default function SaveCommentReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_COMMENT_SUCCESS:
      if (action.payload.status === 200) {
        // console.log("reducerda ife girdi")
        return {
          ...state,
          commentStatus: {
            ...state.registerStatus,
            registerInProgress: 0,
            successfulComment: 1, //eklemenin başarılı olduğunu göstermek için
            commentResponse: action.payload,
          },
        };
      } else {
        // console.log("reducerda else girdi.")
        return {
          ...state,
          commentStatus: {
            ...state.registerStatus,
            registerInProgress: 0,
            successfulComment: 0, //eklemenin başarısız olduğunu göstermek için
            commentResponse: action.payload,
          },
        };
      }

    case actionTypes.DELETE_COMMENT_SUCCESS:
      return {
        deleteStatus: 1,
        messsage: action.payload,
      };
    case actionTypes.DELETE_COMMENT_FAIL:
      return {
        deleteStatus: 0,
        messsage: action.payload,
      };

    default:
      return state;
  }
}
