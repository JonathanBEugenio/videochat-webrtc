import { Action } from "@reduxjs/toolkit";

const initialState  = {
    userDatils: null
};

const reducer = (state = initialState , action: Action) => {
    switch (action.type) {
        case 'DUMMY':
            return {...state};
        default:
            return state;
    }
}

export default reducer;