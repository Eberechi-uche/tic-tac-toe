import { useState } from "react";


function Square(){
    const[value, setValue] = useState(null);

    function handleClick(){
        setValue('X')
    }

    return(
        <button>{value}</button>
    )
}


function Board(){
    return(
        <>
            <div className='row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='row'>
                <Square  />
                <Square />
                <Square />
            </div>
            <div className="row">
                <Square  />
                <Square  />
                <Square  />
            </div>
        </>
    )
}

export default Board;