$(document).ready(function() { 

var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var config = {
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
    
        database.ref().push({
            name : name,
            destination: destination,
            frequency: frequency,
            firstTime : firstTime,  
        });

        $("#trainname").val(" ");
        $("#frequency").val(" ");
        $("#destination").val(" ");
        $("#firstTrain").val(" ");
    })    

    database.ref().on("child_added", function(snapshot) {
        
        var snap = snapshot.val();

        console.log(snap.name);
        console.log(snap.destination);
        console.log(snap.frequency);
        console.log(snap.firstTime);

        var name = snap.name;
        var destination = snap.destination;
        var frequency = snap.frequency;
        var firstTime = snap.firstTime;

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

        $("#currenttrains").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" +  moment(nextTrain).format("hh:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");      

    },function(errorObject) {
        console.log("Errors handled: " + errorObject.code);

    });
}) 


