import {useState} from 'react';

const Home = () => {
    const [blog, setBlog] = useState([
        {title: 'My New Website', body: 'This is a beginner react project blog', author: 'James Pritchard', id:1},
        {title: 'Welcome Party', body: 'Getcha party hats on because...', author: 'Bob Smith', id:2},
        {title: 'Basic React Blog', body: 'Examples of how to use React to...', author: 'Joanne Micheals', id:3},
        {title: 'Sample Blog Post', body: 'I just got a new puppy. Her name is...', author: 'Roger Johnson', id:4},
        {title: 'Shrimp Gumbo Recipe', body: 'Good ole New Orleans Shrimp Gumbo...', author: 'Claire Clark', id:5}
    ])

    return (
        <div className="home">
            {blog.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h3> {blog.title} </h3>
                    <p>{blog.body}</p>
                    <small> by {blog.author} </small>
                </div>
            ))}
        </div>
    );
}

export default Home;