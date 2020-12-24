var firebaseConfig = {
    apiKey: "AIzaSyAwha3qsX4Jy_XUnQ4zVYnELzsgAeAjClo",
    authDomain: "tic-tac-toe-69cc2.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-69cc2.firebaseio.com",
    projectId: "tic-tac-toe-69cc2",
    storageBucket: "tic-tac-toe-69cc2.appspot.com",
    messagingSenderId: "75482538017",
    appId: "1:75482538017:web:4456c0fe3dae671e6c4360",
    measurementId: "G-S3RH970NGG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name"); 
  room_name=localStorage.getItem("room_name");
 

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
//name=message_data['name'];
//message=message_data['message'];
//like=message_data['like'];
//End code
    } });  }); }
getData();


document.getElementById("username").innerHTML="Username#:"+user_name;
document.getElementById("roomname").innerHTML="Roomname#:"+room_name;

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
   window.location="index.html";
  }

function send(){
    var message=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:message,
          like:0
    });
    document.getElementById("msg").innerHTML=" ";
}
