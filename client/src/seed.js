
import firebase from 'firebase';


var db = firebase.firestore();
var batch = db.batch()

//   Drugs.forEach((doc) => {
//     var docRef = db.collection("drugs").doc(); //automatically generate unique id
//     batch.set(docRef, doc);
//   });
//   return batch.commit();

const seedData = (array) => {
  array.forEach((doc) => {
    var docRef = db.collection("drugs").doc(); //automatically generate unique id
    batch.set(docRef, doc);
  });
  return batch.commit();
}

export default seedData