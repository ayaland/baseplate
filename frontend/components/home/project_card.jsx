import React from 'react';
import { connect } from 'react-redux';


class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        };
    }

    componentDidMount() {
        console.log(ownProps)
    }

    render() {
        return (
            <main>
                <div className="project-card">
                    <p>Project card</p>
                </div>
            </main>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);