import React, { useState, useEffect } from 'react';
import { FirebaseContext } from '../../Firebase/indexF';


const LogOut = () => {

    const firebase = useContext(FirebaseContext);

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) {
            firebase.signoutUser();
        }
    }, [checked]);

    const handleChange = event => {
        setChecked(event.target.checked);
    }

    return (

        <div className='logoutContainer'>
            <label className='switch'>

                <input 
                    onChange={handleChange}
                    type="checkbox"
                    checked={checked}
                />
                

                <span className='slider round'></span>
            
            </label>
        </div>

    )
}

export default LogOut