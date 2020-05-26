import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */
const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
const CHANGE_CATEGORY = "CHANGE_CATEGORY";
const SAVE_CATEGORY = "SAVE_CATEGORY";
const FAIL_SAVE_CATEGORY = "FAIL_SAVE_CATEGORY";
const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
const FAIL_DELETE_CATEGORY_SUCCESS = "FAIL_DELETE_CATEGORY_SUCCESS";

export const actionTypes = { GET_CATEGORIES_SUCCESS, CHANGE_CATEGORY,SAVE_CATEGORY,FAIL_SAVE_CATEGORY,DELETE_CATEGORY_SUCCESS,FAIL_DELETE_CATEGORY_SUCCESS };

function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

function changeCategorySuccess(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

function saveCategorySuccess(category) {
  return { type: actionTypes.SAVE_CATEGORY, payload: category };
}

function failSaveCategorySuccess(category) {
  return { type: actionTypes.FAIL_SAVE_CATEGORY, payload: category };
}
function deleteCategorySuccess(category) {
  return { type: actionTypes.DELETE_CATEGORY_SUCCESS, payload: category };
}
function failDeleteCategorySuccess(category) {
  return { type: actionTypes.FAIL_DELETE_CATEGORY_SUCCESS, payload: category };
}
//Tüm kategorileri çeker
export function getCategories() {
  return function (dispatch) {
    let url = API + "category/getall";
    axios
      .get(url)
      .then((result) => {
        dispatch(getCategoriesSuccess(result.data));
      })
      .catch((error) => {
        console.log("CATEGORY GELMEDİ", error);
      });
  };
}
//seçilen kategoriye göre psot getirme işlemi
export function changeCategory(category) {
  return function (dispatch) {
    let url = API + "category/getbyId/?categoryId=" + category;
    axios
      .get(url)
      .then((result) => {
        dispatch(changeCategorySuccess(result.data));
      })
      .catch((error) => {
        console.log("CATEGORY GELMEDİ", error);
      });
  };
} 

//Kategori ekleme
export function saveCategory(category) {
  return function (dispatch) {
    let url = API + "category/add";
    axios
      .post(url, category)
      .then((response) => response.data)
      .then((result) => {
        dispatch(saveCategorySuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(failSaveCategorySuccess("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(failSaveCategorySuccess(error.response.data));
      });
  };
}

//Kategori silme
export function deleteCategory(category) {
  return function (dispatch) {
    let url = API + "category/delete";
    axios
      .post(url, category)
      .then((response) => response.data)
      .then((result) => {
        dispatch(deleteCategorySuccess(result));
      })
      .catch((error) => {
        if (error.response.data.status)
          dispatch(failDeleteCategorySuccess("BİLİNMEYEN HATA OLUŞTU"));
        else dispatch(failDeleteCategorySuccess(error.response.data));
      });
  };
}