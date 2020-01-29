import { BUY_CAKES } from "./cakeTypes"

const initialState = {
    numOfCakes: 10
}
const cakeReducer = (state=initialState, action) => {
    switch (action.type) {
        case BUY_CAKES: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        default: return state
    }
}

export default cakeReducer
