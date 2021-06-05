import { Component } from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'


import Box from '@material-ui/core/Box';

export default class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: "",
            options:{
                theme: 'base16-light',
                lineNumbers: true
            }
        }
    }
    render() {
        return (
            <Box pt={2} hidden={this.props.currentIndex !== this.props.index}>
                {
                    this.props.currentIndex === this.props.index && (
                        <CodeMirror
                        value={this.props.body}
                        options={this.state.options}
                        onBeforeChange={(editor, data, value) => {
                            this.props.bodyUtils.updateBodyValue(value);
                        }}
                    />
                    )
                }

            </Box>
        )
    }
}
