import React, { Component } from 'react'

export default class Location extends Component {
    
    render() {
        const error = props => {
            return (
              <div className="alert alert-danger mx-5" role="alert">
                Please Enter City and Country...!
              </div>
            );
          };
        return (
            <div className="container">
                <div>{this.props.error? error(): null}</div>
                <form onSubmit={this.props.loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control" placeholder="City" name="city" autoComplete="off" align="center"/>
                    <br/>
                    </div>

                    <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Country" name="country" autoComplete="off" align="center"/>
                    <br/>

                    </div>

                    <div className="col-md-3 mt-md-0 text-md-left">
                    <button className="btn btn-dark" id="btn" align="center">Get Weather</button>
                    </div>
                </div>
                </form>
            </div>
        )
        
    }
}
