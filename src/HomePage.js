import {Component} from 'react'
import InfoCard from './InfoCard'
import axios from 'axios'


class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        this.loadCharacters()
    }

    loadCharacters() {
        axios({
            method: "get"
            , url: "https://rickandmortyapi.com/api/character"
        }).then(response => {
            this.setState({
                characters: response.data.results
            })
        })         
    }

    render() {
        return(
            <div class="row mb-2">
                {this.state.characters.map((character) => {
                    return <InfoCard charName={character.name} alive={character.status=="Alive"} charImage={character.image}/>
                })}               
            </div>
        )
    }
}

export default HomePage