import React from 'react';
import './styles.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: () => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
        <input type="input" 
        placeholder="Enter a Task" 
        className="input_box" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />
        <button className="input_submit" type="submit">Go</button>
    </form>
  )
}

export default InputField