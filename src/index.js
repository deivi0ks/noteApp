import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/index.css";

import LoginForm from "./pages/User/LoginForm.js";
import RegisterForm from "./pages/User/RegisterForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/prisijungimas" element={<LoginForm />} />
        <Route path="/registracija" element={<RegisterForm />} />
      </Routes>
    </React.StrictMode>
  </Router>
);
