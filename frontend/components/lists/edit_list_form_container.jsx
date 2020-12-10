import { connect } from 'react-redux';
import EditListForm from './edit_list_form';
import { updateList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    const list= ownProps.list;
    const creatorId = state.session.id;
    // console.log(list.title)
    // console.log(list.board_id)
    return({
        list: { id: list.id, title: list.title, board_id: list.board_id, creator_id: creatorId }
    })
}


const mapDispatchToProps = (dispatch) => {
    return({
        updateList: list => dispatch(updateList(list))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditListForm)