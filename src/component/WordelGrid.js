import React, {useEffect} from 'react'
import Letter from './Letter'
import "../style/wordleGrid.css";
import { useSelector, useDispatch } from 'react-redux';
import {getWord, handleKeySelect, handleEnter, handleDelete, selectWordle, getNewWord, currAttempt } from "../features/wordle/wordleSlice";

function WordelGrid() {

  const dispatch = useDispatch();

  const guess = useSelector(selectWordle);
  const word = useSelector(getNewWord);
  const attempt = useSelector(currAttempt);

  useEffect(()=>{
    dispatch(getWord());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
    window.addEventListener("keydown", handleKeypress);  
    return () => {
      window.removeEventListener("keydown", handleKeypress)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  
  const keys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P","A", "S", "D", "F", "G", "H", "J", "K", "L","Z", "X", "C", "V", "B", "N", "M"];

  const handleKeypress = (e) => {
    keys.forEach((key)=>{
      if(e.key.toLowerCase() === key.toLowerCase()){
        dispatch(handleKeySelect(e.key));
      }
    })
    if(e.key === "Enter"){
      console.log("enter press")
      dispatch(handleEnter());
    }
    if(e.key === "Backspace"){
      dispatch(handleDelete());
    }
  } 


  return (
    <div className='wordle-grid' >
      {guess.map((_,i)=>{
        return(
          <Letter word={word} guess={guess[i]} isAttempted={i<attempt} index={i} key={i}/>
        )
      })}
    </div>
  )
}

export default WordelGrid