import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person={
    name:"Nazmus sakib",
    profession:"web Developer"
  }
  var person2={
    name:"salman shah",
    profession:"banglar famous hero"
  }
  var style={
    color:"blue",
    backgroundColor:"white",
    fontSize:"20px",
    padding:'30px',
    margin:"10px"

  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={style}>My credential is : {person.name+ " is a "+person.profession}</h1>
  
        <h2 style={{color:"white",backgroundColor:'cyan',padding:"40px",margin:"20px"}}>Hero of Bangladesh : {person2.name+" "+person2.profession}</h2>
       <a href="https://www.facebook.com/">my facebook link</a>
        <p>my first paragraph</p>
        <p>this is the paragraph that i written on her birthday</p>

      
      </header>
    </div>
        
  );
}

export default App;
