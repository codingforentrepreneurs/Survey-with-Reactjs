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
        case 'textarea':
            type = 'textarea'
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
    const inputProps = {
        className: 'form-control',
        onChange: handleChange,
        value: name,
        type: inputType,
        placeholder: props.placeholder ? props.placeholder : 'Your text...',
        name: props.name ? props.name : `${inputType}_${props.key}`
    }
    return inputType === 'textarea' ? 

        <textarea  
            {...inputProps}
        /> :

     <input 
        {...inputProps}
        />
}



const App = props => {
    return <div className='col-10 mx-auto text-center'>
        <h1>Hello There</h1>
        <SurveyInput placeholder='My Placeholder' name='first_name' />


        <SurveyInput type='textarea' placeholder='My Placeholder' name='first_name'  />

        <SurveyInput type='number' placeholder='My Placeholder' name='first_name'  />


        <SurveyInput type='email' placeholder='My Placeholder' name='first_name'  />
    </div>
}


export default App;