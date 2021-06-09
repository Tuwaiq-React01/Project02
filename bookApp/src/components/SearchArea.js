import React, { Component } from 'react'

export default class SearchArea extends Component {
    render() {



        return (
            <div className="search-area">
                <form  onSubmit={this.props.handleData}>
                    <input onChange={this.props.handleSearch}></input>
                    <button > show</button>
                </form>
            </div>
        )
    }
}
