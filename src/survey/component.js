import React, {useEffect, useState} from 'react'


import {
    SurveyTextInput, 
    SurveyRadioInput,
    SurveySelectInput,

} from './inputs'

import {verifyTextInputType} from './validators'



export const Survey = (props) => {
    const [page, setPage] = useState(1)
    const [isFinalPage, setIsFinalPage] = useState(false)
    const [surveyValues, setSurveyValues] = useState({})
    const [loadedInputs, setLoadedInputs] = useState([])

    const {surveyId} = props

    useEffect(()=>{
        if (surveyId){
            // check it's a file
            const inputDataFile = import(`../data/survey_${surveyId}.json`)
            // http request
            inputDataFile.then(response=>{
                setLoadedInputs(response.default)
                // set the new inputs list data
            })

        }

    })

    const triggerBackendUpdate = () => {
        console.log(surveyValues)

        // assume backend updated
        setPage(1)
        setSurveyValues({})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        event.persist()
        for (let formInput of event.target.elements){
            const verifyType = verifyTextInputType(formInput.type)
            if (verifyType) {
                surveyValues[formInput.name] = formInput.value
            }

            if (formInput.type === 'select-one') {
                surveyValues[formInput.name] = formInput.value
            }

            if (formInput.type === 'select-multiple') {
                const selected = [].filter.call(formInput.options, option=>option.selected)
                const values = selected.map(option => option.value)
                surveyValues[formInput.name] = values
            }

            if (formInput.checked) {
                surveyValues[formInput.name] = formInput.value
            }

        }
        setSurveyValues(surveyValues)
        const nextPage = page + 1
        const inputs = loadedInputs ? loadedInputs.filter(inputOption => inputOption.page === nextPage) : []
       

        if (isFinalPage) {
            triggerBackendUpdate()
        } else {
            if (inputs.length === 0) {
                setIsFinalPage(true)
            } else {
                setPage(nextPage)
            }
        }


    }
    const inputs = loadedInputs ? loadedInputs.filter(inputOption => inputOption.page === page) : []
    return <form onSubmit={handleSubmit}>
            {isFinalPage !== true && inputs.map((obj, index)=>{

                const inputKey = `input-${index}-${page}`
                return (obj.type === 'radio' || obj.type === 'checkbox') ?
                        <SurveyRadioInput 
                            object={obj} 
                            key={inputKey} 

                             {...obj}
                            />

                    :

                    (obj.type === 'select') ?
                        <SurveySelectInput 
                            className='form-control mb-3'
                            object={obj} 
                            key={inputKey} 
                             {...obj}
                            />

                    :

                     <SurveyTextInput 
                     className='mb-3 form-control'
                    key={inputKey}
                        {...obj}
                     />
                   
                   

                })

            }
            
           


             <button 
                    name='save_btn'
                    type='submit' 
                    className='btn btn-primary my-5'>Save</button>
        </form>
}