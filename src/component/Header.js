import React from 'react';
import "../style/header.css";
import { theme , handleTheme } from "../features/wordle/wordleSlice";
import { useSelector , useDispatch } from 'react-redux';

function Header() {

  const currTheme = useSelector(theme);

  const dispatch = useDispatch();

  return (
    <div className='header'>
        <div className='header title'>
            <h1>WORDEL</h1>
        </div>
        <div className='header toggle'>
          {currTheme === "light" ? 
            <button className='dark-mode button' onClick={()=>dispatch(handleTheme())}>Dark Mode</button>
            : 
            <button className='light-mode button' onClick={()=>dispatch(handleTheme())}>Ligth Mode</button>
          }
        </div>
    </div>
  )
}

export default Header;