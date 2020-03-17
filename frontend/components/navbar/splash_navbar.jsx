import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function SplashNavbar(props) {
    return (
        <nav className="splash-nav">
            <Link to={`/`}><img className="nav_logo" src={window.nav_accounts} /></Link>
            <ul className="splash-nav_list">
                <li className="splash-nav_item">
                    <Link to={`/login`} className="button button--secondary">Sign in</Link>
                </li>
                <li className="splash-nav_item">
                    <Link to={`/signin`} className="button button--tertiary">Try it FREE</Link>
                </li>
            </ul>
        </nav>
    )
}

export default SplashNavbar;