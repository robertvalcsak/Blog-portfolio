import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Wholeblog from "./components/Wholeblog";
import image from "./images/background.jpg";

function App() {
  return (
    <BrowserRouter>
      <div className="App"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <Navbar />
        <div className="content-list">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<Wholeblog />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
