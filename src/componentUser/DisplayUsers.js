import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DisplayUsers() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch("http://localhost:8080/users").then(
          (res) => res.json()
        );
        if (response) {
          console.log("USers fetched successfully");
          setUserData(response);
        } else {
          console.log("Unable to extract user data");
        }
      } catch (error) {
        console.log("Catch error", error);
      }
    }
    getUsers();
  }, []);
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
      <h4>DisplayUsers</h4>
      {userData.map((result) => (
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
              <h4>Username</h4>:<p>{result.userName}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4>Email</h4>:<p>{result.email}</p>
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
                // onClick={() => {
                //   setBookList(result);
                //   navigate(`/newbookentry/${result.bookId}`);
                // }}
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
                // onClick={() => navigate(`/${result.bookId}`)}
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
