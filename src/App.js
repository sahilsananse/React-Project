import "./App.css";

import Header from "./Mycomponents/Header";
import Todos from "./Mycomponents/Todos";
import Footer from "./Mycomponents/Footer";
import { useState } from "react";
import AddTodo from "./Mycomponents/AddTodo";
import About from "./Mycomponents/About";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  // Delete Todo
  const onDelete = (todo) => {
    console.log("I am on Delete", todo);

    const newTodos = todos.filter((e) => {
      return e !== todo;
    });

    setTodos(newTodos);

    localStorage.setItem(
      "todos",
      JSON.stringify(newTodos)
    );
  };

  // Add Todo
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);

    let sno =
      todos.length > 0
        ? todos[todos.length - 1].sno + 1
        : 1;

    const myTodo = {
      sno: sno,
      Title: title,
      disc: desc,
    };

    const newTodos = [...todos, myTodo];

    setTodos(newTodos);

    localStorage.setItem(
      "todos",
      JSON.stringify(newTodos)
    );
  };

  return (
    <Router>

      <Header  className="bg-dark text-light mt-5 py-4" title="My todos list" />

      <hr />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />

              <hr />

              <Todos
                todos={todos}
                onDelete={onDelete}
              />
            </>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

      <hr />

      <Footer />

    </Router>
  );
}

export default App;