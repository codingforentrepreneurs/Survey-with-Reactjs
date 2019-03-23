import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

function App () {
  
  const [value, setValue] = useState(1)

 
  function addOne(){
    console.log('working...')
    setValue(value + 1)
  }
  return <div>
        <h1>Hello World {value}</h1>
        <button onClick={addOne}>Add 1</button>
    </div>
}

export default App;
