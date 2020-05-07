import { combineReducers } from "redux";
import CategoryListReducer from "./category/CategoryListReducer"
import SaveUserReducer from "./User/SaveUserReducer"
import LoginUserReducer from "./User/LoginUserReducer"

const rootReducer = combineReducers({
    CategoryListReducer,
    SaveUserReducer,
    LoginUserReducer
    
  });
  
  export default rootReducer;