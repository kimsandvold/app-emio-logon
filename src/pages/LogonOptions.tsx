import React, { useState, useEffect } from 'react';
import { CheckAuth } from '../xhr/AuthApiRequests';

const LogonOptions = () => {
    useEffect(() => {
        CheckAuth('aslkdjhakjsdhajsdh').finally(() => {
            console.log('CA OK')
        })
    }, []);
    return (
        <h1>LogonOptions</h1>
    );
}

export default LogonOptions;