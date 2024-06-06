import React,{useEffect, useState} from 'react'
import { QuizData } from '../Data/QuizData'
import { QuizResult } from './QuizResult'
import { QuizzData } from '../Data/QuizDataa'

const Quiz=({data})=>{
    const[currentQuestion,setCurrentQueston]=useState(0)
    const[score,setScore]=useState(0)
    const[selectOption,setSelectOption]=useState(0)
    const[showResult,setShowResult]=useState(false)
    const[time,setTime]=useState(600)
    
    let QuizDataa
    
    if(data==='Java'){
         QuizDataa=QuizData
    }else{
         QuizDataa=QuizzData
    }

useEffect(()=>{
    if(time<=0 || showResult){
        setShowResult(true)
        return
    }

 const uniqueId= setInterval(() => {
        setTime((prevTime)=>prevTime-1)
 }, 1000);

 return()=>clearInterval(uniqueId);
},[time])

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2,'0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
    };

    const changeQuestion=()=>{
        updateScore()
        if(currentQuestion<QuizDataa.length-1){
            setCurrentQueston(currentQuestion+1)
            setSelectOption(0)
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(selectOption===QuizDataa[currentQuestion].answer){
            setScore(score+1)
        }
    }


        

   return(
        <div>
            <p className='heading-text'>Quiz App</p>
           {showResult?<p>You Completed {data} test in {formatTime(600-time)} minutes </p> : <p>You have {formatTime(time)} minutes left</p>}
            <div className='container'>
                { showResult?
                 (<QuizResult score={score} totalScore={QuizDataa.length} ></QuizResult>)
                 :
                 (
                 <>
                    <div className='question'>
                        <span id='question-number'>{currentQuestion+1}</span>
                        <span id='question-txt'>{QuizDataa[currentQuestion].question}</span>
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