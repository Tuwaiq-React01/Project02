
import React, { Component } from 'react'
import GameRow from "./GameRow";
export default class GameList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filter: "all"
        }
    }

    handleFilterClick = (filter) => {
        this.setState({ filter: filter })
    }

    render() {
        const allGames = this.props.games.map((game, index) => {
            return <GameRow key={index} game={game}
                handleFaveToggle={() => this.props.handleFaveToggle(game)} isFave={this.props.faves.includes(game)}
                handleCompletedToggle={() => this.props.handleCompletedToggle(game)} isCompleted={this.props.completed.includes(game)}
                handleLaterToggle={() => this.props.handleLaterToggle(game)} isLater={this.props.later.includes(game)}
                handleOngoingToggle={() => this.props.handleOngoingToggle(game)} isOngoing={this.props.ongoing.includes(game)}
                handleSelected={() => this.props.handleSelected(game)} isSelected={this.props.selected.includes(game)}
                handleDeleteGame={() => this.props.handleDeleteGame(game)}  handleEditGame={this.props.handleEditGame}
                handleEdit={() => this.props.handleEdit(game)} isEditing={this.props.editing.includes(game)}
            />
        })

        const faveGames = this.props.faves.map((game, index) => {
            return <GameRow key={index} game={game}
                handleFaveToggle={() => this.props.handleFaveToggle(game)} isFave={this.props.faves.includes(game)}
                handleCompletedToggle={() => this.props.handleCompletedToggle(game)} isCompleted={this.props.completed.includes(game)}
                handleLaterToggle={() => this.props.handleLaterToggle(game)} isLater={this.props.later.includes(game)}
                handleOngoingToggle={() => this.props.handleOngoingToggle(game)} isOngoing={this.props.ongoing.includes(game)}
                handleSelected={() => this.props.handleSelected(game)} isSelected={this.props.selected.includes(game)}
                handleDeleteGame={() => this.props.handleDeleteGame(game)}  handleEditGame={this.props.handleEditGame}
                handleEdit={() => this.props.handleEdit(game)} isEditing={this.props.editing.includes(game)}
            />
        })

        const completedGames = this.props.completed.map((game, index) => {
            return <GameRow key={index} game={game}
                handleFaveToggle={() => this.props.handleFaveToggle(game)} isFave={this.props.faves.includes(game)}
                handleCompletedToggle={() => this.props.handleCompletedToggle(game)} isCompleted={this.props.completed.includes(game)}
                handleLaterToggle={() => this.props.handleLaterToggle(game)} isLater={this.props.later.includes(game)}
                handleOngoingToggle={() => this.props.handleOngoingToggle(game)} isOngoing={this.props.ongoing.includes(game)}
                handleSelected={() => this.props.handleSelected(game)} isSelected={this.props.selected.includes(game)}
                handleDeleteGame={() => this.props.handleDeleteGame(game)}  handleEditGame={this.props.handleEditGame}
                handleEdit={() => this.props.handleEdit(game)} isEditing={this.props.editing.includes(game)}
            />
        })

        const laterGames = this.props.later.map((game, index) => {
            return <GameRow key={index} game={game}
                handleFaveToggle={() => this.props.handleFaveToggle(game)} isFave={this.props.faves.includes(game)}
                handleCompletedToggle={() => this.props.handleCompletedToggle(game)} isCompleted={this.props.completed.includes(game)}
                handleLaterToggle={() => this.props.handleLaterToggle(game)} isLater={this.props.later.includes(game)}
                handleOngoingToggle={() => this.props.handleOngoingToggle(game)} isOngoing={this.props.ongoing.includes(game)}
                handleSelected={() => this.props.handleSelected(game)} isSelected={this.props.selected.includes(game)}
                handleDeleteGame={() => this.props.handleDeleteGame(game)} handleEditGame={this.props.handleEditGame}
                handleEdit={() => this.props.handleEdit(game)} isEditing={this.props.editing.includes(game)}
            />
        })

        const ongoingGames = this.props.ongoing.map((game, index) => {
            return <GameRow key={index} game={game}
                handleFaveToggle={() => this.props.handleFaveToggle(game)} isFave={this.props.faves.includes(game)}
                handleCompletedToggle={() => this.props.handleCompletedToggle(game)} isCompleted={this.props.completed.includes(game)}
                handleLaterToggle={() => this.props.handleLaterToggle(game)} isLater={this.props.later.includes(game)}
                handleOngoingToggle={() => this.props.handleOngoingToggle(game)} isOngoing={this.props.ongoing.includes(game)}
                handleSelected={() => this.props.handleSelected(game)} isSelected={this.props.selected.includes(game)}
                handleDeleteGame={() => this.props.handleDeleteGame(game)} handleEditGame={this.props.handleEditGame}
                handleEdit={() => this.props.handleEdit(game)} isEditing={this.props.editing.includes(game)}
            />
        })
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className={`col-sm game-filter ${this.state.filter === "all" ? "is-active" : ""}`} onClick={() => this.handleFilterClick('all')}>
                            All
                            <span className="game-count">{this.props.games.length}</span>
                        </div>
                        <div className={`col-sm game-filter ${this.state.filter === "faves" ? "is-active" : ""}`} onClick={() => this.handleFilterClick('faves')}>
                            Favorites 
                            <span className="game-count">{this.props.faves.length}</span>
                            </div>
                        <div className={`col-sm game-filter ${this.state.filter === "completed" ? "is-active" : ""}`} onClick={() => this.handleFilterClick('completed')}>
                            Completed 
                            <span className="game-count">{this.props.completed.length}</span>
                            </div>
                        <div className={`col-sm game-filter ${this.state.filter === "later" ? "is-active" : ""}`} onClick={() => this.handleFilterClick('later')}>
                            Later 
                            <span className="game-count">{this.props.later.length}</span>
                            </div>
                        <div className={`col-sm game-filter ${this.state.filter === "ongoing" ? "is-active" : ""}`} onClick={() => this.handleFilterClick('ongoing')}>
                            Ongoing 
                            <span className="game-count">{this.props.ongoing.length}</span>
                            </div>
                    </div>
                </div>
                {this.state.filter === "all" ? allGames : ""}
                {this.state.filter === "faves" ? faveGames : ""}
                {this.state.filter === "completed" ? completedGames : ""}
                {this.state.filter === "later" ? laterGames : ""}
                {this.state.filter === "ongoing" ? ongoingGames : ""}
            </div>
        )
    }
}