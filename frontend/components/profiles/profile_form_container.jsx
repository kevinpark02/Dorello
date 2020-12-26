import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './profile_form';

const mapStateToProps = (state) => {
    return({
        currentUser: state.entities.users[state.session.id]
    });
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        closeModal: ownProps.closeModal
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);