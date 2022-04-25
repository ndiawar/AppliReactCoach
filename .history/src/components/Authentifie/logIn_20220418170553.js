import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    if (password.length > 5 && email !== '') {
      setBtn(true)
    } else if (btn === true) {
      setBtn(false)
    }
  }, [password, email])
  return (

    <div className='signUpLoginBox'>
      <div className='slContainer'>


        <div className='formBoxLeftLogin'>
            {/* <img src={sign} alt="auth image" className="w-100 py-3" height={600} /> */}
        </div>

        <div className='formBoxRight'>
            <div className='formContent'>
                <form >

                    {/* errorMsg mon signal d'erreur */}
          
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
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Login