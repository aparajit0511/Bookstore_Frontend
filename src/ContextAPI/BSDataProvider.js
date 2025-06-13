import React, { useState } from "react";
import { BSDataContext } from "./BSDataContext";

export default function BSDataProvider({ children }) {
  const [bookList, setBookList] = useState({
    bookId: "",
    title: "",
    author: "",
    genre: "",
    price: 0.0,
  });

  return (
    <BSDataContext.Provider value={{ bookList, setBookList }}>
      {children}
    </BSDataContext.Provider>
  );
}
