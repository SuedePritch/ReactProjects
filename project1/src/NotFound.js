import { Link } from "react-router-dom";
const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Where ya trying to go to</h2>
            <p>This page doesnt exist</p>
            <Link to='/'>Go Home</Link>
        </div>
    );
}
 
export default NotFound;