import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUwPqrqtNnYCl5aUUUwvpC7IzCTnPIQdQ",
  authDomain: "accounting-bba02.firebaseapp.com",
  databaseURL: "https://accounting-bba02.firebaseio.com",
  projectId: "accounting-bba02",
  storageBucket: "accounting-bba02.appspot.com",
  messagingSenderId: "556491988820",
  appId: "1:556491988820:web:d389b4f378dbc72cb5b2c1",
  measurementId: "G-WW0MMCMSTH",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
