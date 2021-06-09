import React, { Component } from "react"; 
import Lists from "./Lists";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component { 
  constructor(props) {    
    super(props);     

    this.state = {    
      items: [],
      data: []  
    };

    this.addItem = this.addItem.bind(this); 
  }

  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {    
      itemArray.push(
        {      
          text: this._inputElement.value,      
          key: Date.now()    
        }
      );

      this.setState({      
        items: itemArray    
      });   

      this._inputElement.value = "";  
    }   
    console.log(itemArray);   
    e.preventDefault();
  }

  componentDidMount(){
    var c = 1;
    if (c==1){
      this.firstTime();
    }
    this.state.c=2;
  }
  
  firstTime(){

    var itemArray = this.state.items;
    var count=1;
    
    axios({ // This API gives 3 random universities in the US as the first 3 entries..
      method: "get",
      url: 'http://universities.hipolabs.com/search?country=United+States'
    }).then((response) => {
      this.setState({ data: response.data })
      console.log(this.state.data,"this response ", response.data);
      var xx = response.data;
      console.log(xx);
      var rnd1=Math.floor(Math.random()*100);
      var rnd2=Math.floor(Math.random()*100);
      var rnd3=Math.floor(Math.random()*100);
      itemArray.push(
      {      
        text: xx[rnd1].name,
        key: Date.now()    
      },
      {
        text: xx[rnd2].name,
        key: Date.now()  
      },
      {
        text: xx[rnd3].name,
        key: Date.now() 
      }
    );
      this.setState({      
        items: itemArray,
        count: count+1    
      });   

      this._inputElement.value = "";  
      this.state.itemArray= [];
    console.log(itemArray);
    }
    )
    
    
    
  }

  resetItems(){
    var itemArray = this.state.items;
      this.setState({items: []});
    console.log(itemArray);   
  }
  
  callApi() {
    // axios.get(your url)
    
  }

  render() {
    return (   
      //this.state.data.name   
      <><div id="container" className="todoListMain">
        <div className="header"> <br></br>
          <form class="d-flex" onSubmit={this.addItem}>
            <input className="form-control me-sm-1" style={{width: "370px"}}type="text" ref={(a) => this._inputElement = a}
              placeholder="enter task">
            </input>
            <button className="btn btn-outline-success" type="submit">add</button>
          </form>
        </div>
        
        <Lists entries={this.state.items} />
      </div><button className="btn btn-outline-success" type="button" onClick={() => this.resetItems()}>Reset</button></>
      
    );  
  }
} 

export default App;