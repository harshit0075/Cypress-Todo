import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <h1>Todos App</h1>
      <form>
        <input
          type="text"
          placeholder="Enter your todo"
          value={todo}
          onChange={handleChange}
          data-testid="todo-input"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Todo;
