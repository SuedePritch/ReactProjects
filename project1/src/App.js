import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './Create';
import NotFound from './NotFound'
import BlogDetails from './BlogDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/blog/:id" element={<BlogDetails/>}/>
            <Route path="*" element={<NotFound/>}/>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
