import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

// Updated to a strictly typed react functional component
const App: React.FC = () => {
  // Define initial state of a Todo
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
