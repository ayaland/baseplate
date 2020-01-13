import React from 'react';
import { Link } from 'react-router-dom';

class HomeNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [],
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    render () {
        return(
            <nav className="navbar navbar-default navbar-fixed-top">

                <div>
                    <ul className="navbar-menu">
                        <li className="logo">placeholder</li>
                        {/* img here will have a popup mobile ad */}
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/`}>Pings</Link></li>
                        <li><Link to={`/`}>Hey!</Link></li>
                        <li><Link to={`/`}>Activity</Link></li>
                        <li className="settings"><Link to={`/`}>Settings</Link></li>
                    </ul>
                </div>

            </nav>

        )
    }
}

export default HomeNavbar;