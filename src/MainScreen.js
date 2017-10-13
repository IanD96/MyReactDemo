import React from 'react';
import {Text, View, Button} from 'react-native';
const styles = require('../styles.js');
import firebaseApp  from './FireBaseApp';


//This is the main screen
export default class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'My Name Generator!',
    };

    constructor(props) {
        super(props);
        this.state = {
            textValue: 'Name Will Appear Here',}

        this.NamesRef = this.getRef().child('names');
    }

    getRef() {
        return firebaseApp.database().ref();
    }

    addName = () => {
        var tempName = this.buildName();
        this.setState({
            textValue: tempName
        });
        this.NamesRef.push({ title: tempName})
    };

    buildName = () => {
        let prefix = ["Than", "Lor", "Hal", "Kael", "Mal", "Kor", "Cor", "Man", "Thal", "Thael", "Kal", "Thor", "Xol", "Sor", "Myth", "Min", "Gor", "Gal", "Zan", "Xan", "Kuh", "Zul", "Aern", "Dol", "Gul", "Zor", "Fael", "Val", "Valyn"];

        let suffix = ["dros", "nesh", "ius", "ias", "thas", "gor", "gorn", "dro", "dromath", "theus", "intheus", "dor", "tyr", "drox", "bane", "mane", "thos", "ter", "rosh", "dur", "gus", "grath", "rash", "galath", "dan", "lan", "rith", "dir", "drath"];

        return prefix[this.randNumber()] + suffix[this.randNumber()];
    }

    randNumber = () => {
        return Math.floor((Math.random() * 29));
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>

                <Text style={styles.instructions}>
                    Click the Generate Name button to get a new name.
                </Text>

                <Text style={styles.name}>
                    {this.state.textValue}
                </Text>

                <Button
                    color='#A42EFB'
                    title="Generate Name"
                    onPress={this.addName}
                />

                <Button
                    title="Name List"
                    onPress={() => navigate('List')}

                />
            </View>
        );
    }
}
