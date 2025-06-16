import React from "react";
import DisplayBooks from "./DisplayBooks";
import { Link } from "react-router-dom";

export default function ShowBooks() {
  return (
    <div className="App">
      <h3>Bookstore</h3>
      <DisplayBooks />
      <Link to="/newbookentry">
        <button
          style={{
            padding: "10px 10px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add a new book
        </button>
      </Link>
    </div>
  );
}
