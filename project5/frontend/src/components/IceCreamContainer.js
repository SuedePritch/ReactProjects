import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyIceCream } from '../redux/redux'

function IceCreamContainer() {
  const numOfIceCream = useSelector(state =>state.icecream.numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Ice Cream <br/>{numOfIceCream}</h2>
        <button onClick={()=> dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  )
}

export default IceCreamContainer