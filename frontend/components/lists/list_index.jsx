import React from 'react';
import ListIndexItem from "./list_index_item";
import ListFormContainer from "./create_list_form_container";


class ListIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const lists = this.props.lists;
        const board = this.props.board;
        const createList = this.props.createList;
        const updateList = this.props.updateList;
        const deleteList = this.props.deleteList;
        if (board === undefined) {
            return null;
        }
        
        return(
            <ul>
                <h4 className="list-board-title">{board.board_name}</h4>
                <div className="lists-cont">
                    {lists.map(list => {
                        if(list.board_id === board.id) {
                            return(
                                    <ListIndexItem list={list}
                                                key={list.id}
                                                createList={createList}
                                                updateList={updateList}
                                                deleteList={deleteList}
                                                board={board}/>
                            )
                        }
                    })}
                    <ListFormContainer boardId={board.id}/>
                </div>
            </ul>
        )
    }
}

export default ListIndex;