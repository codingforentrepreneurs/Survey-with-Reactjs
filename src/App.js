import React, {useState} from 'react'


function verifyTextInputType (inputType) {
    switch (inputType) {
        case 'text':
            return true
        case 'email':
            return true
        case 'number':
            return true
        case 'textarea':
            return true
        default:
            return false
    }
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

const SurveySelectInput = props => {
    const {object} = props

    return <select name={object.name} className={props.className}>
            <option>Select an option</option>
        {object.options.map((data, index)=> {
            return <option 
                    value={data.value} 
                        id={`${object.name}-${index}`} 
                        className={`form-check ${props.optionClassName}`}
                        key={`${object.type}-${index}`}>
                        {data.label}
                    </option>
        })}

    </select>

}

const SurveyRadioInput = props => {
    const {object} = props
    return <div className={props.className}>
        {object.options.map((data, index)=> {
            return <div className={`form-check ${props.optionClassName}`}

                    key={`${object.type}-${index}`}>
                    <input 
                        className='form-check-input'
                        type={object.type} 
                        value={data.value} 
                        name={object.name}
                        id={`${object.name}-${index}`}
                        />
                    <label 
                        className='form-check-label'
                        
                        htmlFor={`${object.name}-${index}`}>
                        {data.label}
                        </label>

            </div>
        })}

    </div>
}

const SurveyTextInput = props => {
    const {value, handleChange} = useInputChange(props.defaultValue, props.triggerCallback)
    const inputType = verifyTextInputType(props.type) ? props.type : 'text'
    const inputProps = {
        className: props.className ? props.className : 'form-control',
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
    },
    {
        name: 'myDropdownChoice',
        type: 'select',
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

    const handleSubmit = (event) => {
        event.preventDefault()
        event.persist()
        // XMLHttpRequest()
        let formData = new FormData()
        for (let formInput of event.target.elements){

            const verifyType = verifyTextInputType(formInput.type)
            if (verifyType) {
                console.log(formInput.name, formInput.value)
                formData.append(formInput.name, formInput.value)
            }

            if (formInput.type === 'select-one') {
                console.log(formInput.name, formInput.value)
                formData.append(formInput.name, formInput.value)
            }

            if (formInput.checked) {
                console.log(formInput.name, formInput.value)
                formData.append(formInput.name, formInput.value)
            }


        }
    }

    return <div className='col-6 mx-auto text-center'>
        <h1>Hello There</h1>
        
        <form onSubmit={handleSubmit}>
            {myInputs.map((obj, index)=>{


                return (obj.type === 'radio' || obj.type === 'checkbox') ?
                        <SurveyRadioInput 
                            object={obj} 
                            key={`input-${index}`} />

                    :

                    (obj.type === 'select') ?
                        <SurveySelectInput 
                            className='form-control mb-3'
                            object={obj} 
                            key={`input-${index}`} />

                    :

                     <SurveyTextInput 
                     className='mb-3 form-control'
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