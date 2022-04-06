import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCU1Bm0nOTIevnD7P9FGUJRqV7yGeAwPw0',
  authDomain: 'twetter-17f8f.firebaseapp.com',
  databaseURL: 'https://twetter-17f8f-default-rtdb.firebaseio.com',
  projectId: 'twetter-17f8f',
  storageBucket: 'twetter-17f8f.appspot.com',
  messagingSenderId: '622143077822',
  appId: '1:622143077822:web:908375c120846b539c0def',
};

export const signUpURL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCU1Bm0nOTIevnD7P9FGUJRqV7yGeAwPw0';
export const signInURL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCU1Bm0nOTIevnD7P9FGUJRqV7yGeAwPw0';

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
export default db;
