import { Link } from "react-router-dom"

function Blogs({ blogs }) {


  return (
    <div className='blogs'>
      {blogs.map((blog) => (
        <div className="content" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Blogs
