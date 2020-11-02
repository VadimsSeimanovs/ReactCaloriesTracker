import * as firebase from 'firebase'

const firebaseConfig = {
apiKey: "AIzaSyBhDP0hjvwTeDtWhPK5TwxsoX35qRj92yk",
authDomain: "caloriestracker-26ff8.firebaseapp.com",
databaseURL: "https://caloriestracker-26ff8.firebaseio.com",
projectId: "caloriestracker-26ff8",
storageBucket: "caloriestracker-26ff8.appspot.com",
messagingSenderId: "651745419400",
appId: "1:651745419400:web:2d8a921ed15ef49372bf3d",
measurementId: "G-WTE99C5XZ4"
}

export default class FirebaseTest {
    static auth;
    static init(){
      firebase.initializeApp(firebaseConfig)
      Firebase.auth = firebase.auth()
    }
}