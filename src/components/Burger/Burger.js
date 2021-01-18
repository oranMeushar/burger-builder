import React from 'react';
import './Burger.css';

const Burger = (props) =>{
    let ingredients = [];
    for (const key in props.ingredients) {
        let count = props.ingredients[key].count;
        for (let i = 0; i < count; i++){
            ingredients.push(
                <div key={`${key}-${i}`} className={`Burger-${key}`}></div>
            )
        }
    }
    if (ingredients.length === 0) {
        ingredients = (<p className="Burger-ingredients">Please select your ingredients</p>);
    }

    return(
        <div className="Burger">
            <div className="Burger-bread-top">
                <div className="Burger-seeds1"></div>
                <div className="Burger-seeds2"></div>
            </div>
                {ingredients}    
            <div className="Burger-bread-bottom"></div>
        </div>
    )
}
export default Burger;