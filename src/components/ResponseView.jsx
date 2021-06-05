import React, { Component } from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'


import Box from '@material-ui/core/Box';

// json
export default class ResponseView extends Component {
    constructor(props){
        super(props)
        this.state = {
            options:{
                // mode: 'javascript',
                theme: 'base16-light',
                lineNumbers: true
            }
        }
    }
    render() {
        return (
            <Box pt={2}>
                {this.props.response ? (
                        <>
                        <CodeMirror
                        value={JSON.stringify(this.props.response.data)}
                        options={this.state.options}
                    />
                    </>): ""}
            </Box>
        )
    }
}
