import React from 'react';
import { closeModal } from "../actions/modal_actions";
import { connect } from "react-redux";
import EditCardFormContainer from "../components/cards/edit_card_form_container";
import ProfileFormContainer from "../components/profiles/profile_form_container";

function Modal({modal, cardId, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'edit':
            component = <EditCardFormContainer cardId={cardId}
                                               closeModal={closeModal}/>;
            break;
        case 'profile':
            component = <ProfileFormContainer closeModal={closeModal}/>;
            break;
        default:
            return null
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        modal: state.ui.modal[0],
        cardId: state.ui.modal[1]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)