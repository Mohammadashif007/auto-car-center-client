import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="w-4/5 mx-auto">
        <React.StrictMode>
            <RouterProvider router={routes}></RouterProvider>
        </React.StrictMode>
    </div>
);
