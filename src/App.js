import React, {useState} from 'react'


function verifyTextInputType (inputType) {
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

const useInputChange = (customValue, callback) => {
    const [value, setValue] = useState(customValue ? customValue : '')
    const handleChange = event => {
        const newValue = event.target.value
        setValue(newValue)
        if (callback) {
            callback(event.target.name, newValue)
        }
    }
    return {
        value: value,
        handleChange: handleChange
    }
}


const SurveyRadioInput = props => {
    const {object} = props
    return <div>
        {object.options.map((data, index)=> {
            return <div key={`${object.type}-${index}`}>
                    <input 
                        type={object.type} 
                        value={data.value} 
                        name={object.name}
                        id={`${object.name}-${index}`}
                        />
                    <label 
                        htmlFor={`${object.name}-${index}`}>
                        {data.label}
                        </label>

            </div>
        })}

    </div>
}

const SurveyTextInput = props => {
    const {value, handleChange} = useInputChange(props.defaultValue, props.triggerCallback)
    const inputType = verifyTextInputType(props.type)
    const inputProps = {
        className: 'form-control',
        onChange: handleChange,
        value: value,
        type: inputType,
        placeholder: props.placeholder ? props.placeholder : 'Your text...',
        name: props.name ? props.name : `${inputType}_${props.key}`
    }
    return inputType === 'textarea' ? 
    <textarea {...inputProps} /> :
     <input {...inputProps} />
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
    },
    {
        name: 'mySingleChoice',
        type: 'checkbox',
        options: [
            {
                value: 1,
                label: 'Label 1'
            },
            {
                value: 'abc',
                label: 'Label abc'
            },
            {
                value: '123',
                label: 'Label 123'
            }
        ]
    }

]


const App = props => {
    const [inlineData, setInlineData] = useState({})
    const handleSubmit = (event) => {
        event.preventDefault()
        event.persist()
        
        console.log(inlineData)
        // XMLHttpRequest()
        let formData = new FormData()
        for (let formInput of event.target.elements){
            if (formInput.name !== 'save_btn') {
                console.log(formInput.name, formInput.value)
                formData.append(formInput.name, formInput.value)
            }   
        }
    }

    const callback = (name, value) => {
        console.log('callback', name, value)
        inlineData[name] = value
        setInlineData(inlineData)
        
    }
    return <div className='col-10 mx-auto text-center'>
        <h1>Hello There</h1>
        
        <form onSubmit={handleSubmit}>
            {myInputs.map((obj, index)=>{


                return (obj.type === 'radio' || obj.type === 'checkbox') ?
                    <SurveyRadioInput object={obj} key={`input-${index}`} />

                    :


                     <SurveyTextInput 
                    type={obj.type}
                    triggerCallback={callback}
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