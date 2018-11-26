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
});

