import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home'
import Login from './pages/login'


function App() {
  return (
    <Router>     
      <Routes>
        <Route exact path ='/' element={<Home />} />
        <Route exact path ='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}
 
export default App;
