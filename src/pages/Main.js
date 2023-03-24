import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegisterForm from "./User/RegisterForm.js";
import LoginForm from "./User/LoginForm.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registracija" element={<RegisterForm />} />
        <Route path="/prisijungimas" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}
