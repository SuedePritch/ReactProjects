import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyBeer } from '../redux/redux'

function BeerContainer() {
  const numOfBeer = useSelector(state =>state.beer.numOfBeer)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Beer<br/>{numOfBeer}</h2>
        <button onClick={()=> dispatch(buyBeer())}>Buy Beer</button>
    </div>
  )
}

export default BeerContainer