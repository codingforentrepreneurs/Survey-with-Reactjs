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

const useInputChange = customValue => {
    const [value, setValue] = useState(customValue ? customValue : '')
    const handleChange = event => {
        setValue(event.target.value)
    }
    return {
        value: value,
        handleChange: handleChange
    }
}


const SurveyInput = props => {
    const {value, handleChange} = useInputChange(props.defaultValue)
    const inputType = verifyInputType(props.type)
    const inputProps = {
        className: 'form-control',
        onChange: handleChange,
        value: value,
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


const myInputs = [
    {
        name: 'full_name',
        type: 'text',
        placeholder: "You full name..."
    },
    {
        name: 'email',
        type: 'email',
        placeholder: "hello@teamcfe.com"
    },
    {
        name: 'message',
        type: 'textarea',
        placeholder: "Your Message"
    }

]


const App = props => {
    const handleSubmit = (event) => {
        event.preventDefault()
        event.persist()
        

        // XMLHttpRequest()
        let formData = new FormData()
        for (let formInput of event.target.elements){
            if (formInput.name !== 'save_btn') {
                console.log(formInput.name, formInput.value)
                formData.append(formInput.name, formInput.value)
            }   
        }
    }
    return <div className='col-10 mx-auto text-center'>
        <h1>Hello There</h1>
        
        <form onSubmit={handleSubmit}>
            {myInputs.map((obj, index)=>{


                return <SurveyInput 
                    type={obj.type}
                    placeholder={obj.placeholder}
                    defaultValue={obj.defaultValue} 
                    name={obj.name}
                    key={`input-${index}`}
                     />
                   

                })

            }
            <button 
                    name='save_btn'
                    type='input' 
                    className='btn btn-primary my-5'>Save</button>
        </form>
        
    </div>
}


export default App;