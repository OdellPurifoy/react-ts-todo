import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';

// Updated to a strictly typed react functional component
const App: React.FC = () => {
  // Define initial state of a Todo
  const [todo, setTodo] = useState<string>("");

  // Creates an arry of an interface type, in this case the Todo interface
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e) => {
    e.preventDefault
  }

  console.log(todo)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
