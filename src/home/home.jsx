import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="page">
      <nav className="top-nav">
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
        </ul>
      </nav>
      <div className="main">
        <h1>Welcome to Underscore</h1>
        <h1>Classes</h1>
      </div>
      <div className="bottom">
        <button>
            <Link to="/classes">Continue to classes</Link>
        </button>
      </div>
      <div className="about_button">
        <button className="meow">
        <Link to="/about">About this classroom</Link>
        </button>
      </div>
    </div>
    </>
  )
}

export default Home
