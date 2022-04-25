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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default SignUp
