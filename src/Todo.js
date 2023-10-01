import React from 'react'
import{List,ListItem,ListItemText,Button} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
const Todo = ({todo}) => {
  return (
    <List>
        <ListItem>
            <ListItemText primary="Todo" secondary={todo.todo}/>
        </ListItem>
       <DeleteForeverIcon onClick={event => {
        deleteDoc(doc(db, 'Todos', todo.id));
       }}/>
    </List>
  )
}

export default Todo