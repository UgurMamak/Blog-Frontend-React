import { API } from "../../helpers/api-config";
import axios from "axios";
/* Action Types */
const GET_POSTCART_SUCCESS = "GET_POSTCART_SUCCESS";
const GET_POSTCARTCATEGORY_SUCCESS = "GET_POSTCARTCATEGORY_SUCCESS ";
const GET_USER_POSTCART_SUCCESS = "GET_USER_POSTCART_SUCCESS ";
const GET_POPULAR_POST_SUCCESS = "GET_POPULAR_POST_SUCCESS";
const GET_CONFIRM_POST_SUCCESS = "GET_CONFIRM_POST_SUCCESS ";
export const actionTypes = {
  GET_POSTCART_SUCCESS,
  GET_POSTCARTCATEGORY_SUCCESS,
  GET_USER_POSTCART_SUCCESS,
  GET_POPULAR_POST_SUCCESS,
  GET_CONFIRM_POST_SUCCESS 
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

function getPopularPostSuccess(postCart) {
  return { type: actionTypes.GET_POPULAR_POST_SUCCESS, payload: postCart };
}
function getConfirmPostSuccess(postCart) {
  return { type: actionTypes.GET_CONFIRM_POST_SUCCESS , payload: postCart };
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
   
//popüler postları çeker.
export function getPopularPost() {
  return function (dispatch) {
    let url = API + "postCategory/popularpost";
    axios
      .get(url)
      .then((result) => {
        dispatch( getPopularPostSuccess(result.data));
      })
      .catch((error) => {
        console.log("POPULAR POSTLAR GELMEDİ", error);
      });
  };
}

//isactive i false olan postları admine listelemek için yaptm.
export function getConfirmPost() {
  return function (dispatch) {
    let url = API + "postCategory/confirmpost";
    axios
      .get(url) 
      .then((result) => {
        dispatch( getConfirmPostSuccess(result.data));
      })
      .catch((error) => {
        console.log("POPULAR POSTLAR GELMEDİ", error);
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


//User a göre listeleme işlemi onaylanan postlar
export function getUserPostCart(userId) {
  return function (dispatch) {
    let url = API + "postCategory/getbyuserId/?userId=" + userId;
    axios.get(url).then((result) => {
      dispatch(getUserPostCartSuccess(result.data));
    });
  };
}

//User a göre onay bekleyen postları listeler
export function getWaitConfirmPost(userId) {
  return function (dispatch) {
    let url = API + "postCategory/waitconfirm/?userId=" + userId;
    axios.get(url).then((result) => {
      dispatch(getUserPostCartSuccess(result.data));
    });
  };
}


//User a göre adminin geçersiz dediği postlar
export function getInvalidPost(userId) {
  return function (dispatch) {
    let url = API + "postCategory/invalidpost/?userId=" + userId;
    axios.get(url).then((result) => {
      dispatch(getUserPostCartSuccess(result.data));
    });
  };
}

//post category slme
export function deletePostCategory(category) {
  return function (dispatch) {
    let url = API + "postCategory/delete";
    axios
      .post(url, category)
      .catch((error) => {console.log("POST CATEGORY DELETE İŞLEMİNDE HATA",error)});
  };
}