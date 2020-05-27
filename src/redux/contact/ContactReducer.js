import { actionTypes } from "./ContactActions";
const initialState = {
  contactStatus: {
    successfulContact: -1,
    message:""
  },
};

export default function ContactReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_MAIL_SUCCESS:
      //token döndüyse giriş işlemi doğrudur demek.
      return {
        ...state,
        contactStatus: {
          ...state.loginStatus,
          successfulContact:1,
          message:action.payload
        },
      };
      case actionTypes.CREATE_MAIL_UNSUCCESS:
        return {
            ...state,
            contactStatus: {
              ...state.loginStatus,
              successfulContact:0,
              message:action.payload
            },
          };
    default:
      return state;
  }
}

/*
export default function SaveUserReducer(state=initialState.loginUser,action)
{
    switch (action.type) {
        case actionTypes.GET_USER_LOGIN_SUCCESS:
          return action.payload;
        case actionTypes.POST_USER_LOGIN_SUCCESS:
          return (action.payload);
        default:
          return state;
      }
}
*/
