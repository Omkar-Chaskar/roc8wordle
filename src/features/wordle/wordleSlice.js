import { createSlice } from '@reduxjs/toolkit';
import { words } from "../../constant/word";

const initialState = {
  word: '',
  wordle: [],
  currAttempt: 0,
};

export const wordleSlice = createSlice({
  name: 'wordle',
  initialState,
  reducers: {
    getWord : (state) => {
      state.word = words[Math.floor(Math.random() * words.length)]; 
      state.wordle = new Array(6).fill('')
    },
    handleKeySelect: (state, action) => {
      if(state.wordle[state.currAttempt].length < 5){
      state.wordle[state.currAttempt] = state.wordle[state.currAttempt] + action.payload.toUpperCase();
      }
    },
    handleEnter: (state) => {
      if(state.wordle[state.currAttempt].length === 5){
        if(words.includes(state.wordle[state.currAttempt].toLowerCase())){
          state.currAttempt += 1;
        }
      }
    },
    handleDelete: (state) => {
      state.wordle[state.currAttempt] = state.wordle[state.currAttempt].slice(0,state.wordle[state.currAttempt].length - 1)
    }
  },
  extraReducers: (builder) => {
  },
});

export const { handleKeySelect, handleEnter, handleDelete, getWord } = wordleSlice.actions;

export const selectWordle = (state) => state.wordle.wordle;
export const getNewWord = (state) => state.wordle.word;
export const currAttempt = (state) => state.wordle.currAttempt;

export default wordleSlice.reducer;
