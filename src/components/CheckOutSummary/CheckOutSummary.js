import React from 'react';
import './CheckOutSummary.css';
import Burger from '../Burger/Burger';

const CheckOutSummary = (props) => {
    return (
        <div className="CheckOutSummary">
            <h1>We hope it taste well</h1>
            <Burger ingredients = {props.ingredients}/>
            <div className="CheckOutSummary-button-wrapper">
                    <button 
                        className="CheckOutSummary-continue"
                        onClick={props.checkOutContinue}>Continue</button>
                    <button 
                        className="CheckOutSummary-cancle"
                        onClick={props.checkOutCancle}>Cancle</button>
            </div>   
        </div>
    )
}

export default CheckOutSummary;