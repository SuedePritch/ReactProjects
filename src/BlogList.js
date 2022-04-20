const BlogList = ({blog, title}) => {
    return (
        <div className="bloglist">
            <h2>{title}</h2>
            {blog.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h3> {blog.title} </h3>
                    <p>{blog.body}</p>
                    <small>by {blog.author} </small>
                </div>
            ))}
        </div>
    );
}

export default BlogList;