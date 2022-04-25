import React from 'react'
import {librairie} from "../../images/Librairie.png";

const Acceuil = () => {

    return (

        <main className="welcomePage">
            <div className="leftBox">
                <p>
                Sint commodo labore duis aliquip aliquip. 
                Magna commodo duis dolor non consequat deserunt non ad ex ut laborum dolore qui. 
                Veniam culpa cupidatat id consectetur excepteur sunt laborum enim ad. 
                Labore non aliqua nostrud sit qui occaecat eiusmod voluptate.
                </p>

                <button className='btn-welcome'>Inscription</button>
            </div>
            <div className="rightBox">
                <img src={librairie} alt="image Acceuil" />
                <button className='btn-welcome'>Connexion</button>
            </div>
        </main>

    )

}

export default Acceuil