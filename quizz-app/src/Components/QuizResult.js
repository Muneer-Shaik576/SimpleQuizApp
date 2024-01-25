import React from "react"
import { Link } from "react-router-dom"
export const QuizResult=(props)=>{
    return(
        <>
        <div className="show-score">
           
            Your Score:{props.score}<br/>
            Total Score:{props.totalScore}
        </div>
        <Link to='/' id="next-button">Play Again</Link>
        </>
    )
}
