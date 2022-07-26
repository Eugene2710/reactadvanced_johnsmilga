import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    //add item to array only if name and email inputs are not empty strings
    if (firstName && email) {
      const person = {firstName, email} //this was originally,before es6: const person = {firstName: firstName, email: email}
      /*setPeople((people) => {
        return[...people, person]
      })*/
      setPeople([person]) //this is the same as the arrow function above
      setFirstName('')
      setEmail('')
    } else {
      console.log('empty values')
    }
  }

  return (
    <>
      <article>
        <form className='form' onClick={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input type='text' id='firstName' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input type='text' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <button type='submit'>add person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
