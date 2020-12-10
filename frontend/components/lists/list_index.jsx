import React from 'react';
import ListIndexItem from "./list_index_item";

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
        
        return(
            <ul>
                <h4>{board.board_name}</h4>
                {lists.map(list => {
                    if(list.board_id === board.id) {
                        return(
                            <ul>
                                <ListIndexItem list={list}
                                               key={list.id}
                                               createList={createList}
                                               updateList={updateList}
                                               deleteList={deleteList}/>
                            </ul>
                        )
                    }
                })}
            </ul>
        )
    }
}

export default ListIndex;