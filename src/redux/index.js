import { combineReducers } from "redux";
import CategoryListReducer from "./category/CategoryListReducer"
import SaveUserReducer from "./User/SaveUserReducer"
import LoginUserReducer from "./User/LoginUserReducer"

import PostCartListReducer from "./cart/PostCartListReducer"
import PostListReducer from "./post/PostListReducer"

const rootReducer = combineReducers({
    CategoryListReducer,
    SaveUserReducer,
    LoginUserReducer,
    PostCartListReducer,
    PostListReducer
    
  });
  
  export default rootReducer;