import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createProject } from '../../../actions/project_actions';

class NewProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            owner_id: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            owner_id: this.props.sessionId
        })
        console.log('Component mounted')
        console.log(this.state);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.setState({
        //     owner_id: this.props.sessionId
        // })
        const project = Object.assign({}, this.state);
        this.props.processForm(project).then(
            this.props.history.push(`/${this.props.sessionId}`)
        )
        console.log(this.state);
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
                <header className="centered flush--bottom">
                    <img className="push--top" width="125" height="113" src={window.legohead} />
                    <h2 className="flush--top push_half--bottom">All right, let's get your project started!</h2>
                </header>

                <div className="centered push--bottom">
                    <section className="push_double--bottom narrow">
                        <form onSubmit={this.handleSubmit} className="flush--top">

                            <article className="sheet push--bottom left">
                                    <h3 className="flush">Name this project</h3>
                                    <div className="push_quarter--top push--bottom">
                                        <input
                                            className="input full-width"
                                            placeholder="e.g. Space Base"
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.update('name')}
                                        />
                                    </div>

                                    <h3 className="flush">Add an optional description</h3>
                                    <div className="push_half--bottom">
                                        <input
                                            className="input full-width"
                                            placeholder="e.g. The sweetest grey base that ever spaced!"
                                            type="text"
                                            value={this.state.description}
                                            onChange={this.update('description')}
                                        />
                                    </div>   
                            </article>

                            <input className="btn" type="submit" value="Create this project" />
                            <div className="session-errors">{this.renderErrors()}</div>
                        </form>
                    </section>
                </div>
            </main>

        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        sessionId: state.session.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (project) => dispatch(createProject(project))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewProjectForm));