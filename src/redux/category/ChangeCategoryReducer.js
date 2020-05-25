import { actionTypes } from "./CategoryActions";

const initialState = {
  currentCategory: {},
};

export default function ChangeCategoryReducer(
  state = initialState.currentCategory,
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
