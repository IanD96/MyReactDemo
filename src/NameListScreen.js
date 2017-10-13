import React from 'react';
import {View, ListView, BackHandler} from 'react-native';
import  firebaseApp  from './FireBaseApp';
const ListName = require('./ListName');
const styles = require('../styles.js');

export default class NameListScreen extends React.Component {
    static navigationOptions = {
        title: 'List of past Names',
    };

    constructor(props) {
        super(props);
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };
        this.NamesRef = this.getRef().child('names');
    }

    getRef() {
        return firebaseApp.database().ref();
    }

    listenForNames(NamesRef) {
        NamesRef.on('value', (snap) => {

            // get children as an array
            var names = [];
            snap.forEach((child) => {
                names.push({
                    title: child.val().title,
                    _key: child.key
                });
            });

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(names)
            });

        });
    }

    componentDidMount() {
        this.listenForNames(this.NamesRef);
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount(){
        this.NamesRef.off();
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderName.bind(this)}
                    enableEmptySections={true}
                    style={styles.namelistview}
                />

            </View>
        );
    }

    renderName(name) {
        return (
            <ListName name={name} />
        );
    }

    onBackPress = () => {
        const {goBack} = this.props.navigation;
        return goBack();
    }
}