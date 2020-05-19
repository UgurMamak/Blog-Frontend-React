import { combineReducers } from "redux";

//category
import CategoryListReducer from "./category/CategoryListReducer"
import ChangeCategoryReducer from "./category/ChangeCategoryReducer"

//user
import SaveUserReducer from "./User/SaveUserReducer"
import LoginUserReducer from "./User/LoginUserReducer"

//post
import PostCartListReducer from "./cart/PostCartListReducer"
import PostListReducer from "./post/PostListReducer"

//comment
import SaveCommentReducer from "./comment/SaveCommentReducer"

//LikePost
import LikePostReducer from "./likePost/LikePostReducer"

const rootReducer = combineReducers({

    CategoryListReducer,
    ChangeCategoryReducer,

    SaveUserReducer,
    LoginUserReducer,
    
    PostCartListReducer,
    PostListReducer,
  
    SaveCommentReducer,

    LikePostReducer

  });
  
  export default rootReducer;