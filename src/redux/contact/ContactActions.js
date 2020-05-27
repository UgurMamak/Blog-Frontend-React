import { API } from "../../helpers/api-config";

import axios from "axios";

/* Action Types */
const CREATE_MAIL_SUCCESS = "CREATE_MAIL_SUCCESS";
const CREATE_MAIL_UNSUCCESS = "CREATE_MAIL_UNSUCCESS";

export const actionTypes = {
  CREATE_MAIL_SUCCESS,
  CREATE_MAIL_UNSUCCESS,
};

//POST MAIL
function createMailSuccess(mail) {
  return { type: actionTypes.CREATE_MAIL_SUCCESS, payload: mail };
}
function createMailUnSuccess(mail) {
    return { type: actionTypes.CREATE_MAIL_UNSUCCESS, payload: mail };
  }

export function createMail(mail) {
  return function (dispatch) {
    let url = API + "mail/mailsend";
    axios
      .post(url, mail) 
      .then((response) => response.data)
      .then((result) => {
        dispatch(createMailSuccess(result));
      })
      .catch((error) => {
        dispatch(createMailUnSuccess(error.response.data));
      });
  };
}
