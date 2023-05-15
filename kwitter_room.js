function logout(){
    window.location = "index.html" ;
}

var firebaseConfig = {
    apiKey: "AIzaSyDlZ13-PNcxfin71IbUJxWjfLcf8eJEPSw",
    authDomain: "kwitter-hw-76889.firebaseapp.com",
    databaseURL: "https://kwitter-hw-76889-default-rtdb.firebaseio.com",
    projectId: "kwitter-hw-76889",
    storageBucket: "kwitter-hw-76889.appspot.com",
    messagingSenderId: "339371482561",
    appId: "1:339371482561:web:1a6451263fdd7d26cea340"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name")

function addRoom() {
    room_name=document.getElementById("room_name").value;
    firebase .database().ref("/").child(room_name).update
    ({
        purpose:"adding user"
    });

    localStorage.setItem("room_name",room_name)

}
document.getElementById("user_name_label").innerHTML = "Welcome " + user_name + "!";







