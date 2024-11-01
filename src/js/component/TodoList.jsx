import React from "react";

const TodoList = ({ todo, onDelete, onCheck }) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        marginBottom: "5px",
        backgroundColor: "#f3f3f3",
        borderRadius: "4px",
        position: "relative",
         
         
      }}
    >
      <label style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={todo.is_done}
          onChange={() => onCheck(todo.id, !todo.is_done)} 
          style={{ marginRight: '10px' }} 
        />
        {todo.label}
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          backgroundColor: "transparent", 
          border: "none",
          color: "#f3f3f3", 
          fontSize: "16px",
          cursor: "pointer",
        }}
        className="delete-btn"
      >
        ✕
      </button>
      <style>
        {`
          li:hover .delete-btn {
            color: red; 
          }
        `}
      </style>
    </li>
  );
};

export default TodoList;
