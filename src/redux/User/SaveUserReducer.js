import { actionTypes } from "./UserActions";
//import initialState from "../initialState";

const initialState = {
  savedUser: { d: "register değeri" },
  message: null,
  jsonToken: null,
  registerStatus: {
    registerInProgress: -1,
    successfulRegister: -1, //üye eklemenin durumunu listelemek için
    registerResponse: {},
  },

};
 
export default function SaveUserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_USER_SUCCESS:
        console.log("200",action.payload)
        return {
          ...state,
          registerStatus: {
            ...state.registerStatus,
            registerInProgress: 0,
            successfulRegister: 1,
            registerResponse: action.payload
          }
        };
      
      case actionTypes.CREATE_USER_UNSUCCESS:
        console.log("resucer else",action.payload)
        return {
          ...state,
          message: action.payload,
          registerStatus: {
            ...state.registerStatus,
            registerInProgress: 1,
            successfulRegister: 0,
            registerResponse: action.payload
          }
        };
      

    case actionTypes.RESET_REGISTER:
      return {
        ...state,
        registerStatus: {
          ...state.registerStatus,
          registerInProgress: -1,
          successfulRegister: -1,
          registerResponse: {},
        },
      };
      case actionTypes.GET_IMAGE: console.log(action.payload);
      return action.payload

      case actionTypes.POST_IMAGE: console.log(action.payload);
      return action.payload

    default:
      return state;
  }
} 
