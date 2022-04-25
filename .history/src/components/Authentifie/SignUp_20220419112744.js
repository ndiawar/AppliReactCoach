import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../Firebase/indexF';
import { Link } from 'react-router-dom';
import sign from "../../images/Sign.png";
import {useNavigate} from "react-router-dom";


const SignUp = () => {
    

    const firebase = useContext(FirebaseContext);

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password, pseudo } = loginData;
        firebase.signupUser(email, password)
        .then( authUser => {
            return firebase.user(authUser.user.uid).set({
                pseudo,
                email
            })
        })
        .then(() => {
            setLoginData({...data});
            navigate("/login")
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }

    const { pseudo, email, password, confirmPassword } = loginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword 
    ? <button disabled>Inscription</button> : <button>Inscription</button>

    // gestion erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>;

    return ( 

        <div className='signUpLoginBox'>
            <div className='slContainer'>
                <div className='formBoxLeftSignup'>
                    <img src={sign} alt="auth image" className="w-100 py-3" height={600} />
                </div>
                <div className='formBoxRight'>
                    <div className='formContent'>
                        <form onSubmit={handleSubmit}>

                            {/* errorMsg mon signal d'erreur */}
                            {errorMsg}

                            <h2>Inscription</h2>
                            <div className='inputBox'>
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete='off' required />
                                <label htmlFor='pseudo'>Pseudo</label>
                            </div> 

                            <div className='inputBox'>
                                <input onChange={handleChange} value={email} type="email" id="email" autoComplete='off' required />
                                <label htmlFor='email'>Email</label>
                            </div>

                            <div className='inputBox'>
                                <input onChange={handleChange} value={password} type="password" id="password" autoComplete='off' required />
                                <label htmlFor='password'>Mot De Passe</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required />
                                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            </div>

                            {btn}
                        </form>

                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Déjà inscrit? Connectez-vous.</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}



export default SignUp
