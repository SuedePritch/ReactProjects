import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createMeal} from '../services/mealSlice'

function MealForm() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [recipe, setRecipe] = useState('')
  const [ingredients, setIngredients] = useState('')
  // const meal = {title, category, recipe, ingredients};
  

  const dispatch = useDispatch()

  


  const onSubmit = e =>{
    e.preventDefault()

    dispatch(createMeal({title, category, recipe, ingredients}))
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit} value='meal'>
          <label htmlFor="title">Meal Title</label>
          <input type="text" name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
          <br />
          <label htmlFor="category">Category</label>
          <input type="text" name='category' id='category' value={category} onChange={(e) => setCategory(e.target.value)}/>
          <br />
          <label htmlFor="recipe">Meal Recipe</label>
          <input type="textarea" name='recipe' id='recipe' value={recipe} onChange={(e) => setRecipe(e.target.value)}/>
          <br />
          <label htmlFor="ingredients">Ingredients</label>
          <input type="text" name='ingredients' id='ingredients' value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
        <div className="form-group">
          <button className='btn btn-block' type='submit'>Add Meal</button>
        </div>
      </form>
    </section>
  )
}

export default MealForm