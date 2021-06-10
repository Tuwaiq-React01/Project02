import React, { Component } from 'react'
import Artc from './Artc'

export default class SportsArts extends Component {
    render() {
        var articles = this.props.ap.map((item, index) => {
            return(
            <li key={index}>
             {item.tit} <br />
                <img src={item.img} alt={item.tit} width="300" height="300" />
                < Artc de={ item.con}/>
            </li> )})
        
        return (
            <div>

                {articles}
            </div>
        )
    }
}
