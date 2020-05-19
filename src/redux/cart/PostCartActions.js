import { API } from "../../helpers/api-config";
import { GetWithUrl } from "../../helpers/url-helper";

/* Action Types */
const GET_POSTCART_SUCCESS = "GET_POSTCART_SUCCESS";
const GET_POSTCARTCATEGORY_SUCCESS = "GET_POSTCARTCATEGORY_SUCCESS ";
export const actionTypes = {
  GET_POSTCART_SUCCESS,
  GET_POSTCARTCATEGORY_SUCCESS,
};

function getPostCartSuccess(postCart) {
  return { type: actionTypes.GET_POSTCART_SUCCESS, payload: postCart };
}

function getPostCartCategorySuccess(postCart) {
  return { type: actionTypes.GET_POSTCARTCATEGORY_SUCCESS , payload: postCart };
}
 
//Tüm postları çeker.
export function getPostCart() {
  return function (dispatch) {
    GetWithUrl(API + "postCategory/getall2")
      .then((response) => {
        return response.json();
      })
      .then((response) => dispatch(getPostCartSuccess(response)))
      .catch((error) => console.log("post cartları getirilemedi.\n", error));
  };
}

//categorye göre post listeleme işlemi
export function getPostCartCategory(categoryId) {console.log("buraya geldi")
  return function (dispatch) {
    GetWithUrl(API + "postCategory/getbycategoryId/?categoryId="+categoryId)
      .then((response) => {
        return response.json();
      })
      .then((response) => dispatch(getPostCartCategorySuccess(response)))
      .catch((error) => console.log("categorye ait postlar gelince hata oluştu .\n", error));
  };
}
 