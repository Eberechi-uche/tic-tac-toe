import { useState } from "react";
import happy from '../icons/happy.gif'
import sad from '../icons/neutral.gif'
import ai from '../components/images/ai.png'
import human from '../components/images/man.png'


function Square({value, onSquareClick}){
    
    return(
        <div className="btn "
        onClick={onSquareClick}
        >{value}</div>
    )
}

function PlayerSelector({selectMode}){
    return(
        
        <div className="popUp">
                <p>
                    select game mode, 
                </p>
            <div className="playerBoard">
               
                <div onClick={()=>{selectMode(1)}}><img src={ai} alt="an icon of a robot"/></div>
                <div onClick={()=>{selectMode(2)}}><img src={human} alt="an icon of two humans" /></div>
            </div>
            
        </div>
        
    )
}

function Player({playState, gameStats, players}){
    let tag = players === 1 ? "COM" : "PLAYER X"
    let sadIcon = gameStats && <img src={sad} width="50" height="50" alt="sad or happy face" />
    let happyIcon = gameStats && <img src={happy} width="50" height="50" alt="sad or happy face" />
    
    return(
        <div>
            
            
            <div className="players">
                  
                {playState ? <div className="player go">{tag} {gameStats === 'X'? happyIcon : sadIcon}</div>:<div className="player wait">{tag}{gameStats === 'X'? happyIcon : sadIcon}</div> }
                <div className="playerBoard">
                    
                </div>
                {!playState ? <div className="player go ">PLAYER O {gameStats === 'O'? happyIcon : sadIcon}</div> : <div className="player wait">playerO{gameStats === 'O'? happyIcon : sadIcon}</div>}
            </div>
        </div>

    )
}

function autoPlay(array){
    for(let i = Math.floor(Math.random() * 8); i < array.length; i++){
        if(!array[i]){
            array[i] = 'X';
            return
        }
    }
}


function Board(){
    const[squares, setSquares] = useState(Array(9).fill(null))
    const [playerX, setPlayerX] = useState(true);
    const [players, setPlayers] = useState(0)

    function handleModeselect(i){
        setPlayers(i)
    }

    function handleClick(i){
        if(squares[i] || getWinner(squares)){
            return
        }
        let updateSquares = squares.slice();
        if(players !== 1){
            if(playerX){
                updateSquares[i] = 'X'
            }else{
                updateSquares[i] = 'O'
            }

        }else{
            updateSquares[i] = "O"
            autoPlay(updateSquares)
        }
        
        
        setSquares(updateSquares)
        setPlayerX(!playerX)
    }

    const winner = getWinner(squares);
    return(
        <>
             {players === 0 ? <PlayerSelector selectMode={handleModeselect}/> : <h2>game mode players {players}</h2>}
            <Player playState={playerX} gameStats = {winner} players={players}/>
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