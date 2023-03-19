import logo from './logo.svg';
import './App.css';
import { Home,About } from './home';
import { Route, Routes, Navigate,Link } from "react-router-dom";
import {Main} from './mainPage';
// import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    
    <Routes>     
      
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/classes" element={<Main/>}/>
    
    </Routes>
   
  );
}

export default App;
