import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blog, setBlog] = useState([
        {id:1, title: 'My New Website', body: 'This is a beginner react project blog', author: 'James Pritchard'},
        {id:2, title: 'Welcome Party', body: 'Getcha party hats on because we are...', author: 'Bob Smith'},
        {id:3, title: 'Shrimp Gumbo Recipe', body: 'Good ole New Orleans Shrimp Gumbo...', author: 'James Pritchard'},
        {id:4, title: 'Basic React Blog', body: 'Examples of how to use React to...', author: 'Joanne Micheals'},
        {id:5, title: 'Sample Blog Post', body: 'I just got a new puppy. Her name is...', author: 'Roger Johnson'}
    ])
    const handleDelete = (id) => {
        const newBlogs  = blog.filter(blog => blog.id !== id);
        setBlog(newBlogs)
    }
    return (
        <div className="home">
            <BlogList blog={blog} title='All Blogs' handleDelete={handleDelete}/>
            <BlogList blog={blog.filter((blog) => blog.author === 'James Pritchard') } title="James' Posts" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;