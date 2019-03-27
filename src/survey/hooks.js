import {useState} from 'react'



export const useInputChange = (customValue, callback) => {
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
