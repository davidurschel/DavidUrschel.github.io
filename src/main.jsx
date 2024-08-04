import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { BlogPostPageLayout, Layout } from "./components";
import {Root, Features, About, Home, Blog, Projects, Error_404, Experience} from "./routes";
import Contact from "./routes/contact";
import LayoutLanding from "./components/landing/LayoutLanding";

window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0);
});

const router = createHashRouter([
  {
    path: "/",
    element: <LayoutLanding><Root /></LayoutLanding>,
  },
  {
    path: "/home",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/features",
    element: <Layout><Features /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  },
  {
    path: "/experience",
    element: <Layout><Experience /></Layout>,
  },
  {
    path: "/blog",
    element: <Layout><Blog /></Layout>,
  },
  {
    path: "/projects",
    element: <Layout><Projects /></Layout>,
  },
  {
    path: "/post",
    element: <Layout><BlogPostPageLayout title={"Exploring the Wonders of Deep Sea Ecosystems"} /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  },
  {
    path: "/*",
    element: <Layout><Error_404 /></Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
