import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class HomeNavbar extends React.Component {
    constructor(props) {  
        super(props);
        this.state = {
            showMenu: false
        }
        this.showMenu = this.showMenu.bind(this)
        this.hideMenu = this.hideMenu.bind(this)
        this.userLogout = this.userLogout.bind(this)
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.hideMenu);
        });
    }

    hideMenu(e) {
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.hideMenu);
            });
        }
    }

    userLogout() {
        this.props.logout();
    }

    render () {
        return(
            <div className="outer-container">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <ul className="navbar-menu">
                        <li className="nav_accounts nav_link"><img className="nav_icon" src={window.nav_accounts} /></li>
                        {/* img here will have a popup mobile ad */}
                        {/* navbar icons are 24 x 24 */}
                        <li className="nav_link"><Link className="text-link" to={`/`}><img src={window.nav_home} /> Home</Link></li>
                        <li className="nav_link"><Link className="text-link" to={`/`}><img src={window.nav_pint} /> Pints</Link></li>
                        <li className="nav_link"><a href={`https://www.youtube.com/watch?v=prgm4eKq6d4`}><img src={window.nav_hey} /> Hey!</a></li>
                        <li className="nav_link"><Link className="text-link" to={`/`}>Activity</Link></li>

                        <li className="nav_settings">
                            <img className="nav_icon" height="30" onClick={this.showMenu} src={window.demo_avatar} data-toggle="dropdown-menu" />
                                <div className="dropdown-menu">
                                    { this.state.showMenu
                                        ? (
                                            <div
                                                className="dropdown-settings"
                                                ref={(element) => {
                                                    this.dropdownMenu = element;
                                                }}>
                                                Personal Settings
                                                <a href="#" onClick={this.userLogout}>Log out</a>
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