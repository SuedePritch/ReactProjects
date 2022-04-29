import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const [title, setTitle]= useState('');
    const [recipe, setRecipe]= useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const meal = {title, recipe};
        
        setIsPending(true);

        fetch('http://localhost:8000/api/meals', {
            method:'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(meal)
        }).then(() => {
            console.log('new meal added');
            setIsPending(false);
            navigate("/");
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new Meal</h2>
            <form onSubmit={handleSubmit}>
                <label>Meal Title</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Recipe</label>
                <textarea
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
                />
                {!isPending && <button>Add Meal</button>}
                {isPending && <button disabled>Uploading..</button>}
            </form>
        </div>
    );
}

export default Create;