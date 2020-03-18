import React from 'react';
import { connect } from 'react-redux';

class ListIndex extends React.Component {
    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
    }
    render() {
        if (!this.props.lists) return null;
        "hello"
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex))