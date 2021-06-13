import {Component} from 'react'

export default class InfoCard extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class="col-md-4">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class={"d-inline-block mb-2 text-" + (this.props.alive?"success":"danger")}>{this.props.alive?"Alive":"Dead"}</strong>
                    <h3 class="mb-0">{this.props.charName}</h3>
                </div>
                <div class="col-auto d-none d-lg-block">
                    <img src={this.props.charImage} class="bd-placeholder-img" width="200" height="250" role="img" aria-label="Placeholder: Thumbnail" focusable="false" />

                </div>
                </div>
            </div>
        )
    }
}