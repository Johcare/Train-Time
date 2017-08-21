
var database = firebase.database();

$('#addTrainBtn').on('click', function(event) {
    event.preventDefault();


    var trainName = $('#trainNameInput').val().trim();
    var destin = $('#destination').val().trim();
    var firstTrain = moment($('#firstTrainInput').val().trim(), 'HH:mm').subtract(10, 'years').format('X');
    var freekan = $("#frequency").val().trim();
    console.log(firstTrain);
    alert('train added');
    return false;


});

database.ref().on('child_added', function(snapshot, prevChildkey) {
    var trainName = snapshot.val().trainName;

    console.log(snapshot.val().trainName);

    var destin = snapshot.val().destin;

    var freekan = snapshot.val().freekan;

    var firstTrain = snapshot.val().firstTrain;


    var remainder = moment().diff(moment.unix(firstTrain), 'minutes') % freekan;
    var minutes = freekan - remainder;
    var arrival = moment().add(minutes, 'm').format('hh:mm A');

    console.log(remainder);
    console.log(minutes);
    console.log(arrival);

    $('#trainTable > tBody').append('<tr><td>' + trainName + '</td></tr>' + destin + '</td><td>' + freekan + '</td><td>' + arrival + '</td></td>' + minutes + '</td></tr>');
});