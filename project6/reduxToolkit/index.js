const store = require('./app/store')
const cakeActions = require('./features/cake/Cake.slice').cakeActions
const icecreamActions = require('./features/icecream/Icecream.slice').icecreamActions


console.log('InitialState ', store.getState());
const unsubscribe = store.subscribe(() =>{
    console.log('Updated State', store.getState());
})

store.dispatch(cakeActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))
store.dispatch(icecreamActions.restocked(5))

unsubscribe()

