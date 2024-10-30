import React, { useState } from "react";
import TodoList from "./TodoList"; 
import Login from "./Login"; 

function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const registeredUsers = ["Nathan", "Nate", "Habte","nathan", "nate", "habte" ];

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  
  const handleLogin = (username) => {
    setIsLoggedIn(true); 
    console.log(`Logged in as: ${username}`);
  };

  return (
    <div style={{ width: "600px", margin: "auto", textAlign: "center" }}>
      {!isLoggedIn ? (
        <>
          <h2>Login</h2>
          <Login registered={registeredUsers} onLogin={handleLogin} /> 
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
          <button onClick={addTodo} style={{ padding: "8px" }}>
            Add
          </button>

          {todos.length === 0 ? (
            <p>No tasks, add a task</p>
          ) : (
            <ul style={{ padding: 0 }}>
              {todos.map((todo, index) => (
                <TodoList key={index} todo={todo} index={index} onDelete={handleDeleteTodo} />
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
