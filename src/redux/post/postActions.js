import { API } from "../../helpers/api-config";
import {
  GetWithUrl,
  PostWithUrlBodyImage,
  PostWithUrlBody,
} from "../../helpers/url-helper";
import axios from "axios";

/* Action Types */
const GET_POSTDETAIL_SUCCESS = "GET_POSTDETAIL_SUCCESS";
const GET_POSTDETAIL_UNSUCCESS = "GET_POSTDETAIL_UNSUCCESS";

const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
const CREATE_POST_UNSUCCESS = "CREATE_POST_UNSUCCESS";

export const actionTypes = {
  GET_POSTDETAIL_SUCCESS,
  GET_POSTDETAIL_UNSUCCESS,
  CREATE_POST_SUCCESS,
  CREATE_POST_UNSUCCESS,
};

//GET POST DETAİL
function getPostDetailSuccess(postDetail) {
  return { type: actionTypes.GET_POSTDETAIL_SUCCESS, payload: postDetail };
}

function failPostDetail(postDetail) {
  return { type: actionTypes.GET_POSTDETAIL_UNSUCCESS, payload: postDetail };
}

//CREATE POST
//POST SAVE
export function createPostSuccess(post) {
  return { type: actionTypes.CREATE_POST_SUCCESS, payload: post };
}

export function createPostUnSuccess(post) {
  return { type: actionTypes.CREATE_POST_UNSUCCESS, payload: post };
}

export function getPostDetail(postId) {
  return function (dispatch) {
    let url = API + "post/getbypostId/?postId=" + postId;
    axios
      .get(url)
      //.then(response=>{ console.log("data",response.statusText);})
      .then((result) => {
        dispatch(getPostDetailSuccess(result.data));
      })
      .catch((error) => {
        console.log("POST DETAY BİLGİLERİ GELMEDİ");
        dispatch(failPostDetail(error.response));
        //dispatch(failPostDetail(error.response.data));

      });
  };
}
 
export function savePost(post) {
  return function (dispatch) {
    let url = API + "post/add";
    axios
      .post(url, post)
      .then((response) => response.data)
      .then((result) => {
        dispatch(createPostSuccess(result));
      })
      .catch((error) => {
        console.log("POST EKLERKEN HATA");
        dispatch(createPostUnSuccess(error.response.data));
      });
  };
}
