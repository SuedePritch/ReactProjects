import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createMeal} from '../services/mealSlice'

function MealForm() {
  const [meal, setMeal] = useState(' ')

  const dispatch = useDispatch()

  


  const onSubmit = e =>{
    e.preventDefault()

    dispatch(createMeal({meal}))
    setMeal(' ')
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Meal</label>
          <input type="text" name='title' id='title' value={title} onChange={(e) => setMeal(e.target.value)}/>
        </div>
        <div className="form-group">
          <button className='btn btn-block' type='submit'>Add Meal</button>
        </div>
      </form>
    </section>
  )
}

export default MealForm