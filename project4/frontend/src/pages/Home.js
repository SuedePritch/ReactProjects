// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import useFetch from '../services/useFetch';
import Loading from '../components/Loading';


function Home() {
    // const navigate = useNavigate();
    // const {user} = useSelector((state) => state.auth)

    // useEffect(() =>{
    //     if(!user){
    //         navigate('/login')
    //     }
    // }, [user, navigate])


    const {data: meals, isPending, error} = useFetch('http://localhost:8000/api/meals');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div><Loading/></div>}
            {meals && <MealList meals={meals} title='All Meals' />}
            
        </div>
    );
}

export default Home;