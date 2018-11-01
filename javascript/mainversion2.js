$(document).ready(function() { 

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

      $("#currenttrains").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" +  moment(nextTrain).format("hh:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");

   })

})