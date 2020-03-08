import React, { useState } from 'react';
import './App.css';

// Components
import Header from './header';
import Caracters from './caracters';


  function App() {

    // State and function to see if invite button has been pressed
    const [InviteBeenClicked, setInviteBeenClicked] = useState(false)

    const handleInviteClick = () => {
      if (InviteBeenClicked === false){
        setInviteBeenClicked(true)
      }
      else if(InviteBeenClicked === true) { 
        setInviteBeenClicked(false)
      } 
  }

  return (
    <div className="App">
      <div className='body'>
        <Header/>
        <Caracters handleInviteClick={handleInviteClick} InviteBeenClicked={InviteBeenClicked}/>
      </div>
    </div>
  );
}

export default App;
