import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';  // هذا يربط ملف CSS اللي فيه الخلفية

const App = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Paradise Nursery</h1>
        <Link to="/products">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default App;
