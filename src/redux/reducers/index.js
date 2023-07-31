import { combineReducers } from "redux";
import popup from "./popup"
import allData from "./allData"
import userLocation from "./userLocation"
import cart from "./cart"

const reducers = combineReducers({
    popup,
    allData,
    userLocation,
    cart
})

export default reducers