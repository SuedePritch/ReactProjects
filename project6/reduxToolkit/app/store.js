const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/Cake.slice')
const icecreamReducer = require('../features/icecream/Icecream.slice')

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    }
})


module.exports = store