import { SET_LOCATION } from "../actions/types"


const initialState = []

const userLocation = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOCATION:

      return state = payload
  
    default:
      return state
  }
}

export default userLocation