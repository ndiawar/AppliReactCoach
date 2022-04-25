import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import SignUp from "./Components/Authentifie/SignUp";
import Sign from "./images/Sign.png"
import "./App.css";

function App() {

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 col-xl-6 vh-100'>
            <img src={Sign} alt="" className='w-75' />
          </div>
          <div className='col-lg-6 col-xl-6'>
            <SignUp />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;