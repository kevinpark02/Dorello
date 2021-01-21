import React from 'react';

class CardForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.card;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createCard(this.state)
            // .then(res => console.log(res.card.id.toString()))
            .then((res) => this.props.updateList({
                id: res.card.list_id.toString(),
                board_id: this.props.lists[res.card.list_id].board_id,
                card_order: this.props.lists[res.card.list_id].card_order.concat([res.card.id.toString()])
            }))
            .then(() => this.props.handleCardForm(e))
        this.setState({ ['name']: "" })
    }

    closeForm(e) {
        e.preventDefault();
        this.props.handleCardForm(e);
    }

    render() {
        const card = this.state;

        return (
            <div className="card-form-cont">
                <form className="card-form" onSubmit={this.handleSubmit}>
                    <input className="card-form-input"
                           type="text"
                           value={card.name}
                           placeholder="Enter a card name..."
                           onChange={this.update('name')}/>
                    <div className="card-form-btns-x">
                        <input className="card-form-btn btn-green" type="submit" value="Add Card"/>
                        <button onClick={this.closeForm}>X</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CardForm;