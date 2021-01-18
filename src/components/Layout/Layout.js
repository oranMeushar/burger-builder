import React from 'react';
import './Layout.css';
import Navigation from '../../components/Navigation/Navigation';

const Layout = (props) =>{
    return (
        <div className = "Layout">
            <Navigation isAuth = {props.isAuth}/>
            {props.children}
        </div>
    )
}

export default Layout;