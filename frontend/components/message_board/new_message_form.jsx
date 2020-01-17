import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createMessage } from '../../actions/message_actions'

class NewMessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            project_id: '',
            owner_id: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        this.setState({
            project_id: this.props.projectId,
            owner_id: this.props.sessionId
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const message = Object.assign({}, this.state);
        this.props.processForm(message).then(
            this.props.history.push(`/${this.props.projectId}`)
        )
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

    render () {
        return (
            <main>
                
            </main>
        )
    }
}