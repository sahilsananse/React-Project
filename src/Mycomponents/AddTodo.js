import React from "react";
import { useState } from "react";

const AddTodo = (props) => {
    const[title,setTitle]=React.useState("");
    const[desc,setDesc]=React.useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description cannot be blank");
        }
        else
        {
            props.addTodo(title,desc);
            setTitle("");
        }                   
    }
    AddTodo.addTodo = (title, desc) => {
        props.addTodo(title, desc);
    };

  return (
    <div className="container my-3">
      <h3>Add Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleInputEmail1"placeholder="Enter Todo Title" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" placeholder="Enter Todo Description"/>
  </div>
 
  <button type="submit" className="btn btn-success">Add Todo</button>
</form>

    </div>
  );
};

export default AddTodo;
