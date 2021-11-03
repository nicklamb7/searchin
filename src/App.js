import React from 'react';
import './App.css';
import Navbar from './app/components/Navbar';
import Sidebar from './app/components/Sidebar';
import Home from './app/components/Home';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
