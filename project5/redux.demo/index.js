const redux = require('redux')
const reduxLogger =require('redux-logger')


const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore
const logger = reduxLogger.createLogger()


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action creator
function buyCake(){
    //action is plain js object with a type property
    return {
        type: BUY_CAKE,
        info:'Cake purchase'
    }
}
function buyIceCream(){
    //action is plain js object with a type property
    return {
        type: BUY_ICECREAM,
        info:'Ice cream purchase'
    }
}

//reducer 
//specifies how the state changes when an action is recieved
//accepts state and action as arguments and returns the new state
//(previousState, action) =>newState

// const initialState = {
//     umOfCakes:10,
//     numOfIceCream:20
// }

const initialCakeState = {
    numOfCakes:10
}
const initialIceCreamState = {
    numOfIceCream:20
}
const cakeReducer = (state = initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ... state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) =>{
        switch(action.type){
        case BUY_ICECREAM: return{
            ... state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}


//Redux Store
//holds application state
//getState()
//dispatch(action) to update
//subscribe(listener)

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream: iceCreamReducer
})


const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()
