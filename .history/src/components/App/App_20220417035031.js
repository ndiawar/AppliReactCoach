import React from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import SignUp from "../Authentifie/SignUp";
import Header from "./Header";
import "../../App.css";
import Acceuil from './Acceuil';

function App() {

  return (
  
      <Router>

        <Header />

        <Route path="/" element={<Acceuil/>} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route elementn ={<ErrorPage />} />

      </Router>
      
    
  );
}

export default App;