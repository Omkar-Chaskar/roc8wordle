import React from 'react';
import "../style/modal.css";
import { useSelector , useDispatch } from 'react-redux';
import { won , loss , getWord ,getNewWord} from "../features/wordle/wordleSlice";

function Modal() {

    const youWon = useSelector(won);
    const youLoss = useSelector(loss);
    const word = useSelector(getNewWord);

    const dispatch = useDispatch();

  return (
    <div className='modal' >
        <div className='won' style={{display: youWon ? "block" : "none"}}>
            <div className="congrats">
                <h1>Congratulations!</h1>
                <h3>You Won</h3>
            </div>
            <button className='restart' onClick={()=> dispatch(getWord())}>Restart</button>
        </div>
        <div className='loss' style={{display: youLoss ? "block" : "none"}}>
            <div className="congrats">
                <h1>You Loss</h1>
                <p>Currect word is :</p>
                <h3>{word}</h3>
            </div>
            <button className='restart' onClick={()=> dispatch(getWord())}>Restart</button>
        </div>
    </div>
  )
}

export default Modal