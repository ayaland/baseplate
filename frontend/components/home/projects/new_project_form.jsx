import React from 'react';
import { connect } from 'react-redux';

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

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(project);
    }

    render () {
        return (
            <main>
                <header className="centered header--top">
                    <img width="98" height="78" src={window.legohead} />
                    <h1 className="flush--top push_half--bottom">All right, let's get your project started!</h1>
                </header>
            </main>

            <div className="centered push--bottom">

                <form onSubmit={this.handleSubmit} className="sheet sheet--shadowed sheet--signup flush--top">
                    <h2 className="centered flush--top">Name this project</h2>
                    <br />

                    <div className="push_half--bottom">
                        <input
                            className="input"
                            placeholder="e.g. Space Base"
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                        />
                    </div>
                </form>
            </div>

        );
    }

}