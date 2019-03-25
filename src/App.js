import React, {useState} from 'react'


function verifyInputType (inputType) {
    let type = 'text'
    switch (inputType) {
        case 'email':
            type = 'email'
            break
        case 'number':
            type = 'number'
            break
        default:
            type = 'text'
    }
    return type
}


const SurveyInput = props => {
    const [name, setName] = useState('')
    const handleChange = event => {
        setName(event.target.value)
    }

    const inputType = verifyInputType(props.type)

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