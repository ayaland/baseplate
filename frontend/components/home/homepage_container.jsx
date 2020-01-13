import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class HomepageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aaa: 'bbb'
        }
    };

    render() {
        return (<div>Homepage!</div>);
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