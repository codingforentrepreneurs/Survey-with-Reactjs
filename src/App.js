import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

function LikeBtn (props) {
  const [value, setValue] = useState(0)
  const defaultVerb = props.verb ? props.verb : "Like"
  let verb = props.children ? props.children : defaultVerb
  // condition statemet ? true : false
  function addOne(){
    setValue(value + 1)
    verb = 'Clicked'
  }
  return <button onClick={addOne}>{verb} {value}</button>
}


function App (props) {
    

    return <div>
      <LikeBtn url='https://cfe.sh'>
        Love
      </LikeBtn>

      <LikeBtn verb='Love' />

      <LikeBtn />

      <LikeBtn />
    </div>

}

export default App;
