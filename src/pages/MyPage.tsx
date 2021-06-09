import React, { useState, useEffect } from 'react';
import BuildPageTitle from '../functions/BuildPageTitle';
import { CheckAuth } from '../xhr/AuthApiRequests';

const MyPage = () => {

    useEffect(() => {
        document.title = BuildPageTitle('Min side');

        CheckAuth('aslkdjhakjsdhajsdh').finally(() => {
            console.log('CA OK')
        })
    }, []);
    return (
        <h1>MyPage</h1>
    );
}

export default MyPage;