import React, { Component } from 'react'

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Close';

export default class Header extends Component {
    render() {
        return (
            <Box pt={2} hidden={this.props.currentIndex !== this.props.index}>
                {
                    this.props.currentIndex === this.props.index &&
                    this.props.headers.map((header, i) => (
                        <Box key={i}>
                            <Box pb={2} display="flex" justifyContent="space-between">
                                <Box width="18em">
                                    <FormControl fullWidth>
                                        <TextField autoComplete={"Accept Accept-Language Accept-Encoding Connection Referer Upgrade-Insecure-Requests If-Modified-Since If-None-Match Cache-Control"} label="Header name" variant="outlined" onChange={event => this.props.headersUtils.updateHeaderName(event.target.value, header.id)} value={header.name} />
                                    </FormControl>
                                </Box>
                                <Box width="35em">
                                    <FormControl fullWidth>
                                        <TextField label="Header value" variant="outlined" onChange={event => this.props.headersUtils.updateHeaderValue(event.target.value, header.id)} value={header.value} />
                                    </FormControl>
                                </Box>
                                <IconButton onClick={() => this.props.headersUtils.removeHeader(header.id)} >
                                    <DeleteIcon fontSize="large" />
                                </IconButton>
                            </Box>
                        </Box>
                    ))

                }
                <Button onClick={this.props.headersUtils.addHeader} variant="outlined" color="primary" disableElevation>
                    ADD HEADER
                    </Button>
            </Box>
        )
    }
}
