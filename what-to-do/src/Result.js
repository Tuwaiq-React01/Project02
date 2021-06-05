import React, {Component} from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            csclass: ""
        }

    }

    componentDidMount() {
        this.setState({csclass: this.props.ccs})
    }

    restart = () => {
        this.props.restart()
    }

    render() {
        return (
            <div className={this.state.csclass}>
                <div>
                    <button className={"btn btn-outline-secondary"} onClick={this.restart}
                            style={{float: "left"}}>Back
                    </button>
                </div>
                <div>
                    <h2>How About !</h2>
                    <h1>{this.props.activity}</h1>
                </div>
                <iframe src={`https://www.bing.com/search?q=${this.props.activity}`} width="100%" height="800"/>
            </div>
        );
    }
}

export default Result;