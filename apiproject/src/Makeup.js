import React, { Component } from 'react'
import axios from 'axios'

export default class Product extends Component {
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
          <div className="tb">
            <h1>Makeup Magazine</h1>
              {this.state.data.map(p =>
              
              <div className="my">
                <p className="name"> {p.name}</p>
              <img src={p.image_link} height="200px"></img>
              <p>Price: {p.price}</p>
              <p className="des">{p.description}</p>
              </div>
    
           
            
              )}
    
          </div>
        )
  
    }
}
