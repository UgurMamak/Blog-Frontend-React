import { API } from "../../helpers/api-config";
import { PostWithUrlBody,GetWithUrl } from "../../helpers/url-helper";

/* Action Types */
const ADD_LIKE_POST_SUCCESS = "CREATE_COMMENT_SUCCESS";
const GET_LIKE_POST_SUCCESS = "GET_LIKE_POST_SUCCESS";

export const actionTypes = { ADD_LIKE_POST_SUCCESS,GET_LIKE_POST_SUCCESS };

export function likePostAddSuccess(comment) {
  return { type: actionTypes.ADD_LIKE_POST_SUCCESS, payload:comment };
} 
 
export function likePostAdd(likePost) {
    console.log("like post actiona geldi.");
    return (dispatch) => {
      PostWithUrlBody(API + "likepost/add", likePost)
        .then((response) => {
          if (response.status === 200) {console.log("like post actiondaki if e girdi.");
            return response.json();
          } else {console.log("like post actiondaki else e girdi.");
            return response.json();
          } 
        })
        .then((responseJson) => {
          dispatch(likePostAddSuccess(responseJson));
        })
        .catch((error) => console.log("Kayıt getirilirken hata oluştu.\n", error));
    };
  }
     

  function getLikeSuccess(likeStatus) {
    return { type: actionTypes.GET_LIKE_POST_SUCCESS, payload: likeStatus };
  }
  export function getLikeStatus(postId) {
    return function (dispatch) {
      GetWithUrl(API + "likepost/getnumberstatus/?postId="+postId)
        .then((response) => {
          return response.json();
        })
        .then((response) => dispatch(getLikeSuccess(response)))
        .catch((error) => console.log("Error when fetch categories\n", error));
    };
  } 