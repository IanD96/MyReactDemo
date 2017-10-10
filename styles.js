const React = require('react-native')
const {StyleSheet} = React
const constants = {
    actionColor: '#24CE84'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    actionText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    action: {
        backgroundColor: constants.actionColor,
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 20,
        paddingTop: 14,
        paddingBottom: 16,
    },
    names: {
        textAlign: 'center',
        color: '#FF5500',
        fontSize: 19,
        paddingTop: 50,
    },
});

module.exports = styles
module.exports.constants = constants;