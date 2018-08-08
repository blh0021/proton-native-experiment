import React, { Component } from 'react'; // import from react
import axios from 'axios';
import { Box, Grid, TextInput, Button, Text, Separator } from 'proton-native'; // import the proton-native components

export default class Sample extends Component {

    constructor() {
        super()
        this.updateResults = this.updateResults.bind(this)
        this.getResults = this.getResults.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    state = {
        url: "https://",
        results: "Testing some text out here."
    }

    updateResults(response) {
        this.setState({ results: response.data })
    }

    getResults() {
        axios.get(this.state.url)
            .then(this.updateResults)
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    handleChange(e) {
        this.setState({ url: e })
    }

    render() { // all Components must have a render method
        return (
            <Box>
                <Box vertical={false}>
                    <TextInput onChange={this.handleChange}>{this.state.url}</TextInput>
                    <Button stretchy={true} onClick={this.getResults}>GO!</Button>
                </Box>
                <TextInput row={1} column={0} stretchy={true} children={this.state.results} multiline={true} />
                
            </Box>
        );
    }
}