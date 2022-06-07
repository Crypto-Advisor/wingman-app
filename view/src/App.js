import React from 'react';
import './App.css';
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Route exact path ='/' element={<Home />} />
      </Router>
    </div>
  );
}
 
export default App;
