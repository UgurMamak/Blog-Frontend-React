import { API } from "../../helpers/api-config";
import axios from "axios";
/* Action Types */
const ADD_LIKE_POST_SUCCESS = "CREATE_COMMENT_SUCCESS";
const GET_LIKE_POST_SUCCESS = "GET_LIKE_POST_SUCCESS";
const RESET_STATUS = "RESET_STATUS";

export const actionTypes = {
  ADD_LIKE_POST_SUCCESS,
  GET_LIKE_POST_SUCCESS,
  RESET_STATUS,
};

export function likePostAddSuccess(comment) {
  return { type: actionTypes.ADD_LIKE_POST_SUCCESS, payload: comment };
}

export function getLikeSuccess(likeStatus) {
  return { type: actionTypes.GET_LIKE_POST_SUCCESS, payload: likeStatus };
}

export function resetStatus() {
  return { type: actionTypes.RESET_STATUS };
}

//Posta like dislike olayında bulunmak için yazıldı
export function likePostAdd(likePost) {
  return function (dispatch) {
    let url = API + "likepost/add";
    axios
      .post(url, likePost)
      .then((response) => response.data)
      .then((result) => {
        dispatch(likePostAddSuccess(result));
      })
      .catch((error) => {
        console.log("LIKE POST OLAYINDA HATA OLDU");
      });
  };
}

//Posta ait like sayılarını döner
export function getLikeStatus(postId) {
  return function (dispatch) {
    let url = API + "likepost/getnumberstatus/?postId=" + postId;
    axios
      .get(url)
      .then((result) => {
        dispatch(getLikeSuccess(result.data));
      })
      .catch((error) => {
        console.log("LİKE SAYILARI GELMEDİ", error);
      });
  };
}
