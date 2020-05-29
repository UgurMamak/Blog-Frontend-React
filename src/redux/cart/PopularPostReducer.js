import { actionTypes } from "./PostCartActions";
const initialState = {

  popularposts:[],
};
export default function PopularPostReducer(state = initialState, action) {
  switch (action.type) {
      case actionTypes.GET_POPULAR_POST_SUCCESS:  
      return {
        ...state, 
       popularposts:action.payload,
      };
    default:
      return state;
  }
}
