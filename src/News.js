import React, { Component } from 'react'
import Article from './Article'

export default class News extends Component {
    constructor(props){
        super(props)
        this.state ={
            data:[]
        }
    }
    // componentDidMount(){
    //   if(this.props.data != undefined){
    //     this.setState({
    //       data: this.props.data
    //     })
    //   }
    //   console.log('@news state' + this.state.data)
    //   console.log('@news props' + this.props.data)
    // }
    render() {
      var articles =[]
      if(this.props.data != undefined){
        articles = this.props.data.map((artcl)=>{
          return(
            // <Article title={artcl.title}/> source={artcl.provider.name} 
            <Article title={artcl.title} content={artcl.description} source={artcl.provider.name} date={artcl.datePublished} img={artcl.image.url} url={artcl.url}/>
            )
        })
      }else{
        articles = <h6>Loading...</h6>
      }
        return (
            <div class="container">
              {articles}
            </div>
        )
    }
}
