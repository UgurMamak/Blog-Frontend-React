import {actionTypes} from "./CategoryActions";
//import initialState from "../initialState";

const initialState={
    categories:[]
}
export default function CategoryListReducer(state=initialState.categories,action)
{
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload;
        default:
           return state;
    }
}