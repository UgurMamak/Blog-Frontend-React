import { combineReducers } from "redux";
import CategoryListReducer from "./category/CategoryListReducer"
import SaveUserReducer from "./User/SaveUserReducer"
import LoginUserReducer from "./User/LoginUserReducer"

import PostCartListReducer from "./cart/PostCartListReducer"
import PostListReducer from "./post/PostListReducer"
import ChangeCategoryReducer from "./category/ChangeCategoryReducer"

const rootReducer = combineReducers({
    CategoryListReducer,
    SaveUserReducer,
    LoginUserReducer,
    PostCartListReducer,
    PostListReducer,
    ChangeCategoryReducer,
  });
  
  export default rootReducer;