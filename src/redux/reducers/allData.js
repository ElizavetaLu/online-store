import {
  SET_DATA,
  SET_CATEGORIES,
  SET_ELECTRONICS,
  SET_JEWELERY,
  SET_MEN_CLOTHING,
  SET_WOMEN_CLOTHING,
  SET_SELECTED_RATE_PRODUCTS,
  SET_ACTIVE_RATE
} from "../actions/types"

const initialState = {
  categories: [],
  data: [],
  electronics: [],
  jewelery: [],
  menClothing: [],
  womanClothing: [],
  selectedRate: [],
  isActiveSelectedRate: false
}

const allData = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:

      return {
        ...state,
        data: [...payload]
      }
    case SET_CATEGORIES:

      return {
        ...state,
        categories: [...payload]
      }
    case SET_ELECTRONICS:

      return {
        ...state,
        electronics: [...payload]
      }
    case SET_JEWELERY:

      return {
        ...state,
        jewelery: [...payload]
      }
    case SET_MEN_CLOTHING:

      return {
        ...state,
        menClothing: [...payload]
      }
    case SET_WOMEN_CLOTHING:

      return {
        ...state,
        womanClothing: [...payload]
      }

    case SET_SELECTED_RATE_PRODUCTS:

      return {
        ...state,
        selectedRate: [...payload]
      }

    case SET_ACTIVE_RATE:

      return {
        ...state,
        isActiveSelectedRate: payload
      }

    default:
      return state
  }
}

export default allData