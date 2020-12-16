import React from 'react';

class ListForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.list;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createList(this.state)
        this.setState({ ['title']: "" })
    }

    render() {
        const list = this.state;
        return(
            <div className="list-form-cont">
                <form className="list-form" onSubmit={this.handleSubmit}>
                    <input className="list-form-input" 
                            type="text"
                            value={list.title}
                            placeholder="Add another list"
                            onChange={this.update('title')}/>
                    <input className="btn-green list-form-btn" type="submit" value="Add List"/>
                </form>
            </div>
        )
    }
}

export default ListForm;