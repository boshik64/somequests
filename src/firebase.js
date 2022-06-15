import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAcFjNerfIOL8_hW_GcPOiSk8qAGehiB5o",
    authDomain: "homeworkgb-b1c08.firebaseapp.com",
    databaseURL: "https://homeworkgb-b1c08-default-rtdb.firebaseio.com",
    projectId: "homeworkgb-b1c08",
    storageBucket: "homeworkgb-b1c08.appspot.com",
    messagingSenderId: "194857762527",
    appId: "1:194857762527:web:1c3f5a67920fd9ed17336a"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();