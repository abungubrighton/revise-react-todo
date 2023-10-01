import React, { useState } from 'react'
import{List,ListItem,ListItemText,Modal,Button,
    Dialog,DialogTitle,DialogContentText,DialogContent,DialogActions, FormControl,
    Input,InputLabel
} from '@mui/material';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { doc, deleteDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';


const Todo = ({todo}) => {
    const [open,setOpen] = useState(false);
    const [input,setInput] = useState("");

    const updateTodo = () => {
        // update the todo
        const todoDocRef = doc(db, 'Todos', todo.id);

        setDoc(todoDocRef, { todo: input }, { merge: true })
        setOpen(false);
    };
  return (
    <>
    <Dialog open={open} >
        <DialogTitle>Modal Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <FormControl>
          <InputLabel>Type in your task</InputLabel>
          <Input placeholder={todo.todo} type="text" value={input} onChange={event=>setInput(event.target.value)}/>
        </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={updateTodo} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    <List>
        <ListItem>
            <ListItemText primary="Todo" secondary={todo.todo}/>
        </ListItem>
        <Button onClick={e => setOpen(true)}>Edit</Button>
       <DeleteForeverIcon onClick={event => {
        deleteDoc(doc(db, 'Todos', todo.id));
       }}/>
    </List>
    </>
  )
}

export default Todo