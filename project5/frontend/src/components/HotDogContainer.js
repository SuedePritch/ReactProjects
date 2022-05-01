import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyHotDog } from '../redux/redux'

function HotDogContainer() {
  const numOfHotDogs = useSelector(state =>state.hotdog.numOfHotDogs)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Hot Dogs <br/>{numOfHotDogs}</h2>
        <button onClick={()=> dispatch(buyHotDog())}>Buy Pack of Hot Dogs</button>
    </div>
  )
}

export default HotDogContainer