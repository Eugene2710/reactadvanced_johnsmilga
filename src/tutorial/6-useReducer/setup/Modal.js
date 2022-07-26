import React, { useEffect } from 'react';

const Modal = ({modalContent, closeModal}) => {
  useEffect(() => {
    //global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires
    setTimeout(() => {
      closeModal()
    }, 3000)
  })
  return <div className='modal'>
    <p>{modalContent}</p>
  </div>;
};

export default Modal;
