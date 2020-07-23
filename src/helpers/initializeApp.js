import { firestore, initializeApp } from 'firebase/app'
import 'firebase/firestore'

initializeApp({
    apiKey: "AIzaSyDjYqrv0e-vElD7x6daefP0R5QsNpnEnRY",
    authDomain: "macircle-form.firebaseapp.com",
    databaseURL: "https://macircle-form.firebaseio.com",
    projectId: "macircle-form",
    storageBucket: "macircle-form.appspot.com",
    messagingSenderId: "1089808988451",
    appId: "1:1089808988451:web:51321e3ea56f26a308f496",
    measurementId: "G-NDP7BDG8RR"
  }
);

firestore().settings({ timestampsInSnapshots: true })