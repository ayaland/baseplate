import React from 'react';


class SettingsMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }
        this.showMenu = this.showMenu.bind(this)
        this.hideMenu = this.hideMenu.bind(this)
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

    render() {
        return (
            <div>

                { this.state.showMenu 
                    ? (
                        <div 
                            className="menu"
                            ref={(element) => {
                                this.dropdownMenu = element;
                            }}>
                            Menu!
                            <p>Menu line</p>
                        </div>
                    ) 
                    : (
                        null
                    )
                }
            </div>
        );
    }
}

export default SettingsMenu;