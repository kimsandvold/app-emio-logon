import React, { useState, useEffect } from 'react';
import BuildPageTitle from '../functions/BuildPageTitle';
const ProductInfo = () => {

    const [methods, setMethods] = useState([1, 2, 3, 4, 5]);

    useEffect(() => {
        document.title = BuildPageTitle('Produkter');
    }, []);

    return (
        <div className="container">
            INFO
        </div>
    );

}

export default ProductInfo;