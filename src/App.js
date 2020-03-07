import React from 'react';
import './App.css';

// Components
import Header from './header';
import Caracters from './caracters';






function App() {
  return (
    <div className="App">
      <div className='body'>
        <Header/>
        <Caracters/>
        {/* <CaracterSection/> */}
      </div>
    </div>
  );
}

export default App;
