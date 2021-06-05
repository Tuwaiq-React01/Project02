import React, {Component} from 'react';

class Result extends Component {
    constructor() {
        super();
        this.state = {
            csclass:""
        }

    }

    componentDidMount() {
        this.setState({csclass:this.props.ccs})
    }

    render() {
        return (
            <div className={this.state.csclass}>
                <h1>How About !</h1>
                <h2>{this.props.activity}</h2>
                <iframe src={`https://www.bing.com/search?q=${this.props.activity}`} width="100%" height="800" />
            </div>
        );
    }
}

export default Result;