const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc));
};

// const createIntern = intern => {
//   return admin
//     .firestore()
//     .collection("interns")
//     .add(intern)
//     .then(doc => console.log("intern applied", doc));
// };

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: "Added a new Internship",
      user: `${project.authorFirstName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the party",
        user: `${newUser.firstName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };

      return createNotification(notification);
    });
});

// exports.userApplied = functions.firestore
//   .document("interns/{internId}")
//   .onCreate(docs => {
//     return admin
//       .firestore()
//       .collection("projects")
//       .doc(docs.projects.id)
//       .get()
//       .then(doc => {
//         const newUser = doc.data();
//         const intern = {
//           //content: "Joined the party",
//           companyName: `${newUser.companyname}`
//           //time: admin.firestore.FieldValue.serverTimestamp()
//         };

//         return createIntern(intern);
//       });
//   });
