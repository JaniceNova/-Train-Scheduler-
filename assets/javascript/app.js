var config = {
    apiKey: "AIzaSyDs5xVFHhiKt-odAyiaL4_TkvJ5Kqp0DQE",
    authDomain: "cbc-demo-1d9a7.firebaseapp.com",
    databaseURL: "https://cbc-demo-1d9a7.firebaseio.com",
    projectId: "cbc-demo-1d9a7",
    storageBucket: "cbc-demo-1d9a7.appspot.com",
    messagingSenderId: "1069776390766"
};
firebase.initializeApp(config);

var database = firebase.database();

  var destination = $("#destination-input").val().trim();
    var train = $("#train-input").val().trim();
    var time = $("#time-input").val().trim();
    var mins = $("#mins-input").val().trim();

$("#Submit").on("click", function () {
    event.preventDefault();
    console.log("addTrain")
    var destination = $("#destination-input").val().trim();
    var train = $("#train-input").val().trim();
    var time = $("#time-input").val().trim();
    var mins = $("#mins-input").val().trim();
    console.log(destination);
    console.log(train);
    console.log(mins);
    console.log(time);

    // $(".train-view").append("<tr class='center'><td class='trains'>" + train + "</td><td class='destination'>" + destination + "</td><td class='mins'>" + mins + "</td><td class='time'>" + time + "</td><td>" + "blank" + "</td></tr>")

    database.ref().push({
        train: train,
        destination: destination,
        mins: mins,
        time: time
    });
    
});


database.ref().on("child_added", function (snapshot) {
  
    console.log(snapshot.val().train)
   console.log(snapshot.val().destination)
   console.log(snapshot.val().mins)
  console.log(snapshot.val().time)
  

    $(".train-view").append("<tr class='center'><td class='trains'>" + snapshot.val().train + "</td><td class='destination'>" + snapshot.val().destination+ "</td><td class='mins'>" + snapshot.val().mins + "</td><td class='time'>" + snapshot.val().time + "</td><td>" + "blank" + "</td><td ><button class='updatebutton'>Update</button></td><td ><button class='deletebutton'>Delete</button></td></tr>")

});

$(document).on("click", ".deletebutton", function () {
    event.preventDefault();
    console.log("hi")
    
});
$(document).on("click", ".updatebutton", function () {
    event.preventDefault();
    console.log("hi")
    
});