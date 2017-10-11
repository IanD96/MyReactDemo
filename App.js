/**
 * My Name Generator App
 * https://github.com/SCCapstone/m3-IanD96
 * @flow
 */

import React from 'react';
import {Text, View, Button} from 'react-native';
import {StackNavigator,} from 'react-navigation';
const styles = require('./styles.js')

/**
//This is the top level navigator that contains all the screens
const AppNavigator = StackNavigator({
    Main: {screen: MainScreen},
    List: {screen: NameListScreen},
});

//top level class the returns the top-level navigator
export default class App extends React.Component {
    render() {
        return <AppNavigator />;
    }
}
**/

//This is the main screen
export default class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to My Name Generator!',
    };

    constructor(props) {
        super(props);
        this.state = {textValue: 'Name Will Appear Here'}
    }

    addName = () => {
        this.setState({
            textValue: this.buildName()
        });
    }

    buildName = () => {
        let prefix = ["Than", "Lor", "Hal", "Kael", "Mal", "Kor", "Cor", "Man", "Thal", "Thael", "Kal", "Thor", "Xol", "Sor", "Myth", "Min", "Gor", "Gal", "Zan", "Xan", "Kuh", "Zul", "Aern", "Dol", "Gul", "Zor", "Fael", "Val", "Valyn"];

        let suffix = ["dros", "nesh", "ius", "ias", "thas", "gor", "gorn", "dro", "dromath", "theus", "intheus", "dor", "tyr", "drox", "bane", "mane", "thos", "ter", "rosh", "dur", "gus", "grath", "rash", "galath", "dan", "lan", "rith", "dir", "drath"];

        return prefix[this.randNumber()] + suffix[this.randNumber()];
    }

    randNumber = () => {
        return Math.floor((Math.random() * 29));
    }

    render() {
//        const {navigate} = this.props.navigation;
        return (
          <View style={styles.container}>

            <Text style={styles.instructions}>
                To generate a name click the button below.
            </Text>

            <Button
                color='#A42EFB'
                title="Generate Name"
                onPress={this.addName}
            />

            <Text style={styles.names}>
                {this.state.textValue}
            </Text>

            <Button
                style={styles.listButton}
                title="Name List"
                onPress={() => navigate('List')}
            />
          </View>
        );
    }
}

/**
class NameListScreen extends React.Component {
    static navigationOptions = {
        title: 'List of past Names',
    };

    render() {
        return (
            <Text>
                This is the Name List
            </Text>
        );

    }
}
**/