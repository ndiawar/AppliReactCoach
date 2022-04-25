import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

const Acceuil = () => {


        const [btn, setBtn] = useState(false);

    

    

    

    const displayBtn = btn && (
        <Fragment>
            <div className="leftBox">
                <Link className="btn-welcome" to="/signup">Inscription</Link>
            </div>
            <div className="rightBox">
                <Link className="btn-welcome" to="/login">Connexion</Link>
            </div>
        </Fragment>
    )

    return (
        <main className="welcomePage">
            { displayBtn }
        </main>
    )


}

export default Acceuil