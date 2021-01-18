import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

const Navigation = (props) =>{
    return(
        <header className = "Header">
            <Logo/>
            <nav>
                <NavLink exact to="/">Burger Builder</NavLink>
                {props.isAuth?<NavLink exact to="/orders">Orders</NavLink>:null}
                <NavLink exact to={props.isAuth?'/logout':'/auth'}>{props.isAuth ?'Logout':'Login'}</NavLink>
            </nav>
        </header>
    )
    
}

export default Navigation;