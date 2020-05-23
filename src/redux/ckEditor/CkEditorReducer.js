import { actionTypes } from "./CkEditorActions";
 
const initialState = {
  content:{}
};
export default function CkEditorReducer(state=initialState,action)
{
    switch (action.type) {
        case actionTypes.GET_EDITOR_CONTENT:
            return {              
                content:action.payload
            };       
        default:
           return state;
    } 
} 