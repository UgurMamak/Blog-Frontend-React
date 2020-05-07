import { API } from "../../helpers/api-config";
import { PostWithUrlBody } from "../../helpers/url-helper";
/* Action Types */
//REGİSTER
const GET_USER_SUCCESS = "GET_USER_SUCCESS"; //userları listeleme işlemi için
const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS"; //yeni user eklemek için
const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"; //güncelleme işlemleri için
const RESET_REGISTER = "RESET_REGISTER";

//LOGIN
const GET_USER_LOGIN_SUCCESS = "GET_USER_LOGIN_SUCCESS";
const POST_USER_LOGIN_SUCCESS = "POST_USER_LOGIN_SUCCESS";
const RESET_LOGIN = "RESET_LOGIN";

export const actionTypes = {
  GET_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  GET_USER_LOGIN_SUCCESS,
  POST_USER_LOGIN_SUCCESS,
  RESET_LOGIN,
  RESET_REGISTER,
};

//------------------------REGISTER------------------------------------
export function getUsersSuccess(users) {
  return { type: actionTypes.GET_USER_SUCCESS, payload: users };
}

export function createUserSuccess(user) {
  return { type: actionTypes.CREATE_USER_SUCCESS, payload: user };
}

export function updateUserSuccess(user) {
  return { type: actionTypes.UPDATE_USER_SUCCESS, payload: user };
}

export function resetRegister() {
  return { type: actionTypes.RESET_REGISTER };
}

//------------------------LOGIN------------------------------------
export function getUserLoginSuccess(user) {
  return { type: actionTypes.GET_USER_LOGIN_SUCCESS, payload: user };
}

export function PostUserLoginSuccess(user) {
  return { type: actionTypes.POST_USER_LOGIN_SUCCESS, payload: user };
}

//Giriş bilgilerini temizlemek için
export function resetLogin() {
  return { type: actionTypes.RESET_LOGIN };
}

//REGISTER

export function saveUser(user) {
  return (dispatch) => {
    PostWithUrlBody(API + "auth/register", user)
      .then((response) => {
        if (response.status === 200) 
        {
          
          return response.json();
          //dispatch(createUserSuccess(response));
        } 
        else {
         
          return response.text();
          /*response.json().then((data) => {
            dispatch(createUserSuccess(data.message));
          });*/
        }
      })
      .then((responseJson) => {
        dispatch(createUserSuccess(responseJson));
      })
      .catch((error) => console.log("Error when fetch register\n", error));
  };
}



//LOGIN
export const LoginUser = (user) => {
  return (dispatch) => {
    //dispatch(initializeLogin());
    PostWithUrlBody(API + "auth/login", user)
      .then((response) => {
        if (response.status === 200) {
          //localStorage.setItem("Token",response.json())
          return response.json();
        } else {
          return response.text();
        }
      })
      .then((responseJson) => {
        dispatch(PostUserLoginSuccess(responseJson));
      })
      .catch((error) => console.log("Error when fetch register\n", error));
  };
};
