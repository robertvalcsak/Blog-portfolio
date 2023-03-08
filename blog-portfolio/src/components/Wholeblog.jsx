import { CircularProgress } from '@mui/material';
import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import useFetch from '../FetchHook';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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
          <IconButton aria-label="delete" size="large">
            <DeleteIcon onClick={handleClick} fontSize="inherit" className="MuiButton" />
          </IconButton>
        </article>
      )}
    </div>
  )
}

export default Wholeblog
