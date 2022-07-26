import React, {useState} from 'react';
import { data } from '../../../data';
//import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data) // this can be done without the need of importiang {useState} from 'react' above. It is also the same as const [people, setPeople] = useState()
  
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return <>
  {
    people.map((person) => {
      const {id,name} = person
      return (
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={() => removeItem(id)}>remove</button>
        </div>
      )
    }
    )
  }
  <button className = "btn" onClick={() => setPeople([])}> 
    clear items
  </button>
  </>;
};
// ? still do not understand why onClick={setPeople([])} will not do the job of updating the array shown to be empty

export default UseStateArray;
