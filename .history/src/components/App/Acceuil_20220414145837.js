import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

const Acceuil = () => {


        const [btn, setBtn] = useState(false);

    

    

    

    const displayBtn = btn && (
        <Fragment>
            <div className="leftBox">
                <a className="btn-welcome" href=''>Inscription</a>
            </div>
            <div className="rightBox">
                <a className="btn-welcome" to="">Connexion</a>
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