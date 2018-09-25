$(document).ready(function(){
   
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
    
    // Variables for holding train information

    var trainname = $("#train-name-input").val();
    var destination = $("#destiantion-name-input").val();
    var firsttraintime = $("#first-train-time-input").val();
    var frequecy = $("#frequency-input").val();

    // On click Handler for the submit button

    $(".submit-button").on('click', function(event){
        

        if (trainname === '' || destination === '' || firsttraintime === '' || frequecy === '') {
            console.log("Please Don't Do That.");
            return false;  
        }
        else {
            event.preventdefault();
            addtrain();
            console.log("Train added!");
        }
    })

    // Add Train function with variables to grab the data and put into a table format. then append to the tablebody div.

    function addtrain(){

        var trainname = $("#train-name-input").val();
        var destination = $("#destiantion-name-input").val();
        var firsttraintime = $("#first-train-time-input").val();
        var frequecy = $("#frequency-input").val();
        var nextarrival = '';
        var minutesaway = '';
        var tableconsole = trainname | destination | firsttraintime | frequecy | nextarrival | minutesaway;
        
        console.log(tableconsole);

        var table = $("<tr><th scope='row'>" + trainname + "</th><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextarrival + "</td><td>" + minutesaway + "</td></tr>");

        $(".train-table").append(table);

    }
})