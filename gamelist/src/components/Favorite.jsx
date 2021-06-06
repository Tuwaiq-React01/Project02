import React, { Component } from 'react'
import Games from './Games'

export default class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
          games: [],
          favs: []
        };

    this.removeFav = this.removeFav.bind(this);
    this.removeAll = this.removeAll.bind(this);

      }

    componentDidMount() {
        this.setState({ favs: this.props.favs });
      }

      componentDidUpdate(prevProps, prevState) {
        if (prevState.favs !== this.state.favs) {
        }
      }
      removeFav(game){
        this.props.removeFav(game)
      }

      removeAll(){
        this.props.removeAll()
      }

      



    render() {
        // const displayFavs = this.props.favs.map((e) => {
        //     return (
        //         <div>
        //             {e.id}
        //         </div>
        //     )
        // })
        return (
            <div>
                <h1 className="display-4">Favorites: </h1> <button onClick={this.removeAll}>REMOVE ALL</button>

                {this.props.favs.length ? 
                
                <Games list={this.props.favs} favMode={true} removeFav={this.removeFav} />
                
                : <h1>you don't have any favotire games.</h1>}
                

            </div>
        )
    }
}
