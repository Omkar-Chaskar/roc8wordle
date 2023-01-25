import React from 'react';
import  Header from './component/Header';
import WordelGrid from './component/WordelGrid';
import Modal from './component/Modal';
import { won , loss, theme } from "./features/wordle/wordleSlice";
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const youWon = useSelector(won);
  const youLoss = useSelector(loss);
  const currTheme = useSelector(theme);

  return (
    <div className={`App ${currTheme}`}>
      <Header />
      <WordelGrid />
      {youWon || youLoss ? 
      <Modal />
      :
      <></>}
    </div>
  );
}

export default App;
