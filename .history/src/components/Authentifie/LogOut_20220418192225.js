import React, { useState } from 'react';

const LogOut = () => {

    const [checked, setChecked] = useState(false);

    return (

        <div className='logoutContainer'>
            <label className='switch'>

                <input 
                    type="checkbox"
                    checked={checked}
                />
                

                <span className='slider round'></span>
            
            </label>
        </div>

    )
}

export default LogOut