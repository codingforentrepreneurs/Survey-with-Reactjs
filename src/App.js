import React from 'react'

import {
    Survey,
} from './survey'


const App = props => {

    return <div className='col-6 mx-auto text-center'>
        <h1 className='mb-5'>Hello There</h1>
        <Survey surveyId={3} />
    </div>
}


export default App;