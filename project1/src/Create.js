import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const [title, setTitle]= useState('');
    const [body, setBody]= useState('');
    const [author, setAuthor]= useState('Bob');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        
        setIsPending(true);

        fetch('http://localhost:8000/blog', {
            method:'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate("/");
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                />
                <label>Blog Author</label>
                <select
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="James">James</option>
                    <option value="Bob">Bob</option>
                    <option value="Claire">Claire</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Uploading..</button>}
            </form>
            <h4>Preview</h4>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}

export default Create;