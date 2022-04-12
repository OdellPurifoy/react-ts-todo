import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

// Updated to a strictly typed react functional component
const App: React.FC = () => {
  const [todo, setTodo] = useState("");

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
