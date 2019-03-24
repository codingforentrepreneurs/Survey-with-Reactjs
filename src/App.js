import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

function LikeBtn (props) {
  const [value, setValue] = useState(0)
  console.log(props)
  const verb = props.children
  function addOne(){
    setValue(value + 1)
  }
  return <button onClick={addOne}>{verb} {value}</button>
}


function App (props) {
    

    return <div>
      <LikeBtn url='https://cfe.sh'>
        Love
      </LikeBtn>

      <LikeBtn />

      <LikeBtn />

      <LikeBtn />
    </div>

}

export default App;
