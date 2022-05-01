import {BUY_BEER} from './beerTypes'

const initialState = {
    numOfBeer: 96
}

const beerReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_BEER: return{
            ...state,
            numOfBeer: state.numOfBeer - 6
        }
        default: return state
    }
}

export default beerReducer