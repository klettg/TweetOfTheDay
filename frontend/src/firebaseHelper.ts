import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAquU4FW_uiOkQ58gMmThBzsc409RIev7A",
  authDomain: "tweetoftheday-b737f.firebaseapp.com",
  databaseURL: "https://tweetoftheday-b737f-default-rtdb.firebaseio.com",
  projectId: "tweetoftheday-b737f",
  storageBucket: "tweetoftheday-b737f.appspot.com",
  messagingSenderId: "1034738720531",
  appId: "1:1034738720531:web:24e5cf1de69a292e4d44e6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
