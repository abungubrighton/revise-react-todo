import './App.css';
import {useEffect, useState} from 'react';
import{ Button,FormControl,Input, InputLabel} from '@mui/material';
import Todo from './Todo';
import {db}   from './firebase';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo=(event) => {
    event.preventDefault();
    console.log("addTodo");
    //setTodos([...todos,input]); INSTEAD NOW POST TO DB
    addDoc(collection(db, 'Todos'), {
      todo: input,
      timestamp:  serverTimestamp()
    });
    // clear input
    setInput("");
  }

  useEffect(() => {
    // Create a query to order the todos by timestamp in descending order
    const q = query(collection(db, 'Todos'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({id:doc.id,todo:doc.data().todo})));
    });

    return () => {
      // Unsubscribe from the snapshot listener when the component unmounts
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
          <Todo key={todo.id} todo={todo}/>
        ))}
        
      </ul>
    </div>
  );
};

export default App;