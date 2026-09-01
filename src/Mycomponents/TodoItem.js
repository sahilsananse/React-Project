import React from "react";

function TodoItem({ todo, onDelete }) {
  return (
    <div className="my-3">
      <h4>{todo.Title}</h4>
      <p>{todo.disc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => { onDelete(todo); }}
      
      >
        Delete
      </button>
      <hr></hr>
    </div>
  );
}

export default TodoItem;