import logo from "./logo.svg";
import "./App.css";
import DisplayBooks from "./components/DisplayBooks";
import { Link } from "react-router-dom";

function App() {
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

export default App;
