import { createSlice } from '@reduxjs/toolkit';
import { words } from "../../constant/word";

const initialState = {
  word: '',
  wordle: [],
  currAttempt: 0,
  won: false,
  loss: false,
  theme: "light",
};

export const wordleSlice = createSlice({
  name: 'wordle',
  initialState,
  reducers: {
    getWord : (state) => {
      state.word = words[Math.floor(Math.random() * words.length)]; 
      state.wordle = new Array(6).fill('');
      state.currAttempt = 0;
      state.won= false;
      state.loss= false;
    },
    handleKeySelect: (state, action) => {
      if(state.wordle[state.currAttempt].length < 5){
      state.wordle[state.currAttempt] = state.wordle[state.currAttempt] + action.payload.toUpperCase();
      }
    },
    handleEnter: (state) => {
      if(state.wordle[state.currAttempt].length === 5){
        if(words.includes(state.wordle[state.currAttempt].toLowerCase())){
          if(state.wordle[state.currAttempt].toLowerCase() === state.word){
            state.won = true;
          }
          state.currAttempt += 1;
        }
        if(state.currAttempt === 6){
          state.loss = true;
        }
      }
    },
    handleDelete: (state) => {
      state.wordle[state.currAttempt] = state.wordle[state.currAttempt].slice(0,state.wordle[state.currAttempt].length - 1)
    },
    handleTheme: (state) => {
      console.log(state.theme);
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
  extraReducers: (builder) => {
  },
});

export const { handleKeySelect, handleEnter, handleDelete, getWord , handleTheme } = wordleSlice.actions;

export const selectWordle = (state) => state.wordle.wordle;
export const getNewWord = (state) => state.wordle.word;
export const currAttempt = (state) => state.wordle.currAttempt;
export const won = (state) => state.wordle.won;
export const loss = (state) => state.wordle.loss;
export const theme = (state) => state.wordle.theme;

export default wordleSlice.reducer;
