import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from "../Authentifie/SignUp";
import Login from "../Authentifie/Login";
import ErrorPage from './ErrorPage';
import Header from "./Header";
import "../../App.css";
import Acceuil from './Acceuil';
import AcceuilCrud from './AcceuilCrud';
import ForgetPassword from './ForgetPassword';

function App() {

  return (

    
    <div>
      
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/crud" element={<AcceuilCrud />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route element ={<ErrorPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;