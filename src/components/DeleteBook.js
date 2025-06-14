import React, { useContext, useEffect } from "react";
import { BSDataContext } from "../ContextAPI/BSDataContext";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteBook() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  console.log("hi delete", bookId);

  useEffect(() => {
    async function deleteBookEntry() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/delete-book/${bookId}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete book");
        }

        console.log("Book deleted successfully");
        // Redirect to home or book list page after delete
        navigate("/");
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }

    if (bookId) {
      deleteBookEntry();
    }
  }, [bookId]);

  return <div>DeleteBook</div>;
}
