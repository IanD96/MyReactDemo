const React = require('react-native')
const {StyleSheet} = React

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
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
        fontSize: 22,
        fontWeight: 'bold',
//        paddingTop: 40,
//        paddingBottom: 40,
    },
    namelistview: {
        flex: 1,
    },
    nm: {
        backgroundColor: '#BBFFB6',
        borderBottomColor: '#BBFFB6',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingTop: 14,
        paddingBottom: 14,
    },
    nText: {
        color: '#333',
        textAlign: 'center',
        fontSize: 16,
    },
});

module.exports = styles