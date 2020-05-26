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

//post
import PostCartListReducer from "./cart/PostCartListReducer"
import PostListReducer from "./post/PostListReducer"
import DeletePostReducer from "./post/DeletePostReducer"

//comment
import SaveCommentReducer from "./comment/SaveCommentReducer"

//LikePost
import LikePostReducer from "./likePost/LikePostReducer"

import CkEditorReducer from "./ckEditor/CkEditorReducer"

const rootReducer = combineReducers({

    CategoryListReducer,
    ChangeCategoryReducer,
    CategorySaveReducer,

    SaveUserReducer,
    LoginUserReducer,
    UserListReducer,
    UpdateUserReducer,
    
    PostCartListReducer,
    PostListReducer,
    DeletePostReducer ,
  
    SaveCommentReducer,

    LikePostReducer,

    CkEditorReducer,
    


  });
  
  export default rootReducer;