$(document).ready(function(){
   

    // //sandbox
    // var tfrequency = 7;
    // var currenttime = moment().format('HH:mm');
    // console.log('Current Military Time Is: ' + currenttime);

    // var firsttime = '03:30';
    // var firsttimeconverted = moment(firsttime, "HH:mm").subtract(1, "years");
    //     console.log(firsttimeconverted);
    // var difftime = moment().diff(moment(firsttimeconverted), 'minutes');
    //     console.log(difftime);
    // var tremainder = difftime % tfrequency;
    //     console.log(tremainder);
    // var minutestilltrain = tfrequency - tremainder;
    //     console.log(minutestilltrain);
    // var nexttrain = moment().add(minutestilltrain, "minutes");
    //     console.log(nexttrain);

    //     function traintime(){
    //         var tFirstTime = $("#")
    //     }
    
    
    //  // Assumptions
    //  var tFrequency = 3;

    //  // Time is 3:30 AM
    //  var firstTime = "03:30";
 
    //  // First Time (pushed back 1 year to make sure it comes before current time)
    //  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    //  console.log(firstTimeConverted);
 
    //  // Current Time
    //  var currentTime = moment();
    //  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
 
    //  // Difference between the times
    //  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    //  console.log("DIFFERENCE IN TIME: " + diffTime);
 
    //  // Time apart (remainder)
    //  var tRemainder = diffTime % tFrequency;
    //  console.log(tRemainder);
 
    //  // Minute Until Train
    //  var tMinutesTillTrain = tFrequency - tRemainder;
    //  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
 
    //  // Next Train
    //  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    //  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
  
    database.ref().on('value', function(snapshot) {
        console.log(snapshot.val(), 'this is what is in the database');
        console.log(Object.values(snapshot.val()), 'this is an array of objects');
        var objectval = Object.values(snapshot.val());
        $('.train-table').empty();
         
        for (i = 0 ; i < objectval.length ; i++ ) {
            var trainname = objectval[i].Name;
            var destination = objectval[i].Destination;
            var firsttraintime = objectval[i].FirsttrainTime;
            var frequency = objectval[i].Frequency;
            var nextarrival = '';
            var minutesaway = '';
            var table = $("<tr><th scope='row'>" + 
                            trainname + "</th><td>" + 
                            destination + "</td><td>" + 
                            frequency + "</td><td class='nunextarrival' >" + 
                            nextarrival + "</td><td class='numinutesaway' >" + 
                            minutesaway + "</td></tr>");
            $(".train-table").append(table);
        }
    })


    // On click Handler for the submit button

    $(".submit-button").on('click', function(event){
        
        event.preventDefault();

        // Variables for holding train information

        var trainname = $("#train-name-input").val();
        var destination = $("#destination-name-input").val();
        var firsttraintime = $("#first-train-time-input").val();
        var frequency = $("#frequency-input").val();

        //Conditional for preventing blank submit

        if (trainname === '' || destination === '' || firsttraintime === '' || frequency === '') {
            console.log("Please Don't Do That.");
            return false;  
        }
        else {
              
            clearform();
            var newtrain = {Name: trainname, 
                            Destination: destination, 
                            FirsttrainTime: firsttraintime, 
                            Frequency: frequency, 
                            dateAddeed: firebase.database.ServerValue.TIMESTAMP
                            };
            database.ref().push(newtrain);
            
            console.log("Train Added!");
        }       
    });

    function clearform(){

        $("#train-name-input").val('');
        $("#destination-name-input").val('');
        $("#first-train-time-input").val('');
        $("#frequency-input").val('');

    }

})