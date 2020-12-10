// import React from 'react';
// import { closeModal } from "../actions/modal_actions";
// import { connect } from "react-redux";
// import EditBoardFormContainer from "../components/boards/edit_board_form_container";

// function Modal({modal, closeModal}) {
//     if (!modal) {
//         return null;
//     }

//     let component;
//     switch (modal) {
//         case 'edit':
//             component = <EditBoardFormContainer/>
//             break;
//         default:
//             return null
//     }

//     return (
//         <div className="modal-background" onClick={closeModal}>
//             <div className="modal-child" onClick={e => e.stopPropagation()}>
//                 {component}
//             </div>
//         </div>
//     )
// }

// const mapStateToProps = state =>{
//     return {
//         modal: state.ui.modal
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         closeModal: () => dispatch(closeModal())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Modal)