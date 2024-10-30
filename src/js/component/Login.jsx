import React, { useState } from "react";

const Login = ({ registered, onLogin }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (registered.includes(username)) {
      onLogin(username);
      setUsername("");    
    } else {
      alert("User not registered.");
    }
  };
  

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        style={{ padding: "8px", marginBottom: "10px" }}
      />
      <button onClick={handleLogin} style={{ padding: "8px" }}>
        Login
      </button>
    </div>
  );
};

export default Login;

