import React from 'react';
import { Link } from 'react-router-dom';
import './con.css';

function Header() {
    return (
        <header>                                                                
            <h1>Welcome to Cv Builder !</h1>                                    
            <nav>                                                               
                <ul>                                                            
                    <li><Link to="/login">Login</Link></li>                     
                    <li><Link to="/register">Sign up</Link></li>                
                </ul>                                                           
            </nav>                                                              
        </header>
    );
}
export default Header;

