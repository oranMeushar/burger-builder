import * as actionsType from '../actions/actionTypes';
import rfdc from 'rfdc';
const add = (a, b) => a + b;
const decrease = (a, b) => a - b;

const changeState = (state, name, operation) =>{
    const stateCopy = rfdc()(state);
    stateCopy.ingredients[name].count = operation(stateCopy.ingredients[name].count, 1);
    stateCopy.totalPrice = operation(stateCopy.totalPrice, stateCopy.ingredients[name].price);
    return stateCopy;
}

const initialState = {
    ingredients:{
        salad:{
            count:0,
            price:2
        },
        cheese:{
            count:0,
            price:3,
        },
        meat:{
            count:0,
            price:5,
        }
    },
    totalPrice:5,
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionsType.CHOOSE_INGREDIENTS:
            if (action.target.className.includes('PanelButtons-less')) {
                
                if (state.ingredients[action.target.name].count > 0) {
                    return changeState(state, action.target.name, decrease) 
                }
            }
            else if (action.target.className.includes('PanelButtons-more')){
                return changeState(state, action.target.name, add);
            }
        break;    
        default:
            return state;
    }
}

export default reducer;