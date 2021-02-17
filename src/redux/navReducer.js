import { ADD_BASKET, CHANGE_CONTENT } from "./types";

const initState = {
    page: 'main' 
}
export const navReducer = (state = initState, action) => {
    switch(action.type) {
        case CHANGE_CONTENT:
            return {...state, page: action.payload}
        default: return state;
    }
    return state;
}