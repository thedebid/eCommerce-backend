import { UserActionTypes } from "./../actions/user.action";
const intialState = {
  isLoading: false,
  users: [],
};

export const userReducer = (state = intialState, action) => {
  console.log("at reducers >>", action);
  switch (action.type) {
    case UserActionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case UserActionTypes.PRODUCT_RECEIVED:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
