import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BSDataContext } from "../ContextAPI/BSDataContext";

export default function DisplayBooks() {
  const [bookData, setBookData] = useState([]);
  const { setBookList } = useContext(BSDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    async function callBooksInfo() {
      try {
        const res = await fetch("http://localhost:8080/");
        const data = await res.json();
        setBookData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    callBooksInfo();
    console.log("check api call");
  }, []);

  console.log(bookData);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // center horizontally
        paddingTop: "30px",
        minHeight: "50vh", // optional for vertical centering
        backgroundColor: "#f0f0f0",
      }}
    >
      <h4>DisplayBooks</h4>
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
        onClick={() => navigate("/")}
      >
        ← Back
      </button>
      {bookData.map((result) => (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "flex-start",
              alignItems: "flex-start",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "15px",
              backgroundColor: "#f9f9f9",
              width: "300px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4>Title</h4>:<p>{result.title}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4>Author</h4>:<p>{result.author}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4>Genre</h4>:<p>{result.genre}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4>Price</h4>:<p>${result.price}</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#4caf50",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setBookList(result);
                  navigate(`/newbookentry/${result.bookId}`);
                }}
              >
                Update
              </button>
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/${result.bookId}`)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
