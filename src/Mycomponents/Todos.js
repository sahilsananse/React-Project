import React from "react";
import TodoItem from "./TodoItem";

function Todos(props) {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todo List</h3>

      {props.todos.length === 0 ? (
        <p>No Todos to display</p>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.sno}
              onDelete={() => {
                props.onDelete(todo);
                <hr></hr>
              }}
            />
          );
        })
      )}
    </div>
  );
}

export default Todos;
