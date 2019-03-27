import React from 'react'

import {useInputChange} from './hooks'
import {verifyTextInputType} from './validators'


export const SurveySelectInput = props => {
    const {object} = props

    return <select name={object.name} className={props.className} multiple={object.multiple}>
            <option hidden value>Select an option</option>
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

export const SurveyRadioInput = props => {
    const {object} = props
    return <div className={props.className}>
        {object.options.map((data, index)=> {
            return <div className={`form-check ${props.optionClassName}`}

                    key={`${object.type}-${index}`}>
                    <input 
                        className='form-check-input'
                        type={object.type} 
                        required={props.required}
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

export const SurveyTextInput = props => {
    const {value, handleChange} = useInputChange(props.defaultValue, props.triggerCallback)
    const inputType = verifyTextInputType(props.type) ? props.type : 'text'
    const inputProps = {
        className: props.className ? props.className : 'form-control',
        onChange: handleChange,
        required: props.required,
        value: value,
        type: inputType,
        placeholder: props.placeholder ? props.placeholder : 'Your text...',
        name: props.name ? props.name : `${inputType}_${props.key}`
    }
    return inputType === 'textarea' ? 
    <textarea {...inputProps} /> :
     <input {...inputProps} />
}