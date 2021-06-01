

import React, { useState } from 'react';

const ChooseLogonMethod = () => {

    const [methods, setMethods] = useState([1,2,3,4,5]);

    return (
        <div>
                {methods.map((i) => (
                    <div>{i}</div>

                ))}
        </div>
    );  

}

export default ChooseLogonMethod;