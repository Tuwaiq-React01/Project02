import React, { Component } from "react"; 
import './Lists.css'

class Lists extends Component {  
  constructor(props) {    
    super(props);     
    this.createTasks = this.createTasks.bind(this);  
  }   

  createTasks(item) {    
    return <li key={item.key}>{item.text}</li>
  }   
  
  render() {    
    var todoEntries = this.props.entries;    
    var listItems = todoEntries.map(this.createTasks);     
    
    return (      
      <h2 className="theList">
        <div>      
          {listItems}
        </div>   
      </h2>
      );  
    }
  } 
  
  export default Lists;