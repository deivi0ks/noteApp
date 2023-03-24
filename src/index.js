import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/index.css";

import LoginForm from "./pages/User/LoginForm.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <nav class="bg-neutral-900 border-gray-200 px-2 sm:px-4 py-2.5">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <span class="self-center text-xl text-white font-semibold whitespace-nowrap">
              NOTE-APP REACT.JS
            </span>
          </a>
          <div class="hidden w-full md:block md:w-auto">
            <ul class="flex flex-wrap items-center justify-between text-slate-400 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <li>
                <a href="/prisijungimas" class="block uppercase">
                  prisijungti prie paskyros
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/prisijungimas" element={<LoginForm />} />
      </Routes>
    </React.StrictMode>
  </Router>
);
