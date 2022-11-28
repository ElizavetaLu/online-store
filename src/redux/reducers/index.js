import { combineReducers } from "redux";
import allData from "./allData"
import userLocation from "./userLocation"
import cart from "./cart"

const reducers = combineReducers({
    allData,
    userLocation,
    cart
})

export default reducers