import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, removeSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'Sign up'
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);