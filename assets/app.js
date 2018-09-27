$(document).ready(function(){
   

    //sandbox
    var tfrequency = 7;
    var currenttime = moment().format('HH:mm');
    console.log('Current Military Time Is: ' + currenttime);

    var firsttime = '03:30';
    var firsttimeconverted = moment(firsttime, "HH:mm").subtract(1, "years");
        console.log(firsttimeconverted);
    var difftime = moment().diff(moment(firsttimeconverted), 'minutes');
        console.log(difftime);
    var tremainder = difftime % tfrequency;
        console.log(tremainder);
    var minutestilltrain = tfrequency - tremainder;
        console.log(minutestilltrain);
    var nexttrain = moment().add(minutestilltrain, "minutes");
        console.log(nexttrain);

        function traintime(){
            var tFirstTime = $("#")
        }
    
    
     // Assumptions
     var tFrequency = 3;

     // Time is 3:30 AM
     var firstTime = "03:30";
 
     // First Time (pushed back 1 year to make sure it comes before current time)
     var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
     console.log(firstTimeConverted);
 
     // Current Time
     var currentTime = moment();
     console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
 
     // Difference between the times
     var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
     console.log("DIFFERENCE IN TIME: " + diffTime);
 
     // Time apart (remainder)
     var tRemainder = diffTime % tFrequency;
     console.log(tRemainder);
 
     // Minute Until Train
     var tMinutesTillTrain = tFrequency - tRemainder;
     console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
 
     // Next Train
     var nextTrain = moment().add(tMinutesTillTrain, "minutes");
     console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Initialize Firebase

    // Firebase Address -
    // https://console.firebase.google.com/u/0/project/trainschedule-4dd32/overview

    var config = {
        apiKey: "AIzaSyDfHIXAWt9Wjew2sOyz4Tf03kludlj20_U",
        authDomain: "trainschedule-4dd32.firebaseapp.com",
        databaseURL: "https://trainschedule-4dd32.firebaseio.com",
        projectId: "trainschedule-4dd32",
        storageBucket: "",
        messagingSenderId: "390190264947"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    database.ref().on("value", function(snapshot){

        var trainname = $("#train-name-input").val();
        var destination = $("#destiantion-name-input").val();
        var firsttraintime = $("#first-train-time-input").val();
        var frequecy = $("#frequency-input").val();
        var nextarrival = moment(firsttraintime).from()

        console.log(snapshot);

    })
      
    // On click Handler for the submit button

    $(".submit-button").on('click', function(event){

        // Variables for holding train information

        var trainname = $("#train-name-input").val();
        var destination = $("#destination-name-input").val();
        var firsttraintime = $("#first-train-time-input").val();
        var frequecy = $("#frequency-input").val();

        //Conditional for preventing blank submit

        if (trainname === '' || destination === '' || firsttraintime === '' || frequecy === '') {
            console.log("Please Don't Do That.");
            return false;  
        }
        else {
            event.preventDefault();             
            addtrain();
            clearform();
            console.log("Train Added!");
        }

    });

    // Add Train function with variables to grab the data and put into a table format. then append to the tablebody div.

    function addtrain(){

        var trainname = $("#train-name-input").val();
        var destination = $("#destination-name-input").val();
        var firsttraintime = $("#first-train-time-input").val();
        var frequency = $("#frequency-input").val();
        var nextarrival = '';
        var minutesaway = '';
        var table = $("<tr><th scope='row'>" + trainname + "</th><td>" + destination + "</td><td>" + frequency + "</td><td class='nunextarrival' >" + nextarrival + "</td><td class='numinutesaway' >" + minutesaway + "</td></tr>");
        console.log(table);
        $(".train-table").append(table);

    };

    function clearform(){

        $("#train-name-input").val('');
        $("#destination-name-input").val('');
        $("#first-train-time-input").val('');
        $("#frequency-input").val('');

    }

})