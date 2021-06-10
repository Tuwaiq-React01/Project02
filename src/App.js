import React, { Component } from 'react'
import Memes from './Memes'
import SportsNews from './SportsNews'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountedOne: true,
      mountedTwo: false,
      mountedThree: false
    }
  }
  oneT() {
    this.setState({ mountedOne: true, mountedTwo: false, mountedThree: false })
  }
  twoT() {
    this.setState({ mountedOne: false, mountedTwo: true, mountedThree: false })
  }
  threeT() {
    this.setState({ mountedOne: false, mountedTwo: false, mountedThree: true })
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <nav className="navbar navbar-inverse navbar-expand">
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li onClick={() => this.oneT()} style={{ color: '#bf1363'  }} id="len1" className="hoverable" >Home</li>
                <li onClick={() => this.twoT()}><a style={{ color: '#bf1363'  }} id="len2" className="hoverable" href="#">Memes</a></li>
                <li onClick={() => this.threeT()}><a style={{ color: '#bf1363' }} id="len3" className="hoverable" href="#">SportsNews</a></li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div>

            {this.state.mountedOne ? <div >
              <div className="page-title" >
                <h1 >Welcome To My Humble React API Project </h1> <br/>
                <p >
                  In this page you can choose one of two catagories <br />
       you can choose to browse sports news or you can check our vast collection of MEMES , choose what suits you ! <br />
       Enjoy !
      </p>
              </div >
            </div> : this.state.mountedTwo ? <Memes /> : this.state.mountedThree ? <SportsNews /> : null}

            </div>
          </div>


        </div>

      </div>
    )
  }
}

