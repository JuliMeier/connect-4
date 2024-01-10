import "../style.css";

const GameCircle = ({id,children, onCircleClicked, className}) => {
 
 
  return (
    <div className={ `gameCircle ${className} `} onClick={()=> onCircleClicked(id)} >
      {children}
    </div>
     
  )
}

export default GameCircle;