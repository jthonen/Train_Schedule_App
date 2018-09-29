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

        var objectval = Object.values(snapshot.val());
        $('.train-table').empty();
         
        for (i = 0 ; i < objectval.length ; i++ ) {
            var trainname = objectval[i].Name;
            var destination = objectval[i].Destination;
            var frequency = objectval[i].Frequency;
            var firsttraintime = objectval[i].FirsttrainTime;

            var firsttimeconverted = moment(firsttraintime, "HH:mm").subtract(1, "years");
            var currenttime = moment();
            var difftime = moment().diff(moment(firsttimeconverted), 'minutes');
            var tremainder = difftime % frequency;
            var nextarrival = moment().add(minutestilltrain, "minutes");
            var minutesaway = frequency - tremainder;


            var table = $("<tr><th scope='row'>" + 
                            trainname + "</th><td>" + 
                            destination + "</td><td>" + 
                            frequency + "</td><td>" + 
                            nextarrival + "</td><td>" + 
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