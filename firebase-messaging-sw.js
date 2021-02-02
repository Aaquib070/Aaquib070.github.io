importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');



//var messaging = firebase.messaging();

// const firebaseConfig = {
//     apiKey: "AIzaSyDV-W2zOp43fO6gHx6LdrT5vRcRZBJMTE4",
//     authDomain: "compass-939fe.firebaseapp.com",
//     databaseURL: "https://compass-939fe.firebaseio.com",
//     projectId: "compass-939fe",
//     storageBucket: "compass-939fe.appspot.com",
//     messagingSenderId: "1057274848588",
//     appId: "1:1057274848588:web:a27aeb4746ade96f"
//   };

firebase.initializeApp({
  messagingSenderId: '694717478732'
});
const messaging = firebase.messaging();
console.log('inside firebase js 1');
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
messaging.setBackgroundMessageHandler((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body:  payload.data.body,
    icon:  payload.data.icon
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});