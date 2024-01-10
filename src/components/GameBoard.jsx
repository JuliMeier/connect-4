import GameCircle from "./GameCircle.jsx";
import "../style.css"
import { useEffect, useState } from "react";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { isWinner , getComputerMove} from "../helper.js";
import { no_player, player_1, game_state_playing, game_state_win, no_circles, player_2, game_state_draw } from "../Constants.js";
import { isDraw } from "../helper.js";


const GameBoard = () => {

  const [gameBoard, setGameBoard] = useState(Array(16).fill(no_player));
  const [currentPlayer, setCurrentPlayer] = useState(player_1);
  const [gameState, setGameState] = useState(game_state_playing);
  const [winPlayer, setWinPlayer] = useState(no_player);

  useEffect(() => {
    initGame()
  }, [])

  const initGame = () => {
    console.log("Iniciando juego")
    setGameBoard(Array(16).fill(no_player));
    setCurrentPlayer(player_1); 
    setGameState(game_state_playing);
  }
 
  const initBoard = () => {
    const circles = []

    for(let i = 0; i < no_circles; i++){
      circles.push(renderCircle(i));
    }
    return circles;
  }

  const suggestMove = () => {
    circleClicked(getComputerMove(gameBoard))
  }

  const circleClicked = (id) => {

    if (gameBoard[id] !== no_player) return;
    if (gameState !== game_state_playing) return;

    console.log("cicle clicked: "+ id);
    if (isWinner(gameBoard, id, currentPlayer)){
      setGameState(game_state_win);
      setWinPlayer(currentPlayer);     
    }
    if (isDraw(gameBoard, id, currentPlayer)){
      setGameState(game_state_draw);
      setWinPlayer(no_player);
    }

    setGameBoard(prev =>{
      return prev.map((circle, pos) =>{
        if (pos === id) return currentPlayer;
        return circle;
      })
    })

    setCurrentPlayer(currentPlayer === player_1? player_2 : player_1)
    console.log(gameBoard)
    console.log(currentPlayer)
  }

  const renderCircle = id => {
    return <GameCircle key={id} id={id} className={`player${gameBoard[id]}`} onCircleClicked={circleClicked} />
  }

  return (
    <>
    <Header gameState = {gameState} currentPlayer = {currentPlayer} winPlayer ={winPlayer} />
     <div className="gameBoard">
       {initBoard()}
     </div>
    <Footer onNewGameClick = {initGame} onSuggestClick = {suggestMove}/>
    </>
   
  )
}

export default GameBoard