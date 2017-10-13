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
    name: {
        textAlign: 'center',
        color: '#FF5500',
        fontSize: 19,
        paddingTop: 40,
        paddingBottom: 40,
    },
    nameview: {
        flex: 1,
    },
    nm: {
        backgroundColor: '#BBFFB6',
        borderBottomColor: '#BBFFB6',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },
    nText: {
        color: '#333',
        textAlign: 'center',
        fontSize: 16,
    },
});

module.exports = styles