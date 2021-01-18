import React from 'react';
import './OrderSummary.css';

const OrderSummary = (props) =>{

    let ingredients = [];
    let count = 0; 

    for (const key in props.ingredients) {
        count = props.ingredients[key].count;
        ingredients.push(
            <li key={key}><strong>{key}: </strong>{count}</li>
        )  
    }

    const backDropclasses = ['OrderSummary-wrapper'];
    const OrderSummaryClasses = ['OrderSummary'];

    if (props.show) {
        backDropclasses.push('OrderSummary-wrapper-active')
        OrderSummaryClasses.push('OrderSummary-active')
    }
    
    return(
        <div className={backDropclasses.join(' ')} onClick={props.clicked}>
            <div className={OrderSummaryClasses.join(' ')}>
                <h2>Your order</h2>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredients}
                </ul>
                <h3><strong>Total price: </strong>${props.totalPrice}</h3>
                <p>Continue to Checkout?</p>
                <div className="OrderSummary-button-wrapper">
                    <button 
                    className="OrderSummary-continue"
                    onClick={props.continued}>Continue</button>
                    <button className="OrderSummary-cancle">Cancle</button>
                </div>   
            </div>
        </div>
    );
}

export default OrderSummary;