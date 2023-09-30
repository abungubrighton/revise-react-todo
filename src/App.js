import './App.css';
import {useState} from 'react';
import{ Button,FormControl,Input, InputLabel} from '@mui/material';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState(["Take The Dogs Out","Play football"]);
  const [input, setInput] = useState("");
  const addTodo=(event) => {
    event.preventDefault();
    console.log("addTodo");
    setTodos([...todos,input]);
    // clear input
    setInput("");
  }
  
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