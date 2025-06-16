import logo from "./logo.svg";
import "./App.css";
import DisplayBooks from "./components/DisplayBooks";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h3>Bookstore</h3>
      <div className="card-container">
        <div
          className="nav-card"
          onClick={() => {
            navigate("/books");
          }}
        >
          <h4>📚 Books</h4>
          <p>Browse and manage all books</p>
        </div>
        <div
          className="nav-card"
          onClick={() => {
            navigate("/users");
          }}
        >
          <h4>👤 Users</h4>
          <p>View and manage users</p>
        </div>
      </div>
      {/* <DisplayBooks />
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
      </Link> */}
    </div>
  );
}

export default App;
