import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewBook from "./components/NewBook";
import DeleteBook from "./components/DeleteBook";
import BSDataProvider from "./ContextAPI/BSDataProvider";
import UpdateBook from "./components/UpdateBook";
import ShowBooks from "./components/ShowBooks";
import DisplayUsers from "./componentUser/DisplayUsers";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/books", element: <ShowBooks /> },
  { path: "/users", element: <DisplayUsers /> },
  { path: "/newbookentry", element: <NewBook /> },
  { path: "/newbookentry/:bookId", element: <UpdateBook /> },
  { path: "/:bookId", element: <DeleteBook /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BSDataProvider>
      <RouterProvider router={router} />
    </BSDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
