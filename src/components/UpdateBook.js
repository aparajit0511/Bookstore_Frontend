import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateBook() {
  const { bookId } = useParams();
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(true);
  const [findBook, setFindBook] = useState({
    bookId: bookId,
    title: "",
    author: "",
    genre: "",
    price: 0.0,
  });

  const navigate = useNavigate();
  //   console.log("Update page", bookId);

  //   console.log("Bookdata", findBook);

  useEffect(() => {
    async function getBookById() {
      console.log("hi");
      try {
        const response = await fetch(
          `http://localhost:8080/api/get-books/${bookId}`
        ).then((res) => res.json());
        console.log("API Response ", response);
        if (response) {
          console.log("Book found");
          setFindBook({
            title: response.title,
            author: response.author,
            genre: response.genre,
            price: response.price,
          });
        } else {
          console.error("Unable to find book");
        }
      } catch (error) {
        console.error("No book found with select id ", error);
      }
    }

    getBookById();
  }, [bookId]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name}: ${value}`);
    setFindBook((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || 0 : value,
      bookId: bookId,
    }));
  };

  console.log("FindBook", findBook);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/add-books", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(findBook),
      });

      if (response) {
        console.log("Book updated successfully");
        // Optionally reset the form:
        setFindBook({ title: "", author: "", genre: "", price: "" });
        setFlag(true);
      } else {
        console.error("Failed to update book");
        setError(false);
      }

      setTimeout(() => {
        navigate(`/`);
      }, 3000);
    } catch (error) {}
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
      UpdateBook
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
            value={findBook.title}
            // defaultValue={findBook.title}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            style={{ width: "100%", padding: "8px" }}
            value={findBook.author}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            style={{ width: "100%", padding: "8px" }}
            value={findBook.genre}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            style={{ width: "100%", padding: "8px" }}
            value={findBook.price}
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
          Book updated successfully
        </h4>
      )}
      {!error && (
        <h4 style={{ marginTop: "15px", color: "green" }}>
          Failed to update book
        </h4>
      )}
    </div>
  );
}
