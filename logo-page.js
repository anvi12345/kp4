var firebaseConfig = {
      apiKey: "AIzaSyBQdoWs6KjSwSOiwU0WtZKnzLPhFCPZ2gk",
      authDomain: "kwitterproject4.firebaseapp.com",
      databaseURL: "https://kwitterproject4-default-rtdb.firebaseio.com",
      projectId: "kwitterproject4",
      storageBucket: "kwitterproject4.appspot.com",
      messagingSenderId: "1082677085178",
      appId: "1:1082677085178:web:c72b9fd87d2635ca119a43"
    };
    
    
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function Send(){
      msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      messag:msg,
      like:0

});
document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }

