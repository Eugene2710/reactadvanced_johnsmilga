import React, { useState } from 'react';

const UseStateBasics = () => {
  //console.log(useState())
  const [text, setText] = useState('random title lol') //remember that hooks have to be within the function/copmponent body and cannot be called conditionally

  const handleClick = () => {
    if (text === "hello") {
      setText('bye')
    } else {
      setText('hello')
    }
  }
  
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
    
  );
};

export default UseStateBasics;
