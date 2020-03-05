import React from 'react';
import './App.css';

// Components
import Header from './header';

// ApolloProvider
import { ApolloProvider } from 'react-apollo';

// ApolloCLient
import ApolloCLient from 'apollo-boost';

const client = new ApolloCLient({
  uri: 'https://anapioficeandfire.com/api/'
})

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Hello There</h2>
    </div>
  </ApolloProvider>
)

// function App() {
//   return (
//     <div className="App">
//       <div className='body'>
//         <Header/>
//       </div>
//     </div>
//   );
// }

export default App;
