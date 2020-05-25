import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

//import "./helpers/callie/css/bootstrap.min.css"
//import "./helpers/callie/css/style.css"

import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import 'alertifyjs/build/css/alertify.min.css'
import  setAuthorizationToken  from "./helpers/setAuthorizationToken";

const jwtToken = localStorage.getItem("token");
if (jwtToken) {
    setAuthorizationToken(jwtToken);
}




const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
