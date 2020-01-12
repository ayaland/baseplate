import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        console.log('These are props inside constructor')
        console.log(props);
        this.state = {
            name: '',
            password: ''
        };
        console.log(this.state);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        console.log(user);
        this.props.processForm(user);
    }

    handleClick(e) {
        e.preventDefault();
        const user = { name: 'Minifig', password: 'password' }
        console.log(user);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <main>
                <header className="centered header--top">
                    <img width="98" height="78" src={window.legohead} />
                    <h1 className="flush--top push_half--bottom">Log in to Baseplate</h1>
                </header>

                <div className="centered push--bottom">

                    <form onSubmit={this.handleSubmit} className="sheet sheet--shadowed sheet--signup flush--top">
                        <button type="button" className="action_button flush--top">
                            Use<img className="action_button_img" alt="demo" src={window.demo} />account
                            </button>
                        {/* <button onClick={this.handleClick} type="button" className="action_button flush--top">
                            Use<img className="action_button_img" alt="demo" src={window.demo} />account
                            </button> */}

                        <div className="break push--top push--bottom :before">
                            <div className="break__content">Or, use my email address</div>
                        </div>

                        <div className="push_half--bottom">
                            <input
                                className="input"
                                placeholder="Email or username"
                                type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                            />
                        </div>

                        <div className="push_half--bottom">
                            <input
                                className="input"
                                placeholder="Your password"
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </div>
                        <br />

                        <input className="btn" type="submit" value="Next →" />

                    </form>
                </div>

                <footer className="centered push--bottom">
                    {/* <p> */}
                    <small>
                        LEGO-ish font from <a className="decorated" href="https://fontmeme.com/lego-font/">Font Meme</a>
                        <div>{this.renderErrors()}</div>
                    </small>
                    {/* </p> */}
                </footer>
            </main>
        );
    }
}

export default LoginForm;