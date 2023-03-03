import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/")
    const page = { title, content, author };


    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      body: JSON.stringify(page),
      headers: { "Content-type": "application/json" }
    })
      .then((res) => res.json())
  };

  return (
    <div className='create'>
      <h1>New blog page</h1>
      <div className="add-blog">
        <form onSubmit={handleClick}>
          <label>Blog title:</label>
          <input type="text" required value={title} onChange={(event) => setTitle(event.target.value)} />
          <label>Blog content:</label>
          <textarea type="text" required value={content} onChange={(event) => setContent(event.target.value)}></textarea>
          <label>Blog author:</label>
          <input type="text" required value={author} onChange={(event) => setAuthor(event.target.value)}></input>
          <button>Add new blog to the page</button>
        </form>
      </div>
    </div>
  )
}

export default Create
