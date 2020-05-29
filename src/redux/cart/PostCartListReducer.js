import { actionTypes } from "./PostCartActions";
const initialState = {
  cartList: [],
};
export default function PostCartListReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POSTCART_SUCCESS:
      return {
        ...state,
        cartList: action.payload, 
      };

    case actionTypes.GET_POSTCARTCATEGORY_SUCCESS:
      return {
        ...state,
        cartList: action.payload,
      };

      case actionTypes.GET_USER_POSTCART_SUCCESS:
        return {
          ...state,
          cartList: action.payload,
        };
    default:
      return state;
  }
}
