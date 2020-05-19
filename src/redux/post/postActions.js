import { API } from "../../helpers/api-config";
import { GetWithUrl } from "../../helpers/url-helper";

/* Action Types */
const GET_POSTDETAIL_SUCCESS = "GET_POSTDETAIL_SUCCESS";
const GET_POSTDETAIL_UNSUCCESS = "GET_POSTDETAIL_UNSUCCESS";

export const actionTypes = { GET_POSTDETAIL_SUCCESS, GET_POSTDETAIL_UNSUCCESS };

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
};
