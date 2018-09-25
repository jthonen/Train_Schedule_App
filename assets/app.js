$(document).ready(function(){

    var trainname = $("#train-name-input").val();
    var destination = $("#destiantion-name-input").val();
    var firsttraintime = $("#first-train-time-input").val();
    var frequecy = $("#frequency-input").val();

    $(".submit-button").on('click', function(event){
        event.preventdefault();

        if (trainname === '' & destination === '' & firsttraintime === '' & frequecy === '') {
            console.log("Please Don't Do That.");
            return false;
        }
        else {
            addtrain();
        }
    })


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