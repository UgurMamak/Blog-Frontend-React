import { combineReducers } from "redux";

//category
import CategoryListReducer from "./category/CategoryListReducer"
import ChangeCategoryReducer from "./category/ChangeCategoryReducer"
import CategorySaveReducer from "./category/CategorySaveReducer"
//user
import SaveUserReducer from "./User/SaveUserReducer"
import LoginUserReducer from "./User/LoginUserReducer"
import UserListReducer from "./User/UserListReducer"
import UpdateUserReducer from "./User/UpdateUserReducer"
import UserInfoReducer from "./User/UserInfoReducer"

//post
import PostCartListReducer from "./cart/PostCartListReducer"
import PostListReducer from "./post/PostListReducer"
import DeletePostReducer from "./post/DeletePostReducer"
import PopularPostReducer from "./cart/PopularPostReducer"
import ConfirmPostReducer from "./cart/ConfirmPostReducer"

//comment
import SaveCommentReducer from "./comment/SaveCommentReducer"

//LikePost
import LikePostReducer from "./likePost/LikePostReducer"

import CkEditorReducer from "./ckEditor/CkEditorReducer"

import ContactReducer from "./contact/ContactReducer"

const rootReducer = combineReducers({

    CategoryListReducer,
    ChangeCategoryReducer,
    CategorySaveReducer,

    SaveUserReducer,
    LoginUserReducer,
    UserListReducer,
    UpdateUserReducer,
    UserInfoReducer,
    
    PostCartListReducer,
    PostListReducer,
    DeletePostReducer ,
    PopularPostReducer,
    ConfirmPostReducer,
  
    SaveCommentReducer,

    LikePostReducer,

    CkEditorReducer,

    ContactReducer
    


  });
  
  export default rootReducer;