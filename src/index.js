import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Add from "./components/Add/Index"
import ViewAll from "./components/ShowFiles/Index"
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
{
    path: "/",
    element: <ViewAll />,
},
{
    path: "/add",
    element: <Add />
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RouterProvider router={router} />
    </>
);

reportWebVitals();
