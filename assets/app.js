$(document).ready(function(){
   

    //sandbox
    var currenttime = moment().format('HH:mm');
    console.log('Current Military Time Is: ' + currenttime);

    var time1 = moment().format('LT');
    console.log('Current Time Is: ' + time1);

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
        var destination = $("#destiantion-name-input").val();
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
            console.log("Train Added!");
        }

    });

    // Add Train function with variables to grab the data and put into a table format. then append to the tablebody div.

    function addtrain(){

        var trainname = $("#train-name-input").val();
        var destination = $("#destiantion-name-input").val();
        var firsttraintime = $("#first-train-time-input").val();
        var frequency = $("#frequency-input").val();
        var nextarrival = '';
        var minutesaway = '';
        var table = $("<tr><th scope='row'>" + trainname + "</th><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextarrival + "</td><td>" + minutesaway + "</td></tr>");
        console.log(table);
        $(".train-table").append(table);

    };
})