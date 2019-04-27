import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="card" style={{'backgroundColor': '#19a96'}}>hey</div>
    </div>
  );
}

export default App;
