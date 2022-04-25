import React from 'react'


const SignUp = () => {
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
                                <input type="text" id="pseudo" autoComplete='off' required />
                                <label htmlFor='pseudo'>Pseudo</label>
                            </div> 

                            <div className='inputBox'>
                                <input type="email" id="email" autoComplete='off' required />
                                <label htmlFor='email'>Email</label>
                            </div>

                            <div className='inputBox'>
                                <input type="password" id="password" autoComplete='off' required />
                                <label htmlFor='password'>Mot De Passe</label>
                            </div>

                            <div className='inputBox'>
                                <input type="password" id="confirmpassword" autoComplete='off' required />
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
