import { AnyAction } from "@reduxjs/toolkit";
import authActions from "../actions/authAction";

const initialState = {
  userDatils: null
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload
      };
    default:
      return state;
  }
}

export default reducer;