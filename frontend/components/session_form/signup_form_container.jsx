import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, login, logout } from '../../actions/session_actions';
import LoginFormContainer from './signup_form_container';

class SignupFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
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
                    <h1 className="flush--top push_half--bottom">Sign up for Baseplate</h1>
                </header>

                <div className="centered push--bottom">

                    <form onSubmit={this.handleSubmit} className="sheet sheet--shadowed sheet--signup flush--top">
                        <h2 className="centered flush--top">Type your name & email address to begin</h2>
                        <br />

                        <div className="push_half--bottom">
                            <input
                                className="input"
                                placeholder="Your name"
                                type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                            />
                        </div>

                        <div className="push_half--bottom">
                            <input
                                className="input"
                                placeholder="Your email"
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </div>

                        <div className="push_half--bottom">
                            <input
                                className="input"
                                placeholder="Choose a password"
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
                    <p>
                        <small>
                            Having trouble? <a className="decorated" href="https://www.linkedin.com/in/aya-shirai-6791663/">We can't help.</a>
                        </small>
                    </p>
                </footer>
            </main>
        );
    }
}

const mapStateToProps = ({ errors }) => {
    return { errors: errors.session,
             formType: 'signup' };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer);