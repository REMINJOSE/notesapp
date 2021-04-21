import React from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from './action';

import './App.css';
import NewNoteInput from './Components/NewNoteInput';
import NoteList from './Components/NoteList';


function App() {
  
  const dispatch = useDispatch();

    const onAddNote = (note:string) =>{
        dispatch(addNote(note));
    }

  return (
    <>
      <div className="app__container">
          <NewNoteInput addnote={onAddNote}/>
          <NoteList/>
      </div>      
    </>
  );
}

export default App;
