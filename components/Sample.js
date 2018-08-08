import React, { Component } from 'react'; // import from react
import axios from 'axios';
import { Box, Grid, TextInput, Button, Text } from 'proton-native'; // import the proton-native components

export default class Sample extends Component {

    constructor() {
        super()
        this.updateResults = this.updateResults.bind(this)
    }

    state = {
        results: "Testing some text out here."
    }

    updateResults(response) {
        //console.log(response)
        this.setState({ results: response.data })
    }

    componentWillMount() {
        axios.get('http://www.harringtonweb.com')
            .then(this.updateResults)
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    render() { // all Components must have a render method
        return (
            <Grid padded={false}>
                <TextInput row={0} column={0} span={{ x: 1, y: 1 }} align={{ h: false, v: true }} />
                <Button row={0} column={6} align={{ h: false, v: true }}>GO!</Button>
                <Text row={1} column={0}>{this.state.results}</Text>
            </Grid>
        );
    }
}