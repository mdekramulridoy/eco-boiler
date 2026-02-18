import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { SearchProvider } from "./Context/SearchContext";
import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop></ScrollToTop>
      <SearchProvider>
        <App />
      </SearchProvider>
  </BrowserRouter>,
);
