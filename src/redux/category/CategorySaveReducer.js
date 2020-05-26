import { actionTypes } from "./CategoryActions";

const initialState = {
  message:"",
  categoryStatus: {
    categoryInProgress: -1,
    successfulCategory: -1, 
    categoryResponse: {},
  },
};

export default function CategorySaveReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_CATEGORY:
        return {
            ...state,
            categoryStatus: { 
              ...state.categoryStatus,
              categoryInProgress: 0,
              successfulCategory: 1,
              categoryResponse: action.payload
            }
          }; 

          case actionTypes.FAIL_SAVE_CATEGORY:
            return {
                ...state,
                message: action.payload,
                categoryStatus: {
                  ...state.categoryStatus,
                  categoryInProgress: 0,
                  successfulCategory: 0,
                  categoryResponse: action.payload
                }
              }; 



    default:
      return state;
  }
}
