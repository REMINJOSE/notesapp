import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {  useSelector } from 'react-redux';
import {NotesState} from '../notesReducer';
import './NoteList.css'
import {v4 as uuid} from 'uuid';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
}));

function NoteList() {
    const notes = useSelector<NotesState,NotesState["notes"]>(
        (state)=>state.notes
    );
    const [checked, setChecked] = useState(notes);
    const classes = useStyles();
    
      const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
      };

    

    return (
        <>
        <div className="NoteList__Container">   
        <List className={classes.root}>  
                {notes.map((note)=>{     
                    const labelId = `checkbox-list-label-${uuid()}`;
                    return(
                        <ListItem key={uuid()} role={undefined} dense button onClick={handleToggle(note)}>
                            <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(note) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                            </ListItemIcon>
                            <ListItemText id={uuid()} primary={note} />
                            <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments">
                                <ChatBubbleIcon />
                            </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                     );
                })}   
            </List> 
        </div>           
        </>
    )
}

export default NoteList
