import './App.css';
import {useState} from 'react';
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
      <form>
        <input type="text" value={input} onChange={event=>setInput(event.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </form>

      <ul>
        {todos.map((todo)=>(
          <li key={todo}>{todo}</li>

        ))}
        
      </ul>
    </div>
  );
};

export default App;
