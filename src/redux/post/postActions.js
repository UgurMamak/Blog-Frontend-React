import { API } from "../../helpers/api-config";
import { GetWithUrl, PostWithUrlBodyImage,PostWithUrlBody } from "../../helpers/url-helper";

/* Action Types */
const GET_POSTDETAIL_SUCCESS = "GET_POSTDETAIL_SUCCESS";
const GET_POSTDETAIL_UNSUCCESS = "GET_POSTDETAIL_UNSUCCESS";

const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
const CREATE_POST_UNSUCCESS = "CREATE_POST_UNSUCCESS";

export const actionTypes = {
  GET_POSTDETAIL_SUCCESS,
  GET_POSTDETAIL_UNSUCCESS,
  CREATE_POST_SUCCESS,
  CREATE_POST_UNSUCCESS
};

function getPostDetailSuccess(postDetail) {
  return { type: actionTypes.GET_POSTDETAIL_SUCCESS, payload: postDetail };
}

function failPostDetail(postDetail) {
  return { type: actionTypes.GET_POSTDETAIL_UNSUCCESS, payload: postDetail };
}

//export const getPostDetail = (postId) => {
export function getPostDetail(postId) {
  return (dispatch) => {
    GetWithUrl(API + "post/getbypostId/?postId=" + postId)
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            dispatch(getPostDetailSuccess(data));
          });
        } else if (response.status === 400) {
          response.text().then((data) => {
            dispatch(failPostDetail(data));
          });
        }
      })
      .catch((error) => console.log("post detay getirilmedi \n", error));
  };
}

//POST SAVE
export function createPostSuccess(post) {
  return { type: actionTypes.CREATE_POST_SUCCESS, payload: post };
}

export function createPostUnSuccess(post) {
  return { type: actionTypes.CREATE_POST_UNSUCCESS, payload:post };
}

export function savePost(post) { 
  return (dispatch) => {
    PostWithUrlBodyImage(API + "post/add", post)
    //PostWithUrlBody(API + "post/add", post)
      .then((response) => {
        if (response.status === 200) {        
          response.text().then((responseJson) => {
            dispatch(createPostSuccess(responseJson));
          });
        } else {
          response.text().then((responseJson) => {
            dispatch(createPostUnSuccess(responseJson));
          });
        }
      }) 
      .catch((error) => console.log("Error when fetch register\n", error));
  };
}
