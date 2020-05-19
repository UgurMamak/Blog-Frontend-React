import { API } from "../../helpers/api-config";
import { PostWithUrlBody } from "../../helpers/url-helper";

/* Action Types */
const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";

export const actionTypes = { CREATE_COMMENT_SUCCESS };

export function createCommentSuccess(comment) {
  return { type: actionTypes.CREATE_COMMENT_SUCCESS, payload:comment };
} 
 
export function saveComment(comment) {
  console.log("comment actiona geldi.");
  return (dispatch) => {
    PostWithUrlBody(API + "comment/add", comment)
      .then((response) => {
        if (response.status === 200) {console.log("comment actiondaki if e girdi.");
          return response.text();
        } else {console.log("comment actiondaki else e girdi.");
          return response.text();
        }
      })
      .then((responseJson) => {
        dispatch(createCommentSuccess(responseJson));
      })
      .catch((error) => console.log("Kayıt getirilirken hata oluştu.\n", error));
  };
}
