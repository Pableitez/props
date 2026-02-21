const Task = ({ task, onDelete, onToggleComplete }) => {
  const handleClick = () => {
    onToggleComplete(task.id);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(task.id);
  };

  return (
    <li
      onClick={handleClick}
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
    >
      {task.text}
      <button onClick={handleDelete}>Borrar</button>
    </li>
  );
};

export default Task;
