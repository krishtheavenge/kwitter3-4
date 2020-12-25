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
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>Name: "+user_name+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag="<h4 class='message_h4'>Message: "+message+"<img src='m2.png' class='tick'></h4>";
like_btn="<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updatelike(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row= name_with_tag + message_with_tag + like_btn + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();


document.getElementById("username").innerHTML="Username#:"+user_name;
document.getElementById("roomname").innerHTML="Roomname#:"+room_name;

function updatelike(message_id){
  console.log("clicked on like btn "+ message_id);
  btn_id=message_id;
  likes=document.getElementById(btn_id).value;
  updated_likes=Number(likes)+1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
  });
}

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