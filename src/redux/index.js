import { combineReducers } from "redux";

//category
import CategoryListReducer from "./category/CategoryListReducer"
import ChangeCategoryReducer from "./category/ChangeCategoryReducer"

//user
import SaveUserReducer from "./User/SaveUserReducer"
import LoginUserReducer from "./User/LoginUserReducer"
import UserListReducer from "./User/UserListReducer"
import UpdateUserReducer from "./User/UpdateUserReducer"

//post
import PostCartListReducer from "./cart/PostCartListReducer"
import PostListReducer from "./post/PostListReducer"

//comment
import SaveCommentReducer from "./comment/SaveCommentReducer"

//LikePost
import LikePostReducer from "./likePost/LikePostReducer"

import CkEditorReducer from "./ckEditor/CkEditorReducer"

const rootReducer = combineReducers({

    CategoryListReducer,
    ChangeCategoryReducer,

    SaveUserReducer,
    LoginUserReducer,
    UserListReducer,
    UpdateUserReducer,
    
    PostCartListReducer,
    PostListReducer,
  
    SaveCommentReducer,

    LikePostReducer,

    CkEditorReducer

  });
  
  export default rootReducer;