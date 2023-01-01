import { useState } from "react";


function Square({value, onSquareClick}){
    return(
        <div className="btn"
        onClick={onSquareClick}
        >{value}</div>
    )
}

function Player({playState}){
    return(
        <div>
            <div></div>
            <p>who is next</p>
            <div className="players">
                {playState ? <div className="player go">playerOne</div>:<div className="player wait">playerOne</div> }
                {!playState ? <div className="player go ">playerTwo</div> : <div className="player wait">playerTwo</div>}
            </div>
        </div>

    )
}


function Board(){
    const[squares, setSquares] = useState(Array(9).fill(null))
    const [playerX, setPlayerX] = useState(true)

    function handleClick(i){
        let updateSquares = squares.slice();
        if(playerX){
            updateSquares[i] = 'X'
        }else{
            updateSquares[i] = 'O'
        }
        setSquares(updateSquares)
        setPlayerX(!playerX)
    }
    return(
        <>
            <Player playState={playerX}/>
            <div className='row'>
                <Square value={squares[0]} onSquareClick={()=>{handleClick(0)}} />
                <Square value={squares[1]} onSquareClick={()=>{handleClick(1)}}/>
                <Square value={squares[2]} onSquareClick={()=>{handleClick(2)}}/>
            </div>
            <div className='row'>
                <Square value={squares[3]} onSquareClick={()=>{handleClick(3)}} />
                <Square value={squares[4]} onSquareClick={()=>{handleClick(4)}}/>
                <Square value={squares[5]} onSquareClick={()=>{handleClick(5)}}/>
            </div>
            <div className="row">
                <Square value={squares[6]} onSquareClick={()=>{handleClick(6)}}  />
                <Square value={squares[7]} onSquareClick={()=>{handleClick(7)}}  />
                <Square value={squares[8]} onSquareClick={()=>{handleClick(8)}}  />
            </div>
        </>
    )
}

export default Board;