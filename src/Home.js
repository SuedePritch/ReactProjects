import {useState} from 'react';

const Home = () => {
    const [blog, setBlog] = useState([
        {title: 'My New Website', body: 'lorem ipsum...', author: 'James Pritchard', id:1},
        {title: 'Welcome Party', body: 'lorem ipsum...', author: 'Bob Smith', id:2},
        {title: 'Basic React Blog', body: 'lorem ipsum...', author: 'Joanne Micheals', id:3},
        {title: 'Sample Blog Post', body: 'lorem ipsum...', author: 'Roger Johnson', id:4}
    ])

    return (
        <div className="home">
            {blog.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h3> {blog.title} </h3>
                    <small> by {blog.author} </small>
                </div>
            ))}
        </div>
    );
}

export default Home;