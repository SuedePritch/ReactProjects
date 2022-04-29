import { Link } from "react-router-dom";
import './MealList.css'
const MealList = ({meals, title}) => {
    return (
        <div className="meallist">
            {meals.map((meals)=>(
                <div className="meals-preview" key={meals._id}>
                    <Link to={`/meals/${meals.id}`}>
                    <h3> {meals.title} </h3>
                    <p>{meals.category}</p>
                    {/* <p>{meals.recipe}</p>
                    <p className="ingredients">{meals.ingredients.drySection}</p>
                    <p className="ingredients">{meals.ingredients.produceSection}</p>
                    <p className="ingredients">{meals.ingredients.meatSection}</p>
                    <p className="ingredients">{meals.ingredients.dairySection}</p>
                    <p className="ingredients">{meals.ingredients.spiceSection}</p> */}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default MealList;