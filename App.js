/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
const GenNameButton = require('./components/GenNameButton');
const styles = require('./styles.js')


export default class DemoApp extends Component<{}> {
    constructor() {
        super();
        this.state = {textValue: 'A PlaceHolder'}
    }

    addName = () => {
        this.setState({
            textValue: "The Ugly One",
            position:  'absolute',
            bottom: 0,
        })
    }

    render() {
        return (
          <View style={styles.container}>

            <Text style={styles.welcome}>
                Welcome to React Native!
            </Text>

            <Text style={styles.instructions}>
                To get started, edit App.js
            </Text>

            <GenNameButton onPress={this.addName} title="Generate Name"/>

            <Text style={styles.names}>
                {this.state.textValue}
             </Text>

          </View>
    );
  }
}

