import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from './reducer';

const defaultState = {

  people: [],
  isModalOpen:false,
  modalContent:'',
}
const Index = () => {
  const [name,setName] = useState('')
  // const [people,setPeople] = useState(data)
  // const [showModal,setShowModal] = useState(false)
  const [state,dispatch] = useReducer(reducer,defaultState)
  const handleSubmit = (e) => {
    e.preventDefault()//preventDefault() method cancels the event if it is cancelable
    //if there is a name submitted, update name list with id as time stamp 
    if(name) {
      // setShowModal(true)
      // setPeople([...people, {id: new Date().getTime().toString(), name}])
      // setName('')
      const newItem = {id:new Date().getTime().toString(),name}
      dispatch({type:'ADD_ITEM',payload:newItem}) //an object is always required for the object with the property name type
      setName('')
    } else {
      // setShowModal(true)
      dispatch({type:'NO_VALUE'})
    }
  }

  //for closing modal; copy state values and change stateModal to false
  const closeModal = () => {
    dispatch({type:'CLOSE_MODAL'})
  }
  
  return (<>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button type='submit'>add</button>
    </form>
    {state.people.map((person) => {
      return (
        <div key={person.id} className='item'>
          <h4>{person.name}</h4>
          <button onClick={() => dispatch(
            {type: 'REMOVE_ITEM', payload:person.id}
          )}>
            remove
          </button>
        </div>
      )
    })}
  </>);
};

export default Index;
