import { useState } from "react";

export function AddTodo() { 
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log('Adicionando To-Do:', newTodo);
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
