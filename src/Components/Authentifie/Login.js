import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../Firebase/indexF';
import {useNavigate} from "react-router-dom";


function Login() {

const firebase = useContext(FirebaseContext);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (password.length > 5 && email !== '') {
      setBtn(true)
    } else if (btn === true) {
      setBtn(false)
    }
  }, [password, email, btn])

  const handleSubmit = e => {
    e.preventDefault();

    firebase.loginUser(email, password)
    .then(user => {
      setEmail('');
      setPassword('');
      navigate("/crud")
    })
    .catch(error => {
      setError(error);
      setEmail('');
      setPassword('');
    })
  }

  return (

    <div className='signUpLoginBox'>
      <div className='slContainer'>


        <div className='formBoxLeftLogin mt-5'>
            {/* <img src={sign} alt="auth image" className="w-100 py-3" height={600} /> */}
        </div>

        <div className='formBoxRight mt-5'>
            <div className='formContent'>
                <form onSubmit={handleSubmit} >

                    {/* errorMsg mon signal d'erreur */}
                    {error !== '' && <span>{error.message}</span>}
          
                    <h2>Connexion</h2>

                    <div className='inputBox'>
                        <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete='off' required />
                        <label htmlFor='email'>Email</label>
                    </div>

                    <div className='inputBox'>
                        <input onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete='off' required />
                        <label htmlFor='password'>Mot De Passe</label>
                    </div>

                    {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}
                </form>

                <div className="linkContainer">
                    <Link className="simpleLink" to="/signup">Nouveau dans la librairie ? inscrivez-vous maintenant!!!</Link>
                      <br />
                    <Link className="simpleLink" to="/forgetpassword">Mot de passe oublier? Recuperez-Les!</Link>

                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Login