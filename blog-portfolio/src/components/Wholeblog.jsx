import { CircularProgress } from '@mui/material';
import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import useFetch from '../FetchHook';

function Wholeblog() {

  const { id } = useParams();
  const { loading, data: blogs } = useFetch("http://localhost:8000/blogs/" + id)
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE"
    })
      .then((res) => res.json())
    navigate("/")
  }

  return (
    <div className='whole-blog'>
      {loading ? <CircularProgress /> : (
        <article>
          <h1>{blogs.title}</h1>
          <p>{blogs.content}</p>
          <h3>{blogs.author}</h3>
          <button onClick={handleClick}>Delete blog</button>
        </article>
      )}
    </div>
  )
}

export default Wholeblog
