import React from 'react'


import {
    Survey,
} from './survey'




const myInputs = [
    {
        page: 1,
        required: true,
        name: 'full_name',
        type: 'text',
        placeholder: "You full name..."
    },
    {
        page: 2,
        required: true,
        name: 'email',
        type: 'email',
        placeholder: "hello@teamcfe.com"
    },
    {
        page: 3,
        required: true,
        name: 'message',
        type: 'textarea',
        placeholder: "Your Message"
    },
    {
         page: 4,
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
         page: 4,
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
    },
    {
         page: 5,
        name: 'myMultiSelect',
        type: 'select',
        multiple: true,
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

    return <div className='col-6 mx-auto text-center'>
        <h1>Hello There</h1>
        <Survey inputs={myInputs} />
    </div>
}


export default App;