import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const { View, Text } = ReactNative;

class ListName extends Component {
    render() {
        return (
            <View style={styles.nm}>
                <Text style={styles.nText}>{this.props.name.title}</Text>
            </View>
        );
    }
}

module.exports = ListName;