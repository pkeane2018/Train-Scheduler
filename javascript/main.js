$(document).ready(function() { 

var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var config = {
        apiKey: "AIzaSyCeEpOwL8shW0sr9Ny1lFXNwScn83_AMOA",
        authDomain: "train-scheduler-ade65.firebaseapp.com",
        databaseURL: "https://train-scheduler-ade65.firebaseio.com",
        projectId: "train-scheduler-ade65",
        storageBucket: "train-scheduler-ade65.appspot.com",
        messagingSenderId: "82877936264"
      };
    
      firebase.initializeApp(config);
    
      var database = firebase.database();
    
      var name = "";
      var destination = "";
      var frequency = "";
      var firstTime;
    
      $("#add-train").on("click", function(event){
        
        event.preventDefault();
    
        console.log("made it here");
    
        name = $("#trainname").val().trim();
        destination = $("#destination").val().trim();
        frequency = $("#frequency").val().trim();
    
        firstTime = $("#firstTrain").val().trim();

        var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted);

        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);

        var tRemainder = diffTime % frequency;
        console.log(tRemainder);

        var tMinutesTillTrain = frequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

        console.log(name);
        console.log(destination);
        console.log(frequency);
    
        database.ref().set({
            name : name,
            destination: destination,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

    })    
    
}) 


