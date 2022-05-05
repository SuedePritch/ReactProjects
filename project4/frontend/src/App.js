import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
// import Create from './pages/Create'


function App() {
  return (
    <>
  <Router>
    <div className="container">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      
    </div>
  </Router>
  </>
  );
}

export default App;
