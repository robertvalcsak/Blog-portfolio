import useFetch from "../FetchHook";
import Blogs from "./Blogs";
import { CircularProgress } from '@mui/material';

function Home() {
    const {loading, data: blogs} = useFetch("http://localhost:8000/blogs");

  return (
    <div className="Home">
      {loading ? <CircularProgress /> : <Blogs blogs={blogs} />}
    </div>
  );
}
 
export default Home;
