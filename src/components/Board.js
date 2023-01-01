import { useState } from "react";
import happy from '../icons/happy.gif'
import sad from '../icons/neutral.gif'


function Square({value, onSquareClick}){
    
    return(
        <div className="btn "
        onClick={onSquareClick}
        >{value}</div>
    )
}

function Player({playState, gameStats}){
    return(
        <div>
            
            
            <div className="players">
                  
                {playState ? <div className="player go">playerX</div>:<div className="player wait">playerX</div> }
                <div className="playerBoard">
                    {gameStats && <img src={gameStats === 'X'? happy: sad } width="50" height="50" alt="sad or happy face" />}
                    {gameStats && <img src={gameStats !== 'X'? happy: sad} width="50" height="50" alt="sad or happy face"/>}
                    
                </div>
                {!playState ? <div className="player go ">playerO</div> : <div className="player wait">playerO</div>}
            </div>
        </div>

    )
}


function Board(){
    const[squares, setSquares] = useState(Array(9).fill(null))
    const [playerX, setPlayerX] = useState(true)

    function handleClick(i){
        if(squares[i] || getWinner(squares)){
            return
        }
        let updateSquares = squares.slice();
        if(playerX){
            updateSquares[i] = 'X'
        }else{
            updateSquares[i] = 'O'
        }
        setSquares(updateSquares)
        setPlayerX(!playerX)
    }

    const winner = getWinner(squares);
    return(
        <>
            <Player playState={playerX} gameStats = {winner}/>
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

function getWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null
}

export default Board;