import React, { useEffect, useState } from 'react'
import Blogs from './Blogs';

function Home() {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    },[])
    
  return (
    <div className='Home'>
       {blogs &&  < Blogs blogs={blogs} /> }
    </div>
  )
}

export default Home
