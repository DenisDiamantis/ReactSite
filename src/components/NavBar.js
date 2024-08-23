import './NavBar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
    return (
        <header>
        <nav className='navBar'>
            <div className='navbar-container'>
            <ul>
                <li ><Link to="/" ><img src='/logo192.png' style={{width:'30px',height:'30px'}}></img></Link></li>
                <li><Link to="/Home">News</Link></li>
                <li><Link to="/Training">Training</Link></li>
            </ul>
            </div>
        </nav>
        </header>
    );
}

export default NavBar;