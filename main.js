//import config from '../framework/config';
var fcmToken="";


var firebaseConfig = {
  apiKey: "AIzaSyBtOI48D0MC4jZvCUfDPDY4181BMDmORy0",
  authDomain: "last-arzi1.firebaseapp.com",
  projectId: "last-arzi1",
  storageBucket: "last-arzi1.appspot.com",
  messagingSenderId: "694717478732",
  appId: "1:694717478732:web:3e4839b10b37c1b84381e9",
  measurementId: "G-Z41MEYD21Q"
};

  /* let firebaseConfig = [];
  if(config[process.env.NODE_ENV] === 'dev') {
    firebaseConfig = {
      apiKey: "AIzaSyAPPPyGGo3wD4ckxAnipI9cA71UocPDAYk",
      authDomain: "aashiyana-27a3c.firebaseapp.com",
      databaseURL: "https://aashiyana-27a3c.firebaseio.com",
      projectId: "aashiyana-27a3c",
      storageBucket: "",
      messagingSenderId: "696705015292",
      appId: "1:696705015292:web:ac4e88aa78f37278"
    };
  } else if (config[process.env.NODE_ENV] === 'qa') {
    firebaseConfig = {
      apiKey: "AIzaSyAPPPyGGo3wD4ckxAnipI9cA71UocPDAYk",
      authDomain: "aashiyana-27a3c.firebaseapp.com",
      databaseURL: "https://aashiyana-27a3c.firebaseio.com",
      projectId: "aashiyana-27a3c",
      storageBucket: "",
      messagingSenderId: "696705015292",
      appId: "1:696705015292:web:a2c190cf695246da"
    };
  } */
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();


Notification.requestPermission().then(function(permission) {
    //console.log(__dirname + ' __dirname' );
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      //localStorage.setItem('fcmtoken', 'abc');
      generateToken();
    } else {
      console.log('Unable to get permission to notify.');
    }
  })


//generate token
function generateToken(){
    messaging.getToken().then(function(currentToken) {
        if (currentToken) {
            fcmToken = currentToken;
            console.log("Token= "+fcmToken);
            localStorage.setItem('fcmtoken', fcmToken);
        } else {
          console.log('No Instance ID token available. Request permission to generate one.');
        }
    }).catch(function(err) {
    console.log('An error occurred while retrieving token. ', err);
    });
}


// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(function() {
    messaging.getToken().then(function(refreshedToken) {
      fcmToken = refreshedToken;
      //console.log("Token= "+fcmToken);
      //console.log('Token refreshed.'+refreshedToken);
      localStorage.setItem('fcmtoken', fcmToken);
    }).catch(function(err) {
      console.log('Unable to retrieve refreshed token ', err);
      showToken('Unable to retrieve refreshed token ', err);
    });
  });


  messaging.onMessage(function(payload) {
    console.log('Message received. ', payload);
    // ...
    //let event = new Event("notificationclick1", {bubbles: true}); // (2)
    let event = new CustomEvent("newnot", {
      detail: payload
    });
  window.dispatchEvent(event);
    //window.addE
  });

  

self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...

});

  /* function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
  }
  export default connect(mapStateToProps, mapDispatchToProps)(main); */

//function registerUserWithFcmToken