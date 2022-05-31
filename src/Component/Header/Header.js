import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/Albums'>Album</NavLink>
                <NavLink to='/Friends'>Friends</NavLink>
            </nav>
        </div>
    );
};

export default Header;