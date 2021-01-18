import React from 'react';
import './Logo.css';
import BurgerLogo from '../../assets/Logo.png';
import {Link} from 'react-router-dom';

const Logo = () =>{
    return(
        <div className="Logo">
            <Link to = "/"><img src={BurgerLogo} alt="logo"/></Link>
        </div>
            
        
    )
}

export default Logo;