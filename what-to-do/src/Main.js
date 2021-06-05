import React, {Component} from 'react';
import Card from "./Card";
import './Main.css';
import axios from 'axios'
import Result from "./Result";


const initState={
    baseurl: "http://www.boredapi.com/api/activity?",
    ttype: "",
    partic: "",
    showtype: true,
    showparic: false,
    random: false,
    data: "",
    result: false
}
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = initState
        this.carinfo = [{name: "Cocking", image: "https://img.icons8.com/color/256/000000/chef-cooking.png"},
            {name: "Education", image: "https://img.icons8.com/dusk/256/000000/book-and-pencil.png"},
            {name: "DIY", image: "https://img.icons8.com/dusk/256/000000/hammer.png"},
            {name: "Social", image: "https://img.icons8.com/dusk/256/11111/social-network.png"},
            {name: "Relaxation", image: "https://img.icons8.com/dusk/256/000000/tea--v1.png"},
            {name: "charity", image: "https://img.icons8.com/dusk/256/000000/get-cash.png"},
            {name: "Busy work", image: "https://img.icons8.com/dusk/256/000000/chess-clock.png"},
            {name: "Music", image: "https://img.icons8.com/dusk/256/000000/rockstar.png"},
            {name: "Random", image: "https://img.icons8.com/dusk/256/000000/ask-question.png"}]
    }

    getype = (type) => {
        console.log(type)
        if (type.name == "Random") {
            this.setState({random:true})
            this.getapi()
        } else {
            this.setState({
                ttype: type.name.toLowerCase().replace(/\s+/g, ''),
                showtype: false
            })
        }
    }
    restart = ()=>{
        this.setState(initState)
    }
    gepartic = (partic) => {
        this.setState({
            partic: partic.name
        })
        this.getapi()

    }
    getapi() {
        axios({
            method: "get",
            url: this.state.baseurl + "type=" + this.state.ttype + "&participants=" + this.state.partic
        }).then((response) => {
            this.setState({data: response.data})
            console.log("res", this.state.data);
        })
        this.setState({
            result: true
        })
    }
    render() {
        return (
            <div className={"container-fluid"} style={{textAlign: "center", margin: "1em"}}>
                <div className={this.state.showtype&&(!this.state.random) ? "mytypebefore" : "mytypeafter"}>
                    <h1>What should you Do ?</h1>
                    <div className={"row"}>
                        {this.carinfo.map((item, index) => {
                            return <Card name={item} gettype={this.getype}/>
                        })}
                    </div>
                </div>
                <div className={this.state.result ? 'mytypeafter' : ""}>
                    <div className={this.state.showtype ? "mynumbefore" : "mynumbers"}>
                        <h1>How many are you ?</h1>
                        <div className={"row"}>
                            {this.carinfo.map((item, index) => {
                                return <Card name={{
                                    name: index + 1,
                                    image: "https://img.icons8.com/dusk/256/000000/" + (index + 1) + "-circle.png/"
                                }} gettype={this.gepartic}/>
                            })}
                        </div>
                    </div>
                </div>
                {}
                {this.state.result&&!this.state.random ?<Result activity={this.state.data.activity} restart={this.restart} dis={"dss"} ccs={"myresult"}/> : null }
                {this.state.result&&this.state.random ?<Result activity={this.state.data.activity} restart={this.restart} ccs={"myresultrandom"}/> : null }

            </div>
        );

    }
}
export default Main;