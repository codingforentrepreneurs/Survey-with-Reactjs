import React from 'react'

import {
    Survey,
} from './survey'


const App = props => {

    return <div className='col-6 mx-auto text-center'>
        <h1>Hello There</h1>
        <Survey surveyId={1} />


        <Survey surveyId={2} />
    </div>
}


export default App;