import React, { Component } from 'react'
import axios from "axios"
import "./Product.css"
export default class Products extends Component {
  
   state={
        product:[]
     }


    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(resopnse =>{
         console.log(resopnse.data)
         this.setState({product:resopnse.data})
        })
    }
    
    shouldComponentUpdate() {
        return true;
      }

      buying=()=>{
          
          alert( " Buying succeeded"   );
          
          
          }
    
     render() {
    let products= this.state.product.map((product,index)=>
        <div key={index}>
        <img  src={product.image}  />
        <div className="title"> {product.title} </div> 
         <h6>price:{product.price}</h6> 
         <button  type="button"  class="btn btn-outline-secondary"onClick={this.buying}>Buy</button>
       </div>
       )
        return (
        <div className="RootDiv">
            <h1>Products</h1>
       {products}
         </div>

        )
    }
}
