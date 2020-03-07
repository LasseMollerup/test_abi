import React from 'react';
import './App.css';

// Components
import Header from './header';
import Caracters from './caracters';
import Invite from './invite'

// Apollo Client
// import ApolloClient from 'apollo-boost';

// const client = new ApolloClient({
//   uri:
// });


function App() {
  return (
    <div className="App">
      <div className='body'>
        <Header/>
        <Caracters/>
        <Invite/>
      </div>
    </div>
  );
}

export default App;
