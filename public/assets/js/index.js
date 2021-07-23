// import firebase from 'firebase/app';

// require("firebase/auth");
// require("firebase/firestore");

// var FireDB = firebase.firestore();

// function getToken(db) {
//   const user = firebase.auth().currentUser;
//   const docRef = db.collection("users").doc(user.uid);
//   docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });
// }

// getToken(FireDB);