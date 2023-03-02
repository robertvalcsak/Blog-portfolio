import { CircularProgress } from '@mui/material';
import React from 'react'
import {useParams} from "react-router-dom"
import useFetch from '../FetchHook';

function Wholeblog() {

  const {id} = useParams();
  const {loading, data : blogs} = useFetch("http://localhost:8000/blogs/" + id)

  return (
    <div className='whole-blog'>
      {loading ? <CircularProgress/> : (
        <>
        <h1>{blogs.title}</h1>
        <h2>{blogs.content}</h2>
        <h2>{blogs.author}</h2>
        </>
      )}
    </div>
  )
}

export default Wholeblog
