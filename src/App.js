import React, {useState} from 'react'

function App (){
    const nameSteteVariable = useState("Rahul");

    return(<div>
        <h1>{nameSteteVariable[0]}</h1>
    </div>)
}

export default App