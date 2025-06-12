import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NewBook() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        flexDirection: "column",
      }}
    >
      <button
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          backgroundColor: "#6c757d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={onClickHandler}
      >
        ← Back
      </button>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "30px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "300px",
        }}
      >
        <label>
          Book Name:
          <input type="text" style={{ width: "100%", padding: "8px" }} />
        </label>
        <label>
          Author:
          <input type="text" style={{ width: "100%", padding: "8px" }} />
        </label>
        <label>
          Genre:
          <input type="text" style={{ width: "100%", padding: "8px" }} />
        </label>
        <label>
          Price:
          <input type="number" style={{ width: "100%", padding: "8px" }} />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
