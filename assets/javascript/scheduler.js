


// Global Variables:

var trainNames = ["Trenton Express", "Orgeon Trail", "Midnight Carriage", "Sing Sing Caravan", "Boston Bus", "California Caravan", "Analben's Train"];
var destination = ["Trenton", "Salem< Oregon", "Philadelpha", "Atlanta", "Boston", "San Francisco", "Florida"];
var frequencyInMinutes = [25, 3600, 15, 45, 65, 6000, 25];
var firstYimes = ["03:30", "03:30", "03:30", "03:30", "03:30", "03:30", "03:30"];
var tFrequency = 0;
var firstTime = "";
var firstTimeConverted;
var currentTime;
var diffTime;
var tRemainder;
var tMinutesTillTrain;
var nextTrain;


for (index = 0; index < trainNames.length; index++) {

    tFrequency = 3;
    // Time is 3:30 AM
    firstTime = "03:30";
    // First Time (pushed back 1 year to make sure it comes before current time)
    firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);
    // Current Time
    currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    // Difference between the times
    diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
    // Time apart (remainder)
    tRemainder = diffTime % tFrequency;
    console.log(tRemainder);
    // Minute Until Train
    tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    // Next Train
    nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
}