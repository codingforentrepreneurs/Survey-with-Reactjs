import React, {useState} from 'react'

const SurveyInput = props => {
    const [name, setName] = useState('')
    const [inputType, setType] = useState(props.type ? props.type : 'text')
    const handleChange = event => {
        setName(event.target.value)
    }

    return  <input 
        onChange={handleChange}
        value={name}
        type={inputType} 
        placeholder='Your Name'
        name='full_name' />
}



const App = props => {
    return <div className='col-10 mx-auto text-center'>
        <h1>Hello There</h1>
        <SurveyInput />

        <SurveyInput type='number' />


        <SurveyInput type='email' />
    </div>
}


export default App;