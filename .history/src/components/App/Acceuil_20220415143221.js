import React from 'react'
import Librairie from "../../images/Librairie.png";

const Acceuil = () => {

    return (

        <main className="welcomePage">
            <div className='container-fluid'>
                <div className='row'>
                <div className="col-6 col-lg-6 col-md-6 col-xl-6 leftBox">
                <img src={Librairie} className='w-75' alt="image Acceuil" />
                    
                </div>
                <div className="col-6 col-lg-6 col-md-6 col-xl-6">
                    <p>
                        Sint commodo labore duis aliquip aliquip. 
                        Magna commodo duis dolor non consequat deserunt non ad ex ut laborum dolore qui. 
                        Veniam culpa cupidatat id consectetur excepteur sunt laborum enim ad. 
                        Labore non aliqua nostrud sit qui occaecat eiusmod voluptate.
                    </p>
                    <button className='btn-welcome'>Connexion</button>
                    <button className='btn-welcome'>Inscription</button>
                </div>
                </div>
            </div>
        </main>

    )

}

export default Acceuil