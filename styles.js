const React = require('react-native')
const {StyleSheet} = React

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BBFFB6',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 20,
    },
    names: {
        textAlign: 'center',
        color: '#FF5500',
        fontSize: 19,
        paddingTop: 40,
        paddingBottom: 40,
    },
});

module.exports = styles