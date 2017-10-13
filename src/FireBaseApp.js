import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyA1ikdk8RiZDy1FEbGcoRtaZpOVnzSM0Hk",
    authDomain: "capstone-demoapp.firebaseapp.com",
    databaseURL: "https://capstone-demoapp.firebaseio.com",
    projectId: "capstone-demoapp",
    storageBucket: "capstone-demoapp.appspot.com",
};

export default firebaseApp = firebase.initializeApp(config);