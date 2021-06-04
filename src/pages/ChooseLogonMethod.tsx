import React, { useState } from 'react';
const ChooseLogonMethod = () => {

    const [methods, setMethods] = useState([1, 2, 3, 4, 5]);

    return (

        <div className="container">
            <div className="list-group">
                {methods.map((i) => (
                    <a href="/logon" className="list-group-item list-group-item-action ">{i}</a>
                ))}
            </div>
        </div>
    );

}

export default ChooseLogonMethod;