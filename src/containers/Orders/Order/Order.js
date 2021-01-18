import React from 'react';
import './Order.css';

const Order = (props) =>{
    
    let ingredients = [];

    for (const key in props.ingredients) {
        ingredients.push(
            <li key={key}><strong>{key}: </strong>{props.ingredients[key].count}</li>
        )
    }

    return(
        <div className="Order">
            <h3>Ingredients:</h3>
            <ul>{ingredients}</ul>
            <p> <strong>Price: </strong>${props.totalPrice}</p>
        </div>
    )
}

export default Order;