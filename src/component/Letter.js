import React from 'react';

function Letter({word, guess, isAttempted, index}) {
  // console.log(guess[index].toUpperCase() === word.toUpperCase() ? 'bg-green' : word[i].toUpperCase().includes(guess[index][i]) ? 'bg-yellow' : 'bg-black');
  const bgColor = (i) => isAttempted ? guess[i].toUpperCase() === word[i].toUpperCase()? 'bg-green': word.toUpperCase().includes(guess[i]) ? 'bg-yellow' : 'bg-black' : '';
  return (
    <div className='row'>
            {new Array(5).fill(0).map((_,i)=>{
              return(
                <div key={i} className={`letter ${bgColor(i)}`}>{guess[i]}</div>
              )
            })}
    </div>
  )
}

export default Letter