import React from 'react';

class ListIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deleteList(this.props.list.id)
    }

    render() {
        const list = this.props.list;
        return(
            <ul className="list-top-content">
                <li key={list.id}>{list.title}</li> 
                {/* Figure out how to give a unique key different from above */}
                <button className="list-delete-btn" onClick={this.handleClick}>X</button>
            </ul>
        )
    }
}

export default ListIndexItem;