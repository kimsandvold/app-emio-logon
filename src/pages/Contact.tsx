import React, { useState,useEffect } from 'react';
import { title } from '..';
import BuildPageTitle from '../functions/BuildPageTitle';

const Contact = () => {

    useEffect(() => {
        document.title = BuildPageTitle('Kontakt');
    }, []);

    return (
        <h1>Contact US</h1>
    );
}

export default Contact;