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
firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");

 console.log(user_name);
 console.log(document.getElementById("user_name"));
 
 document.getElementById("user_name").innerHTML = "<h2>Welcome " + user_name + "!!</h2>";

    function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
          childKey  = childSnapshot.key;
          Room_names = childKey;
          console.log(Room_names);
          row = "<div class='room_name' onclick='redirecttoroomname(this.id)' id='"+Room_names+"'  >#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    }
getData();

function addroom(){
 var roomname = document.getElementById("room_name").value;
 localStorage.setItem("room_name", roomname);
 firebase.database().ref("/").child(roomname).update({
   purpose : "addingroomname"
 });
 

}
function redirecttoroomname(name){
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
 window.location="index.html";
}