import React from 'react' 
import SignUp from "../Authentifie/SignUp";
import Header from "./Header";
import "../../App.css";
import Acceuil from './Acceuil';

function App() {

  return (
    <div>
      <Header />
      <Acceuil />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;