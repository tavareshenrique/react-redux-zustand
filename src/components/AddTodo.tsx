import { useState } from "react";
import { useDispatch } from 'react-redux';

import { add } from "../store";

export function AddTodo() { 
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(add({
      newTodo
    }));

    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Novo To-Do" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}
