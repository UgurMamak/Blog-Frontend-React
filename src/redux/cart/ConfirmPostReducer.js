import { actionTypes } from "./PostCartActions";
const initialState = {
  confirmposts:[],
};
export default function ConfirmPostReducer(state = initialState, action) {
  switch (action.type) {

      case actionTypes.GET_CONFIRM_POST_SUCCESS:  
      return { 
        ...state,
        confirmposts:action.payload,
      };

    default:
      return state;
  }
}
