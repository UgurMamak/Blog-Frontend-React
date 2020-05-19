import { API } from "../../helpers/api-config";

import { GetWithUrl } from "../../helpers/url-helper";

/* Action Types */
const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
const CHANGE_CATEGORY = "CHANGE_CATEGORY";

export const actionTypes = { GET_CATEGORIES_SUCCESS, CHANGE_CATEGORY };

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
  return function (dispatch) {
    GetWithUrl(API + "category/getall")
      .then((response) => {
        return response.json();
      })
      .then((response) => dispatch(getCategoriesSuccess(response)))
      .catch((error) => console.log("Error when fetch categories\n", error));
  };
}

//seçilen kategorinin bilgisini tutmak için oluşturuldu.
export function changeCategory2(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}
 

function changeCategorySuccess(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function changeCategory(category) {
  return function (dispatch) {
    GetWithUrl(API + "category/getbyId/?categoryId="+category)
      .then((response) => {
        return response.json();
      })
      .then((response) => dispatch(changeCategorySuccess(response)))
      .catch((error) => console.log("Error when fetch categories\n", error));
  };
}