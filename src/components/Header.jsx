import {  game_state_playing, game_state_win , game_state_draw} from "../Constants.js";

export const Header = ({currentPlayer, gameState, winPlayer}) => {
  const renderLabel = () => {
    switch(gameState){
        case game_state_playing:
             return <div>Player {currentPlayer} Turn </div>
        case game_state_win:
            return <div>Player {winPlayer} Wins!!</div>
        case game_state_draw:   
            return <div>Game is a draw!!</div>
        default:
    }
  }

  return (
    <div className="panel header">
        <div className="header-text">{renderLabel()}</div>
    </div>
  )
}
