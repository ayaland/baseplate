import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Homepage from './homepage';

// ownProps will be able to match params to userId
const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);