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



$("#Submit").on("click", function () {
    console.log("addTrain")
    var destination = $("#destination-input").val().trim();
    var train = $("#train-input").val().trim();
    var time = $("#time-input").val().trim();
    var mins = $("#mins-input").val().trim();
    console.log(destination);
    console.log(train);
    console.log(mins);
    console.log(time);

    $(".train-view").append("<tr class='center'><td>" + train + "</td><td>" + destination + "</td><td>" + mins + "</td><td>" + time + "</td><td>" + "blank" + "</td></tr>")

    database.ref().push({
        train: train,
        destination: destination,
        mins: mins,
        time: time
      });
});

