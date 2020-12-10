import React from 'react';

class ListIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const list = this.props.list;
        return(
            <li>{list.title}</li>
        )
    }
}

export default ListIndexItem;