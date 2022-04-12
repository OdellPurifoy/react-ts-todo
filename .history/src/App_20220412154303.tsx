import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

// Updated to a strictly typed react functional component
const App: React.FC = () => {
  // Define initial state of a Todo
  const [todo, setTodo] = useState<string>("");

  console.log(todo)

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
