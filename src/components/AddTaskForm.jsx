import { useState } from 'react'

const AddTaskForm = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (text) {
      onAddTask(text);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default AddTaskForm;
