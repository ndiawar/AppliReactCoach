import React, {useState} from 'react';


const SignUp = () => {

    const data = {
        pseudo: '',
        email: '', 
        password: '',
        confirmPassword: ''
    }

    //notre état pour sauvegarder
    const [loginData, setLoginData] = useState(data);

    //pour nos événements dans les inputs
    //On prend tout ce qu'on a sur l'objet data pour pouvoir changer les informations
    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value})
    }

    //faire un desturing pour nos value dans input
    const { pseudo, email, password, confirmPassword } = loginData;

    return (

        <div className='signUpLoginBox'>
            <div className='slContainer'>
                <div className='formBoxLeftSignup'>

                </div>
                <div className='formBoxRight'>
                    <div className='formContent'>
                        <form>
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

                            <div className='inputBox'>
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmpassword" autoComplete='off' required />
                                <label htmlFor='confirmpassword'>Confirmer le Mot De Passe</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default SignUp
