import React from 'react';
// rsf это глупый функциональный компонент
function Products(props) {
    
    console.log(props);

    return (
        <ul>
            {
                props.products.map(
                    (product,key) => <li key ={key}>{product}</li>
                    )
            }
        </ul>
    );
}

export default Products;