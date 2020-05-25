import { API } from "../../helpers/api-config";
import axios from "axios";

/* Action Types */
const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
const CHANGE_CATEGORY = "CHANGE_CATEGORY";

export const actionTypes = { GET_CATEGORIES_SUCCESS, CHANGE_CATEGORY };

function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

/*
//seçilen kategorinin bilgisini tutmak için oluşturuldu.
export function changeCategory2(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}
 */

function changeCategorySuccess(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
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
