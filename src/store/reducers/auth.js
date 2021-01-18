import * as actionsType from '../actions/actionTypes';

const initialState = {
    token:null,
    userId:null,
}

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case actionsType.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
            }; 
        case actionsType.AUTH_LOGOUT:
            return{
                ...state,
                token:null,
                userId:null,
            }
        case actionsType.AUTH_SET_TOKEN:
            return{
                ...state,
                token:action.payload.token,
            }            
        default:
            return state;
    }
}

export default reducer;