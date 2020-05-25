import { API } from "../../helpers/api-config";
import axios from "axios";
/* Action Types */
const GET_POSTCART_SUCCESS = "GET_POSTCART_SUCCESS";
const GET_POSTCARTCATEGORY_SUCCESS = "GET_POSTCARTCATEGORY_SUCCESS ";
const GET_USER_POSTCART_SUCCESS = "GET_USER_POSTCART_SUCCESS ";
export const actionTypes = {
  GET_POSTCART_SUCCESS,
  GET_POSTCARTCATEGORY_SUCCESS,
  GET_USER_POSTCART_SUCCESS 
};

function getPostCartSuccess(postCart) {
  return { type: actionTypes.GET_POSTCART_SUCCESS, payload: postCart };
}

function getPostCartCategorySuccess(postCart) {
  return { type: actionTypes.GET_POSTCARTCATEGORY_SUCCESS, payload: postCart };
}

function getUserPostCartSuccess(postCart) {
  return { type: actionTypes.GET_USER_POSTCART_SUCCESS, payload: postCart };
}

//Tüm post cartlarını çeker.
export function getPostCart() {
  return function (dispatch) {
    let url = API + "postCategory/getall2";
    axios
      .get(url)
      .then((result) => {
        dispatch(getPostCartSuccess(result.data));
      })
      .catch((error) => {
        console.log("POST CARTLAR GELMEDİ", error);
      });
  };
}

//Categorye göre listeleme işlemi
export function getPostCartCategory(categoryId) {
  return function (dispatch) {
    let url = API + "postCategory/getbycategoryId/?categoryId=" + categoryId;
    axios.get(url).then((result) => {
      dispatch(getPostCartCategorySuccess(result.data));
    });
  };
}


//User a göre listeleme işlemi
export function getUserPostCart(userId) {
  return function (dispatch) {
    let url = API + "postCategory/getbyuserId/?userId=" + userId;
    axios.get(url).then((result) => {
      dispatch(getUserPostCartSuccess(result.data));
    });
  };
}