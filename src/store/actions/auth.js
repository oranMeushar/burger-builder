import * as actionsType from './actionTypes';


export const success = (token, userId) =>{
    return{
        type:actionsType.AUTH_SUCCESS,
        payload:{
            token,
            userId,
            error:false
        }
    }
}

export const logout = () =>{
    return{
        type:actionsType.AUTH_LOGOUT
    }
}

export const setToken = (token) =>{
    return{
        type:actionsType.AUTH_SET_TOKEN,
        payload:{
            token,
        }
    }
}