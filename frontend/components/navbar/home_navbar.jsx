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
            <div className="outer-container">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <ul className="navbar-menu">
                        <li className="nav_accounts nav_link"><img className="nav_icon" src={window.nav_accounts} /></li>
                        {/* img here will have a popup mobile ad */}
                        {/* navbar icons are 24 x 24 */}
                        <li className="nav_link"><Link to={`/`}><img src={window.nav_home} /> Home</Link></li>
                        <li className="nav_link"><Link to={`/`}>Pings</Link></li>
                        <li className="nav_link"><Link to={`/`}>Hey!</Link></li>
                        <li className="nav_link"><Link to={`/`}>Activity</Link></li>
                        <li className="nav_settings">
                            <img className="nav_icon" src={window.demo_avatar} />
                            <div className="dropdown-div">
                                <div className="ddown-content show-dropdown">
                                    <Link to={`/`}>link</Link>
                                    <Link to={`/`}>link</Link>
                                    <Link to={`/`}>link</Link>
                                </div>
                            </div>        
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}

export default HomeNavbar;