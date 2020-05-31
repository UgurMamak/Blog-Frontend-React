import { actionTypes } from "./LikePostActions";
const initialState = {
  //message: 0,
  likeValue: {},
  status:-1
};
export default function LikePostReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_LIKE_POST_SUCCESS:
      console.log("ADD_LIKE_POST_SUCCESS reducera geldi", action.payload);
      return {
        ...state,
        likeValue: action.payload,
        status:1
      };
    case actionTypes.GET_LIKE_POST_SUCCESS:
      console.log("GET_LIKE_POST_SUCCESS reducera geldi", action.payload); 
      return {
        ...state,
        likeValue: action.payload,
        status:-1
      };

      case actionTypes.RESET_STATUS:
        return {
          ...state,
          status:-1
        };
      
    default:
      return state;
  }
}

/*
const initialState = {
  jsonToken: null,
  userId:null,
  loginStatus: {
    loginInProgress: -1,//backend ile bağlantının oup olmadığını takip etmke için
    successfulLogin: -1,//login başarılı başarısız durumunu tespit etmek içn
    loginResponse: {},
  },
};

    return {  
          ...state,
          
          jsonToken: action.payload, //token bilgisi json formatında
          userId:action.payload.userId,
          loginStatus: {
            ...state.loginStatus,
            loginInProgress: 0,
            successfulLogin: 1,
          }, 
        };
*/