import { Link } from "react-router-dom";
const BlogList = ({blog, title}) => {
    return (
        <div className="bloglist">
            <h2 className="subtitle">{title}</h2>
            {blog.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                    <h3 > {blog.title} </h3>
                    <p>{blog.body}</p>
                    <small>by {blog.author} </small>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;