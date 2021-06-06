import React, { useContext, useState } from "react";
import { authContext } from '../App';
const AuthFooter= () => {
    const conmtext = useContext(authContext)
    return conmtext.user ? (
        <div>
           emio &copy;
        </div>
     ) : (<></>);
}

export default AuthFooter;