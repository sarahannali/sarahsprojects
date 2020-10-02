import React from 'react';
import './App.css';
import './app.scss';
import Home from './Pages/Home/Home';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
