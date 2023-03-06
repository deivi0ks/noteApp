import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import loginForm from './loginForm';


export default function welcomeForm() {
    document.title = 'Note-App pagrindinis';
    return (
        <div>

        <Link to="/about">
          <button>Click</button>
        </Link>
  
        <Routes>
          <Route path="/about" element={<loginForm />} />
        </Routes>
        
      </div>
    )
  }