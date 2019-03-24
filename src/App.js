import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
// import './App.css';

function Clock (props) {
  const [date, setDate] = useState(new Date())

  useEffect(()=>{
      let timerID = setInterval(() => {
        refreshClock()
      }, 1000)

      return () => {
        clearInterval(timerID)
      }
  })

  function refreshClock () {
    setDate(new Date())
  }
  return <div>
    The time is {date.toLocaleTimeString()}
  </div>
}

function LikeBtn (props) {
  const [value, setValue] = useState(0)
  const defaultVerb = props.verb ? props.verb : "Like"
  const initialVerb = props.children ? props.children : defaultVerb
  const [verb, setVerb] = useState(initialVerb)
  
  // condition statemet ? true : false
  function addOne(){
    console.log(props)
    setValue(value + 1)
    setVerb('Clicked')
  }
  return <button onClick={addOne}>{verb} {value}</button>
}


function App (props) {
    

    return <div>

      <Clock />

      <LikeBtn url='https://cfe.sh'>
        Love
      </LikeBtn>

      <LikeBtn verb='Love' />

      <LikeBtn />

      <LikeBtn />
    </div>

}

export default App;
