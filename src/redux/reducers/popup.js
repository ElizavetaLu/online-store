import { SHOW_POPUP, SET_POPUP_TEXT } from "../actions/types";

const initialState = {
    isActive: false,
    message: '',
}

const popup = (state = initialState, { type, payload }) => {
    switch (type) {

        case SHOW_POPUP:
            return {
                ...state,
                isActive: payload
            }

        case SET_POPUP_TEXT:
            return {
                ...state,
                message: payload
            }

        default:
            return state;
    }
}

export default popup