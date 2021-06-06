import React, { Component } from 'react'
import Makeup from './Makeup'
import axios from 'axios'
import Title from './Title';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      images: [],
      price:[],
      description: []
    }
  }
  componentDidMount() {
    this.callApi()
  }

  callApi() {
    axios({
      method: "get",
      url: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    }).then((Albandry) => {
      console.log("res", Albandry.data);

      const data = Albandry.data;
      const img = Albandry.images;
      const price = Albandry.price;
      const description = Albandry.description;

      this.setState({ data, img, price,description });

    }).catch((e) => {
      console.log("error", e);
    })
  }


  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate(){
    alert("Welcome in our Makeup Magazine, have a nice reading (:")

  }

  render() {
    return (
      <div>
        <Title/>
         {this.state.data.map(p =>
              
        <Makeup 
        name={p.name}
        image_link={p.image_link}
        price={p.price}
        description={p.description}/>

         )}
      </div>
    )
  }
}


