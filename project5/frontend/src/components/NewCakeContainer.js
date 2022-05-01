import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <div>
        <h2>Cakes<br/>{props.numOfCakes}</h2>
        <input type="range" id="vol" name="vol" min="1" max={props.numOfCakes} value={number} onChange={e=> setNumber(e.target.value)}/>
        <button onClick={()=> props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  )
}
const mapStateToProps = state => {
  return{
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    buyCake: number => dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  ) 
  (
  NewCakeContainer
  )