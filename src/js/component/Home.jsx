// Home.js
import React, { useEffect, useState } from "react";
import TodoList from "./TodoList"; 
import Login from "./Login"; 

function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const registeredUsers = ["Nathan", "Nate", "Habte", "nathan", "nate", "habte"]; 

  const getFetch = () => {
    fetch("https://playground.4geeks.com/todo/users/Nateh1304")
      .then((res) => res.json())
      .then((response) => setTodos(response.todos))
      .catch((err) => console.log(err));   
  }; 

  useEffect(() => {
    getFetch(); 
  }, []); 

  const addTodo = (taskstring) => {
    if (!taskstring) return; 
    fetch("https://playground.4geeks.com/todo/todos/Nateh1304", {
      method: 'POST',
      body: JSON.stringify({
        "label": taskstring,
        "is_done": false
      }), 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then(response => {
      getFetch(); 
      setNewTodo(""); 
    })
    .catch(error => console.error(error));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo(newTodo);
    }
  };

  const handleLogin = (username) => {
    setIsLoggedIn(true); 
    console.log(`Logged in as: ${username}`);
  };

  const handleDeleteTodo = (id) => {
    fetch("https://playground.4geeks.com/todo/todos/"+id , 
      {
      method: 'DELETE'
    })
    .then(res => {
      getFetch(); 
    })
    .catch(error => console.error(error));
  };

  const handleCheckTodo = (id, newStatus) => {
    fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        is_done: newStatus 
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then(response => {
      getFetch(); 
    })
    .catch(error => console.error(error));
  };

  return (
    <div style={{ width: "600px", margin: "auto", textAlign: "center" }}>
      {!isLoggedIn ? (
        <>
          <h2>Login</h2>
          <Login 
            registered={registeredUsers} 
            onLogin={handleLogin} 
            onKeyPress={handleKeyPress}
          /> 
        </>
      ) : (
        <>
          <h2>To-Do List</h2>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new to-do"
            style={{ width: "80%", padding: "8px", marginBottom: "10px" }}
          />
          <button onClick={() => addTodo(newTodo)} style={{ padding: "8px" }}>
            Add
          </button>
          {todos.length === 0 ? (
            <p>No tasks, add a task</p>
          ) : (
            <ul style={{ padding: 0 }}>
              {todos.map((todo, index) => (
                <TodoList 
                  key={todo.id}
                  todo={todo} 
                  onDelete={handleDeleteTodo} 
                  onCheck={handleCheckTodo} 
                />
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
