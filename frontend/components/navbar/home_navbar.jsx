import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';


class HomeNavbar extends React.Component {
    constructor(props) {  
        super(props);
        this.state = {
            showMenu: false,
            showPints: false
        }
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.showPints = this.showPints.bind(this);
        this.hidePints = this.hidePints.bind(this);
        this.userLogout = this.userLogout.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.hideMenu);
        });
    }

    hideMenu(e) {
        if (!this.dropdownMenu || !this.dropdownMenu.contains(e.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.hideMenu);
            });
        }
    }

    showPints(e) {
        e.preventDefault();
        this.setState({ showPints: true}, () => {
            document.addEventListener('click', this.hidePints);
        });
    }

    hidePints(e) {
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({ showPints: false }, () => {
                document.removeEventListener('click', this.hidePints);
            });
        }
    }

    userLogout() {
        this.props.logout().then(
            this.props.history.push('/login')
        );
    }

    render () {
        {/* navbar icons are 24 x 24 */}
        return(
            <div className="outer-container">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <ul className="navbar-menu">
                        <li className="nav_accounts nav_link">
                            {/* img here will have a popup mobile ad */}
                            <Link to={`/`}><img className="nav_icon" src={window.nav_accounts} /></Link>
                        </li>

                        <li className="nav_link">
                            <Link to={`/`}><img src={window.nav_home} /> Home</Link>
                        </li>

                        <li 
                            className="nav_link" 
                            onClick={this.showPints} 
                            data-toggle="dropdown-pints"
                        >
                            <img className="nav_icon" src={window.nav_pint}/> Pints
                            <div className="dropdown-menu pints-menu">
                                { this.state.showPints
                                    ? (
                                        <div
                                            className="dropdown-pints"
                                            ref={(element) => {
                                                this.dropdownMenu = element;
                                            }}>
                                            <section className="nav-menu_section">
                                                <h3 className="flush--top push_half--bottom">
                                                    <span>
                                                        <img src={window.cheers} />
                                                        &nbsp;
                                                        Pints are glasses of delicious beverages drunk by one person or a few.
                                                    </span>
                                                </h3>
                                            </section>
                                        </div>)
                                    : (
                                        null)
                                }

                            </div>
                        </li>

                        {/* suggestion from Phil: can I prevent default to prevent the browser from wiping the props and state when clicking on this link? */}
                        <li className="nav_link">
                            {/* <Link to={`https://www.youtube.com/watch?v=prgm4eKq6d4`}><img src={window.nav_hey} /> Hey!</Link> */}
                            <a href="https://www.youtube.com/watch?v=prgm4eKq6d4"><img src={window.nav_hey} /> Hey!</a>
                        </li>
                        
                        <li className="nav_link"><Link to={`/`}>Activity</Link></li>

                        <li className="nav_settings">
                            <img 
                                className="nav_icon" 
                                height="30" 
                                onClick={this.showMenu} 
                                src={window.demo_avatar} 
                                data-toggle="dropdown-menu settings-menu" 
                            />
                            <div className="dropdown-menu settings-menu">
                                { this.state.showMenu
                                    ? (
                                        <div
                                            className="dropdown-settings"
                                            ref={(element) => {
                                                this.dropdownMenu = element;
                                            }}>
                                            <section className="nav-menu_section">
                                                <h3 className="flush--top push_half--bottom break :before">
                                                    <span>Personal Settings</span>
                                                </h3>
                                                <p className="notatag" onClick={this.userLogout}>Log out</p>
                                            </section>
                                        </div>)
                                    : (
                                        null)
                                }
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavbar);