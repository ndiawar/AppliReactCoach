import React from 'react'
import Librairie from "../../images/Librairie.png";

const Acceuil = () => {

    return (

        <main className="welcomePage ">
            <div className='container-fluid mt-5'>
                <div className='row mt-5'>
                <div className="col-6 col-lg-6">
                <img src={Librairie} className='w-75 mt-2' alt="image Acceuil" />
                    
                </div>
                <div className="col-6 col-lg-6 rightBox">
                    <p>
                        Sint commodo labore duis aliquip aliquip. 
                        Magna commodo duis dolor non consequat deserunt non ad ex ut laborum dolore qui. 
                        Veniam culpa cupidatat id consectetur excepteur sunt laborum enim ad. 
                        Labore non aliqua nostrud sit qui occaecat eiusmod voluptate.
                    </p>
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