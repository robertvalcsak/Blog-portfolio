// import React, { useState } from 'react'

function Blogs({blogs, title}) {

    // const [content, setContent] = useState("false")

    // const handleClick = () => {
        
    // }

  return (
    <div className='blogs'>
        {/* <h2>{title}</h2> */}
        {blogs.map((blog) => (
            <div className="content" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
        ))}
    </div>
  )
}

export default Blogs
