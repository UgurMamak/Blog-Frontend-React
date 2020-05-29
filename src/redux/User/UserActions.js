import { API } from "../../helpers/api-config";
import { GetWithUrl, PostWithUrlBodyImage } from "../../helpers/url-helper";

import setAuthorizationToken from "../../helpers/setAuthorizationToken";
import axios from "axios";
import jwt from "jwt-decode";

/* Action Types */
//REGİSTER
const GET_USER_SUCCESS = "GET_USER_SUCCESS"; //userları listeleme işlemi için
const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS"; //yeni user eklemek için
const CREATE_USER_UNSUCCESS = "CREATE_USER_UNSUCCESS"; //yeni user eklemek için
const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"; //güncelleme işlemleri için
const RESET_REGISTER = "RESET_REGISTER";

//LOGIN
const GET_USER_LOGIN_SUCCESS = "GET_USER_LOGIN_SUCCESS";
const FAIL_LOGIN = "FAIL_LOGIN";
const POST_USER_LOGIN_SUCCESS = "POST_USER_LOGIN_SUCCESS";
const RESET_LOGIN = "RESET_LOGIN";

const GET_IMAGE = "GET_IMAGE";
const POST_IMAGE = "POST_IMAGE";


const GET_USER_INFO ="GET_USER_INFO"

export const actionTypes = {
  GET_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  GET_USER_LOGIN_SUCCESS,
  POST_USER_LOGIN_SUCCESS,
  RESET_LOGIN,
  RESET_REGISTER,
  GET_IMAGE,
  POST_IMAGE,
  CREATE_USER_UNSUCCESS,
  FAIL_LOGIN,
  GET_USER_INFO
};

//------------------------REGISTER------------------------------------
export function getUserSuccess(user) {
  return { type: actionTypes.GET_USER_SUCCESS, payload: user };
}

export function createUserSuccess(user) {
  return { type: actionTypes.CREATE_USER_SUCCESS, payload: user };
}
export function createUserUnSuccess(user) {
  return { type: actionTypes.CREATE_USER_UNSUCCESS, payload: user };
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
export function failLogin(user) {
  return { type: actionTypes.FAIL_LOGIN, payload: user };
}
//Giriş bilgilerini temizlemek için
export function resetLogin() {
  return { type: actionTypes.RESET_LOGIN };
}

//KULLANICI EKLEME İŞLEMİ
export function saveUser(user) {
  return function (dispatch) {
    let url = API + "auth/register";
    axios
      .post(url, user)
      .then((response) => response.data)
      .then((result) => {
        dispatch(createUserSuccess(result));
      })
      .catch((error) => {
        dispatch(createUserUnSuccess(error.response.data));
      });
  };
}

//---------------------LOGIN
export function LoginUser(user) {
  return function (dispatch) {
    let url = API + "auth/login";
    axios
      .post(url, user)
      .then((response) => response.data)
      .then((result) => {
        console.log("Buradaki", result);
        const token = result.token;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", result.userId);

        setAuthorizationToken(token);

        var role;
        result.role.map((m) => {
          if (m.name) role = m.name;
        });
        localStorage.setItem("role", role);

        dispatch(PostUserLoginSuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(failLogin("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(failLogin(error.response.data));
      });
  };
}

//---------------------USER BİLGİLERİ GETİRME
export function getUser(userId) {
  return function (dispatch) {
    let url = API + "user/getbyuserId/?userId=" + userId;
    axios
      .get(url)
      //.then(response=>{ console.log("data",response.statusText);})
      .then((result) => {
        dispatch(getUserSuccess(result.data));
      })
      .catch((error) => console.log("USER BİLGİSİ GELRKEN HATA", error));
  };
}

//USER Bilgi Güncelleme
export function updateUser(user) {
  return function (dispatch) {
    let url = API + "user/update";
    axios
      .post(url, user)
      .then((response) => response.data)
      .then((result) => {
        dispatch(updateUserSuccess(result));
      })
      .catch((error) => {
        console.log("USER GÜNCELLERKEN HATA", error);
      });
  };
}

//GET USER İNFO
export function userInfo(user) {console.log("user infoaction değeri",user)
  return { type: actionTypes.GET_USER_INFO, payload: user };
}
