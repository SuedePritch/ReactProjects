import {useState} from 'react';
import { useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blog, setBlog] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null)


    useEffect(() =>{
        setTimeout(() => {
            fetch('http://localhost:8000/blog')
        .then(res =>{
            if(!res.ok){
                throw Error('could not retrieve blog posts')
            }
            return res.json();
        }).then(data => {
            setBlog(data);
            setIsPending(false);
            setError(null);
        }).catch(err =>{
            setIsPending(false);
            setError(err.message);
            
        })
        }, 1000)
    }, 
    [])

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && <BlogList blog={blog} title='All Blogs' />}
            {blog && <BlogList blog={blog.filter((blog) => blog.author === 'James') } title="James' Posts"/>}
        </div>
    );
}

export default Home;