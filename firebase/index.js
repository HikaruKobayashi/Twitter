// db参照用のインスタンスを作成
import firebase from 'firebase';
import { firebase } from './firebase/config.js'

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebaseApp.database();