import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

function App (props) {
  
  const [value, setValue] = useState(0)
  console.log(props)
 
  function addOne(){
    console.log('working...')
    setValue(value + 1)
  }
  return <div>
        <button onClick={addOne}>Like {value}</button>
    </div>
}

export default App;
