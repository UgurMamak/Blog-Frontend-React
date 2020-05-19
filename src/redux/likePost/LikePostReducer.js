import { actionTypes } from "./LikePostActions";
 
const initialState = {
  likeValue:{trueNumber:0,falseNumber:0},
};
export default function LikePostReducer(state=initialState,action)
{
    switch (action.type) {
        case actionTypes.ADD_LIKE_POST_SUCCESS:
            console.log("add like post reducera geldi",action.payload)
            return {              
                likeValue:action.payload
            };
            case actionTypes.GET_LIKE_POST_SUCCESS:
            console.log("GET_LIKE_POST_SUCCESS reducera geldi",action.payload)
            return {              
                likeValue:action.payload
            }
        default:
           return state;
    } 
} 