import { API } from "../../helpers/api-config";
import axios from "axios";
/* Action Types */
const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
export const actionTypes = { CREATE_COMMENT_SUCCESS };

export function createCommentSuccess(comment) {
  return { type: actionTypes.CREATE_COMMENT_SUCCESS, payload: comment };
}

export function saveComment(comment) {
  return function (dispatch) {
    let url = API + "comment/add";
    axios
      .post(url, comment)
      .then((response) => response.data)
      .then((result) => {
        dispatch(createCommentSuccess(result));
      })
      .catch((error) => {
        console.log("COMMENT EKLEMEDE HATA");
      });
  };
}
