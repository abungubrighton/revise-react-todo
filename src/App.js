import './App.css';
import {useEffect, useState} from 'react';
import{ Button,FormControl,Input, InputLabel} from '@mui/material';
import Todo from './Todo';
import {db}   from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo=(event) => {
    event.preventDefault();
    console.log("addTodo");
    setTodos([...todos,input]);
    // clear input
    setInput("");
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Todos'), (snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });

    return () => {
      // Unsubscribe from the snapshot listener when the component unmounts
      // to avoid memory leaks.
      unsubscribe();
    };
  }, [input]);
  
  return (
    <div className="App">
      <h1>Brighton's TODO APP</h1>
      <form onSubmit={addTodo}>
        <FormControl>
          <InputLabel>Type in your task</InputLabel>
          <Input type="text" value={input} onChange={event=>setInput(event.target.value)}/>
        </FormControl>
        <Button type="submit" disabled={!input} onClick={addTodo} variant="contained">Add Todo</Button>
      </form>

      <ul>
        {todos.map((todo)=>(
          <Todo key={todo} todo={todo}/>
        ))}
        
      </ul>
    </div>
  );
};

export default App;