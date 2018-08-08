import React, { Component } from 'react'; // import from react

import { render, Window, App, Text, Menu } from 'proton-native'; // import the proton-native components

import Sample from './components/Sample'

class Example extends Component {
  render() { // all Components must have a render method
    return (
      <App> // you must always include App around everything
        <Menu label="File">
          <Menu.Item>Hi</Menu.Item>
        </Menu>
        <Window title="Proton Native Rocks!" size={{ w: 300, h: 300 }}>
          {/* all your other components go here*/}
          <Sample />
        </Window>
      </App>
    );
  }
}

render(<Example />); // and finally render your main component
