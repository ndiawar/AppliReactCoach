import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from "../Authentifie/SignUp";
import Login from "../Authentifie/Login";
import ErrorPage from './ErrorPage';
import Header from "./Header";
import "../../App.css";
import Acceuil from './Acceuil';

function App() {

  return (

    
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil/>} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/login" element={<Login />} />
          <Route elementn ={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;