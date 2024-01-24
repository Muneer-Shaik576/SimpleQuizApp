import React,{useState} from 'react'
import { QuizData } from '../Data/QuizData'
import { QuizResult } from './QuizResult'
const Quiz=()=>{
    const[currentQuestion,setCurrentQueston]=useState(0)
    const[score,setScore]=useState(0)
    const[selectOption,setSelectOption]=useState(0)
    const[showResult,setShowResult]=useState(false)

    const changeQuestion=()=>{
        updateScore()
        if(currentQuestion<QuizData.length-1){
            setCurrentQueston(currentQuestion+1)
            setSelectOption(0)
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(selectOption===QuizData[currentQuestion].answer){
            setScore(score+1)
        }
    }
    const resetAll=()=>{
        setCurrentQueston(0)
        setScore(0)
        setSelectOption(0)
        setShowResult(false)
    }
    return(
        <div>
            <p className='heading-text'>Quiz App</p>
            <div className='container'>
                { showResult?
                 (<QuizResult score={score} totalScore={QuizData.length} reset={resetAll}></QuizResult>)
                 :
                 (
                 <>
                    <div className='question'>
                        <span id='question-number'>{currentQuestion+1}</span>
                        <span id='question-txt'>{QuizData[currentQuestion].question}</span>
                    </div>
                    <div className='opton-container'>
                    {QuizData[currentQuestion].options.map((option,i)=>{
                            return(
                                <button className={`option-btn ${selectOption===i+1? "checked":null}`} key={i} onClick={()=>{setSelectOption(i+1)}}>{option}</button>
                            )
                        })
                    }    
                    </div>
                    <input type='button' value='Next' id='next-button' onClick={changeQuestion}/>
                 </>
                )
               }
            </div>
        </div>
    )
}
export default Quiz