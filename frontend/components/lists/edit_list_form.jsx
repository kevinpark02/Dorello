import React from 'react';

class EditListForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.list;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateList(this.state)
    }

    render() {
        const list = this.state;

        return (
            <div>
                <form className="list-edit-form" onSubmit={this.handleSubmit}>
                    <input className="list-edit-input-field"
                           type="text"
                           value={list.title}
                           placeholder="Edit list title"
                           onChange={this.update('title')}/>
                    <input className="btn-blue" type="submit" value="Edit"/>
                </form>
            </div>
        )
    }
}

export default EditListForm