import React from 'react';
import logo from './logo.svg';


function App() {
  const buttonStyles : React.CSSProperties = {
    backgroundColor: '#5aac44',
    borderRadius: '3px',
    border:"none",
    boxShadow: 'none',
    height: '44px',
    width: '132px',
    color: '#fff',
    fontFamily: 'avenir next regular' 
  }
  return (
    <div className="App">
      <header className="App-header">
        <button style={buttonStyles}> click me</button>
      </header>
    </div>
  );
}

export default App;
