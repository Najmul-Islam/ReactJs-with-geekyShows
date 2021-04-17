import React from 'react'
import useCustomCounter from './Custom';


function App () {
    const data = useCustomCounter();

    return(
        <div>
            <h1>Count Up: {data.count} </h1>
            <button type="button" onClick={data.handleIncrement} >Increment</button>
        </div>
    )
}

export default App