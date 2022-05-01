import { BUY_HOTDOG } from "./hotdogTypes"

const initialState = {
    numOfHotDogs: 48
}

const hotdogReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_HOTDOG: return{
            ...state,
            numOfHotDogs: state.numOfHotDogs -8
        }
        default: return state
        
    }
}

export default hotdogReducer