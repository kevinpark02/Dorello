import React from 'react';
import ListIndexItem from "./list_index_item";

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const lists = this.props.lists;
        const boardId = this.props.boardId;
        const createList = this.props.createList;
        const updateList = this.props.updateList;
        const deleteList = this.props.deleteList;
        
        return(
            <ul>
                {lists.map(list => {
                    if(list.board_id === boardId) {
                        return(
                            <ListIndexItem list={list}
                                           key={list.id}
                                           createList={createList}
                                           updateList={updateList}
                                           deleteList={deleteList}/>
                        )
                    }
                })}
            </ul>
        )
    }
}

export default ListIndex;