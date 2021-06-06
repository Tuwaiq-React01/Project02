import React, { Component } from 'react'


export default class EditGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: this.props.game.name,
        }
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }


    editGame = (e, input) => {
        e.preventDefault();
        const oldGame = this.props.game
        this.props.handleEditGame(oldGame, input)
    }



    render() {

        return (
            <div>
                <form className="input-group edit-form" >
                    <input type="text" value={this.state.input} onChange={this.handleChange} />
                    <button className="btn btn-primary" onClick={(e) => this.editGame(e, this.state.input)}>Edit</button>
                </form>
            </div>

        )
    }
}
