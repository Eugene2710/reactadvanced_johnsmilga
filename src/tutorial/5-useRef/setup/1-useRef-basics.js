import React, { useEffect, useRef } from 'react';

// similar to useState; diff is that useRef hook does not trigger re-render
// preserves value in between renders
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
  }
  
  return <><form className='form' onSubmit={handleSubmit}>
    <div>
      <input type='text' ref={refContainer}/>
      <button type='submit'>submit</button>
    </div>
  </form>
  </>;
};

export default UseRefBasics;
