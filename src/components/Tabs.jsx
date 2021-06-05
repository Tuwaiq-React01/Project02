import React, { Component } from 'react'

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import _Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Header from './Header'

import Body from './Body';

export default class Tabs extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0,
        };

        this.onTabChange = this.onTabChange.bind(this)
    }
    onTabChange(event , value){
        this.setState({ value: value })
    }
    render() {
        return (
            <Box pt={2}>
                <Paper>
                    <_Tabs
                        value={this.state.value}
                        onChange={this.onTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Headers" />
                        { this.props.hasBody && (
                            <Tab label="Body" />
                        ) }
                    </_Tabs>
                </Paper>
                <Header headersUtils={this.props.headersUtils} headers={this.props.headers} currentIndex={this.state.value} index={0} />
                <Body body={this.props.body} bodyUtils={this.props.bodyUtils} currentIndex={this.state.value} index={1} />
            </Box>
        )
    }
}
