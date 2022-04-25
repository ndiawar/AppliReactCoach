import React from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import SignUp from "../Authentifie/SignUp";
import logIn from "../Authentifie/logIn"
import Header from "./Header";
import "../../App.css";
import Acceuil from './Acceuil';

function App() {

  return (
  
      <Router>

        <Header />

        <Route path="/" element={<Acceuil/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<logIn />} />
        
        <Route elementn ={<ErrorPage />} />

      </Router>
      
    
  );
}

export default App;