import React from "react";

const TodoList = ({ todo, index, onDelete }) => {
  return (
    <li
      key={index}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        marginBottom: "5px",
        backgroundColor: "#f3f3f3",
        borderRadius: "4px",
        position: "relative",
      }}
    >
      <span>{todo.text}</span>
      <button
        onClick={() => onDelete(index)}
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
