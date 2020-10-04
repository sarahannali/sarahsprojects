import React from 'react';
import './App.css';
import './app.scss';
import Home from './Pages/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import CheatSheets from './Pages/CheatSheets/CheatSheets';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <CheatSheets />
    </div>
  );
}

export default App;
