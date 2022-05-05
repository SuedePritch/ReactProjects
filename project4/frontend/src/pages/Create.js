import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux';

import MealForm from "../components/MealForm";
import {getMeals, reset} from '../services/mealSlice'

function Create() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)
    const {meals, isError, message} = useSelector((state) => state.meals)
  
    useEffect(() =>{
      if(isError){
        console.log(message);
      }
      if(!user){
          navigate('/login')
      }
      dispatch(getMeals())
  
      return () =>{
        dispatch(reset())
      }
    }, [user, navigate, isError, message, dispatch])
  

    return ( 
        <div className="create">
            <section className="heading">
                <h1>Welcome {user && user.name}</h1>
                <p>Create New Meal</p>
            </section>
            <MealForm/>
        </div>
            
    );
}

export default Create;