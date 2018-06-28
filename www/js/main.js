
var config = {
    apiKey: "AIzaSyDbOc9WuuZjKFZC7eyanNyUuDKdnksHHXk",
    authDomain: "tangram-ca133.firebaseapp.com",
    databaseURL: "https://tangram-ca133.firebaseio.com",
    projectId: "tangram-ca133",
    storageBucket: "tangram-ca133.appspot.com",
    messagingSenderId: "788009535147"
  };

firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

var db = firebase.firestore(); 

db.collection("alunos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data()["nome"]);
        var node = document.getElementById("card_box").innerHTML += " <div class='card'><img src='img/profile_default.png'><table class='info' ><tr><th><p class='info_item'> "+ doc.data()["nome"] +"</p></th></tr><tr><th><p class='info_item' id='info_child'> "+"Idade: "+doc.data()["idade"]+" anos"+"</p></th></tr> </table></div>"
    });
});

