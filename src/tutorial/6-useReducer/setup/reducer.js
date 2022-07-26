// reducer function
// useReducer is used for more complicated apps
// useReducer adds more structure to your state/initial setup in the state 

// reducer function has 2 parameters which should return something:
// state: an object with properties, in this case defaultState object with properties like people, isModalOpen, modalContent
// action: a function
export const reducer = (state,action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people,action.payload]
    return {...state,people:newPeople,isModalOpen:true,modalContent:'item added'} //always copy all values from before by doing ...state
   } else if (action.type === "NO_VALUE") {
     return {...state, isModalOpen:true, modalContent:'please enter value'}
    } else if (action.type === "CLOSE_MODAL") {
      return {...state, isModalOpen:false}
    } else if (action.type === 'REMOVE_ITEM') {
      const newPeople = state.people.filter((person) => person.id !== action.payload)
      return {...state, people:newPeople}
    }
  throw new Error('no matching action type')
}