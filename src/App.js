import React from 'react';
import './App.css';

// Components
import Header from './header';
import CaracterSection from './caracters'



function App() {
  return (
    <div className="App">
      <div className='body'>
        <Header/>
        <CaracterSection/>
      </div>
    </div>
  );
}

export default App;
