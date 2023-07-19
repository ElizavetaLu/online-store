import {
    SHOW_POPUP,
    SET_POPUP_TEXT,
    GET_DATA,
    SET_DATA,
    SET_LOCATION,
    SET_CATEGORIES,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_IN_CART,
    DECREMENT_IN_CART,
    ON_HAND_CHANGE_IN_CART,
    CLEAN_UP_CART,
    SET_ELECTRONICS,
    SET_JEWELERY,
    SET_MEN_CLOTHING,
    SET_WOMEN_CLOTHING,
    SET_SELECTED_RATE_PRODUCTS,
    SET_ACTIVE_RATE,
} from "./types";


export const showPopup = payload => ({ type: SHOW_POPUP, payload })
export const setPopupText = payload => ({ type: SET_POPUP_TEXT, payload })


export const getData = () => ({ type: GET_DATA })
export const setData = payload => ({
    type: SET_DATA,
    payload
})


export const setElectronics = payload => ({
    type: SET_ELECTRONICS,
    payload
})
export const setJewelery = payload => ({
    type: SET_JEWELERY,
    payload
})
export const setMenClothing = payload => ({
    type: SET_MEN_CLOTHING,
    payload
})
export const setWomenClothing = payload => ({
    type: SET_WOMEN_CLOTHING,
    payload
})

export const setSelectedRateProducts = payload => ({
    type: SET_SELECTED_RATE_PRODUCTS,
    payload
})
export const setActiveRate = payload => ({
    type: SET_ACTIVE_RATE,
    payload
})






export const setCategories = payload => ({
    type: SET_CATEGORIES,
    payload
})


export const setLocation = payload => ({
    type: SET_LOCATION,
    payload
})





export const addToCart = (allData, value = 1) => ({
    type: ADD_TO_CART,
    allData,
    value
})
export const removeFromCart = title => ({ type: REMOVE_FROM_CART, title })
export const incrementInCart = title => ({ type: INCREMENT_IN_CART, title })
export const decrementInCart = title => ({ type: DECREMENT_IN_CART, title })
export const onHandChangeInCart = (value, title) => ({
    type: ON_HAND_CHANGE_IN_CART,
    value,
    title
})
export const cleanUpCart = () => ({ type: CLEAN_UP_CART })
