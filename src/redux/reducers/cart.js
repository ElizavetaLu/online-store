import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_IN_CART,
    DECREMENT_IN_CART,
    ON_HAND_CHANGE_IN_CART,
    CLEAN_UP_CART
} from "../actions/types"

const initialState = []


const cart = (state = initialState, { type, allData, value, title }) => {
    switch (type) {
        case ADD_TO_CART: {
            const exist = state.find(elem => elem.title === allData.title);
            if (exist) {
                return state.map((element =>
                    element.title === allData.title
                        ? {
                            ...exist,
                            qty: exist.qty + value || 1,
                        }
                        : element
                ))
            } else return [...state, { ...allData, qty: value }]
        }

        case INCREMENT_IN_CART: {
            const item = state.find(elem => elem.title === title);
            item.qty = Number((item.qty + 1).toFixed(2))

            return [...state]
        }

        case DECREMENT_IN_CART: {
            const item = state.find(elem => elem.title === title);
            if (item.qty === 0) return [...state]

            item.qty = Number((item.qty - 1).toFixed(2))
            return [...state]
        }

        case ON_HAND_CHANGE_IN_CART: {
            const item = state.find(elem => elem.title === title);

            item.qty = Number(value)
            return [...state]
        }

        case REMOVE_FROM_CART: {
            return [...state.filter(elem => elem.title !== title)]
        }

        case CLEAN_UP_CART: {
            state = []
            return state
        }

        default: return state
    }
}

export default cart
