// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY')
$("#currentDay").text(todayDate);
console.log(todayDate);

$("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

// add functions for the following:
// to save button
$(".saveBtn").on("click", function (event){
    event.preventDefault();
    var text= $(this).siblings(".content").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})

// for time tracker, add function and variable
function timeTracker(){
    var timeNow = moment().hour();

// create loops over time blocks

$(".time-block").each(function (){
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

//  check time and add classes for background indicators
if (blockTime < timeNow) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
} else if (blockTime === timeNow){
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");

} 
else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
}

})
}
// save in local storage and get items to save them

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12.description").val(localStorage.getItem("hour12"));
$("#hour13.description").val(localStorage.getItem("hour13"));
$("#hour14.description").val(localStorage.getItem("hour14"));
$("#hour15.description").val(localStorage.getItem("hour15"));
$("#hour16.description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
// dont forget to call function
timeTracker();
