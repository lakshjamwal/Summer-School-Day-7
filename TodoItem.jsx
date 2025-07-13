export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onToggle(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
      </label>
      <button onClick={() => onDelete(todo.id)} className="btn btn-danger">
        delete
      </button>
    </li>
  );
}
