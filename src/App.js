import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import Form from './Form'

export default class App extends Component {
constructor(props){
  super(props);
  this.state = {
    name: "",
    email:"",
    pictuer : "",
    token:""
  };
}

   responseFacebook = (response) => { // the response is the whole data which is gotten from the facebook
    if (response.status !== "unknown") {
      this.setState({ name: response.name })
      this.setState({ email: response.email })
      this.setState({ picture: response.picture.data.url })
      this.setState({ token: response.accessToken })
    }
    else {
      console.log("you are not singned in");
    }
  }
  
  render() {
    return (
    
      
      <center>
        <h1>Login</h1>
        <Form label="username" type ="text" />
        <Form label="Enter your password" type ="password" />

        <h2>or Login using Facebook</h2>
         <FacebookLogin
    appId="1492015204466948"
    autoLoad={false} // the facebook login will be auto requested
    fields="name,email,picture"
    callback={this.responseFacebook} />,
    { this.state.token ? 
    <div>
        <h3>Welcome {this.state.name}</h3>
        <img src={this.state.pictuer} />
        <h3> Your email is {this.state.email}</h3>
    </div> : null }
    
      </center>
    )
  }
}
