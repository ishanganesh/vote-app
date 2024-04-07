import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyCtngyg6uCXyPDkH9lXkBW4UwD-vaQ31oM",
    authDomain: "vote-669ca.firebaseapp.com",
    projectId: "vote-669ca",
    storageBucket: "vote-669ca.appspot.com",
    messagingSenderId: "941339731482",
    appId: "1:941339731482:web:773840358271b6b68913a3"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();