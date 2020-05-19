import { API } from "../../helpers/api-config";
import {
  PostWithUrlBody,
  GetWithUrl,
  PostWithUrlBodyImage,
} from "../../helpers/url-helper";
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

const GET_IMAGE = "GET_IMAGE";
const POST_IMAGE = "POST_IMAGE";

export const actionTypes = {
  GET_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  GET_USER_LOGIN_SUCCESS,
  POST_USER_LOGIN_SUCCESS,
  RESET_LOGIN,
  RESET_REGISTER,
  GET_IMAGE,
  POST_IMAGE
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

export  function saveUser(user) {console.log("actions",user)
  return  (dispatch) => {
    PostWithUrlBodyImage(API + "auth/register", user)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return response.text();
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

//IMAGE SAVE
export  function saveUserImage(user) {
  return function(dispatch){
   PostWithUrlBodyImage(API + "deneme/uploadfile3", user)
  .then(response=> {return response.text();})
  .catch(error => console.log("Error when fetch categories\n", error));
  }
}

export function getImageSuccess(img) {
  return { type: actionTypes.GET_IMAGE, payload: img };
}

export function postImageSuccess(img) {
  return { type: actionTypes.POST_IMAGE, payload: img };
}

export function getResim() {
  return function(dispatch){
    GetWithUrl(API + "deneme/getimg")
     // .then(response => {return response.json();})
      .then(response => {return response.text();})

      .then(response =>dispatch(getImageSuccess(response)))
      
      .catch(error => console.log("Error when fetch categories\n", error));
  };
};