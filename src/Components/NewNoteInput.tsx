import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import React, { ChangeEvent, useState } from 'react'
import './NewNoteInput.css';

interface NewNoteInputProps{
    addnote(note:string):void;
}
function NewNoteInput(props:NewNoteInputProps) {
    const [note, setNote] = useState('');
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setNote(e.target.value)
    };
    const handleClick=()=>{
        props.addnote(note) ;
        setNote('');
    };
    return (
        <div className='newnoteinput'>
            <Input onKeyPress={(ev) => {
                    if (ev.key === 'Enter') {
                        handleClick();
                    ev.preventDefault();
                    }
                }} onChange={handleChange} value={note} className = 'newnoteinput__input' type='text' name='note' placeholder='Enter the notes'></Input>
            <Button onClick={handleClick} variant="outlined">Add Note</Button>
        </div>
    )
}

export default NewNoteInput
