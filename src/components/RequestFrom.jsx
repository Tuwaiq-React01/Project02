import React, { Component } from 'react'
import MainData from './MainData'
import Tabs from './Tabs'

export default class RequestFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            host: "",
            method: "",
            hasBody: false,
            headers: [],
            body: ""
        }

        this.onMethodChange = this.onMethodChange.bind(this);
        this.onHostChange = this.onHostChange.bind(this);
        this.addHeader = this.addHeader.bind(this);
        this.removeHeader = this.removeHeader.bind(this);
        this.updateHeaderName = this.updateHeaderName.bind(this);
        this.updateHeaderValue = this.updateHeaderValue.bind(this);
        this.updateBodyValue = this.updateBodyValue.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.setState(
            {
                host: "https://",
                method: "GET",
                hasBody: false,
                headers: [
                    {
                        id: 0,
                        name: "",
                        value: ""
                    }
                ]
            }
        )
    }

    componentDidUpdate() {
        if (this.state.headers.length === 0) {
            this.addHeader()
        }
    }

    onMethodChange(event) {
        if (event.target.value !== "GET") {
            this.setState({
                hasBody: true
            })
        } else {
            this.setState({
                hasBody: false
            })
        }
        this.setState({
            method: event.target.value
        })
    }

    onHostChange(event) {
        this.setState({
            host: event.target.value
        })
    }

    addHeader() {
        this.state.headers.push({ name: "", value: "", id: 0 })
        const headers = this.state.headers.map((header, i) => { header.id = i; return header })
        this.setState({
            headers: headers
        })
    }

    removeHeader(id) {
        const headers = this.state.headers.filter(header => header.id !== id)
        this.setState({
            headers: headers
        })
    }

    updateHeaderName(value, id) {
        this.state.headers[id].name = value;
        this.setState({
            headers: this.state.headers
        })
    }

    updateHeaderValue(value, id) {
        this.state.headers[id].value = value;
        this.setState({
            headers: this.state.headers
        })
    }

    updateBodyValue(value){
        this.setState({ body: value });
    }

    submit(){
        this.props.sendRequest(
            this.state.host,
            this.state.method,
            this.state.headers,
            this.state.hasBody? this.state.body: "",
        );
    }

    render() {
        const mainUtils = {
            onMethodChange: this.onMethodChange,
            onHostChange: this.onHostChange,
            submit: this.submit
        }

        const headersUtils = {
            addHeader: this.addHeader,
            removeHeader: this.removeHeader,
            updateHeaderName: this.updateHeaderName,
            updateHeaderValue: this.updateHeaderValue
        }
        const bodyUtils = {
            updateBodyValue: this.updateBodyValue
        }
        return (
            <form autoComplete="off">
                <MainData method={this.state.method} host={this.state.host} mainUtils={mainUtils} />
                <Tabs hasBody={this.state.hasBody} headers={this.state.headers} body={this.state.body} bodyUtils={bodyUtils} headersUtils={headersUtils} />
            </form>
        )
    }
}
