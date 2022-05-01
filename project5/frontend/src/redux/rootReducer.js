import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/IceCreamReducer";
import hotdogReducer from "./hotdog/hotdogReducer";
import beerReducer from './beer/beerReducer'
import userReducer from './user/userReducer'
const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream: icecreamReducer,
    hotdog: hotdogReducer,
    beer: beerReducer,
    user: userReducer,
})

export default rootReducer