import { useState } from 'react';
import Board from "./Board";
// import Square from "./Square";

export default function Game() {
    // const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // const currentSquares = history[history.length - 1];
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        // setHistory([...history, nextSquares]);
        // setXIsNext(!xIsNext);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        // const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        // setHistory(nextHistory);
        // setCurrentMove(nextHistory.length - 1);
        setCurrentMove(nextMove);
        // setXIsNext(nextMove % 2 == 0);
    }

    //storing the history of moves
    const moves = history.map((squares, move) => {
        let description;
        if(move > 0) {
            description = 'Go to move #' +  move;
        } else {
            description = 'Go to game start';
        }
    
        return (
            <li key={move}>
                <button onClick={ () => jumpTo(move) }>{description}</button>
            </li>
        );
    });

    return (
        <div className='game'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className='game-info'>
                <ol >{moves}</ol>
            </div>
        </div>
    );
}


