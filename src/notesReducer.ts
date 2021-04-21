import React from 'react'
import {Action} from './action'
export interface NotesState{
    notes:string[]
}
const initialState={
    notes:[]
}

function notesReducer(state:NotesState=initialState,action:Action) {
   switch (action.type) {
       case "ADD_NOTE":           
           return {...state,notes:[...state.notes,action.payload]};
       default:
        return{...state};
   }
}

export default notesReducer
