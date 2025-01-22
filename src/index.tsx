import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { GlobalStyled } from "./GlobalStyled";
import Header from "./components/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Header />
    <Router></Router>
  </React.StrictMode>
);
