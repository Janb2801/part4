var firebaseConfig = {
      apiKey: "AIzaSyDux9RgkM1cJ1ng_8vrcfy8QTOj4rB7BJo",
      authDomain: "classtest-2e44e.firebaseapp.com",
      databaseURL: "https://classtest-2e44e-default-rtdb.firebaseio.com",
      projectId: "classtest-2e44e",
      storageBucket: "classtest-2e44e.appspot.com",
      messagingSenderId: "601367789702",
      appId: "1:601367789702:web:bec965932f0080a8599107"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome" +user_name
function addRoom(){
room_name=document.getElementById("room_name").value 
firebase.database().ref("/").child(room_name).update({
purpose:"helloimjan" 
})
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"     
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;      
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name)
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"      
}