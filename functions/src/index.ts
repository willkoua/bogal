import * as admin from 'firebase-admin';
// import * as functions from 'firebase-functions';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  // databaseURL: 'https://lightcutoff.firebaseio.com'
});
admin.firestore().settings({ timestampsInSnapshots: true });

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export * from './callable';
