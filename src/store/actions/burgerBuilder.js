import * as actionsType from './actionTypes';

export const chooseIngredients = (e) =>{
    return{
        type:actionsType.CHOOSE_INGREDIENTS, 
        target:e.target
    }
}