
import React from 'react';
import Title from './components/Header';
import Container from './components/AccountPage';
import Refresh from './components/refresh';
import "./App.css"
function App() {
  return (
    <center>
       <div className="ui raised segment">
     <Title/>
      <Container />
      <Refresh/>
    </div>
    </center>
   
  );
}

export default App;





