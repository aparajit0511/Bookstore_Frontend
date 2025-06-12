import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NewBook() {
  const [flag, setFlag] = useState(false);
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    price: 0.0,
  });

  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };

  const onHandleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        console.log("Book added successfully");
        // Optionally reset the form:
        setBook({ title: "", author: "", genre: "", price: "" });
        setFlag(true);
      } else {
        console.error("Failed to add book");
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
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
          Title:
          <input
            type="text"
            name="title"
            style={{ width: "100%", padding: "8px" }}
            value={book.title}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            style={{ width: "100%", padding: "8px" }}
            value={book.author}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            style={{ width: "100%", padding: "8px" }}
            value={book.genre}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            style={{ width: "100%", padding: "8px" }}
            value={book.price}
            onChange={onHandleChange}
          />
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
          onClick={onSubmitHandler}
        >
          Submit
        </button>
      </form>
      {flag && (
        <h4 style={{ marginTop: "15px", color: "green" }}>
          Book added successfully
        </h4>
      )}
    </div>
  );
}
