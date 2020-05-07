import {API} from "../../helpers/api-config";

import {GetWithUrl} from "../../helpers/url-helper";

/* Action Types */
const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";

export const actionTypes = { GET_CATEGORIES_SUCCESS};

function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

/* tüm kategorileri almak için*/ 
/*
export function getCategories() {
  return function(dispatch) {
    let url = API + "category/getall";
    
    return fetch(url)
      .then(response => response.json())//gelen data jsona çevrildi.
      .then(response => dispatch(getCategoriesSuccess(response)));
  };
}
*/

export function getCategories() {
  return function(dispatch){
    GetWithUrl(API + "category/getall")
      .then(response => {return response.json();})
      .then(response =>dispatch(getCategoriesSuccess(response)))
      .catch(error => console.log("Error when fetch categories\n", error));
  };
};