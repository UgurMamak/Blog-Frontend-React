import { actionTypes } from "./UserActions";
//import initialState from "../initialState";

const initialState = {
  jsonToken: null,
  loginStatus: {
    loginInProgress: -1,//backend ile bağlantının oup olmadığını takip etmke için
    successfulLogin: -1,//login başarılı başarısız durumunu tespit etmek içn
    loginResponse: {},
  },
};

export default function LoginUserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_LOGIN_SUCCESS:
      return action.payload;
    case actionTypes.POST_USER_LOGIN_SUCCESS:
      if (action.payload.token) {
        //token döndüyse giriş işlemi doğrudur demek.
        return {
          ...state,
          jsonToken: action.payload, //token bilgisi json formatında
          loginStatus: {
            ...state.loginStatus,
            loginInProgress: 0,
            successfulLogin: 1,
          },
        };
      } else {
        return {
          ...state,
          jsonToken: null,
          message: action.payload, //işlemind neden başarılı oladığını döner.(hatalı giriş şifre yanlış gib)
          loginStatus: {
            ...state.loginStatus,
            loginInProgress: 1,
            successfulLogin: 0,
          },
        };
      }
    
    case actionTypes.RESET_LOGIN:
      return {
        ...state,
        loginStatus: {
          ...state.loginStatus,
          loginInProgress: -1,
          successfulLogin: -1,
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
