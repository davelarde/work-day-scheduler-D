// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY')
$("#currentDay").text(todayDate);
console.log(todayDate);

// add functions for the following:
// to save button
$(document).ready(function(){
    var text= $(this).siblings(".description").val();
    var time = $(this).parent().attr("id";)
    localStorage.setItem(time, text);
})
// for time tracker
// create loops over time blocks
//  check time and add classes for background indicators
// save in local storage and get items to save them