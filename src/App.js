import React, {useState} from 'react'

function App (){
    const [name, setName] = useState("Rahul");
    const [roll, setRoll] = useState(101)
    // const name = nameSteteVariable[0]
    // const setName = nameSteteVariable[1]

    const handleClick = () =>{
        setName('GeekyShows');
        setRoll(102)
    }

    return(<div>
        <h1>{name}</h1>
        <h2>{roll}</h2>
        <button type="button" onClick={handleClick}>Change </button>
    </div>)
}

export default App