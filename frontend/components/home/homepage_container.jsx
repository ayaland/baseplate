import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HomeNavbar from '../navbar/home_navbar';
import ProjectCard from './project_card';

class HomepageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main>
                <HomeNavbar />
                <div className="project-index">
                    <header className="centered">
                        <h1 className="push--top push_half--bottom">
                            <span>Your Projects</span>
                        </h1>
                    </header>
                    <ProjectCard />
                </div>
            </main>
        );
    }

}

// ownProps will be able to match params to userId
const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomepageContainer);