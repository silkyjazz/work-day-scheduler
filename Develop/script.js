
///getting the elements by the id
var saveBtn = $('.saveBtn');
var currentDay = $('#currentDay');
var savedItem = $('#savedItem')
//create the day object for today
var todayDate = dayjs();
var dayWeek = todayDate.format('dddd');

//wrapping code in a call to jQuery
$(function () {

  saveBtn.on("click", function(){
    //this points to the save button and is getting it's parent's id
    var time = $(this).parent().attr("id");
    //getting the users input in the text area
    var value = $(this).siblings(".description").val();
    //setting the users input and associated hour id in local storage
    localStorage.setItem(time, value);

  });



  //creating a function that will add or remove the css class depending on the current hour
  function updateHour(){  
    // var hour = $(this).parent().attr("id");
     // getting the hour of the day from dayjs
    var currentHour = dayjs().hour();
    //creating an array to test if the current hour matches the hour in the array
    var hourArr = [9,10,11,12,13,14,15,16,17]
    //Iterating through each hour and applying the css class according to the hour
    hourArr.forEach(hour => {
      if (hour === currentHour){
        //if hour in the array matches the current hour, apply the present css class
      $(".description").addClass("present")
      $(".description").removeClass("past")
      $(".description").removeClass("future")
    } else if (hour < currentHour){
      //if hour is less than than current hour, add the past css class
      $(".description").removeClass("present")
      $(".description").addClass("past")
      $(".description").removeClass("future")
    } else {
      //if hour is greater than the current our add the future css class
      $(".description").removeClass("present")
      $(".description").removeClass("past")
      $(".description").addClass("future")

    }
      
    });
    
  }

  //calling our function that will change our css 
  updateHour()

  //getting the data back from local storage
  $("#9 .description").val(localStorage.getItem('9'));
  $("#10 .description").val(localStorage.getItem('10'));
  $("#11 .description").val(localStorage.getItem('11'));
  $("#12 .description").val(localStorage.getItem('12'));
  $("#13 .description").val(localStorage.getItem('13'));
  $("#14 .description").val(localStorage.getItem('14'));
  $("#15 .description").val(localStorage.getItem('15'));
  $("#16 .description").val(localStorage.getItem('16'));
  $("#17 .description").val(localStorage.getItem('17'));


  //displaying the current date and day of the weeek in the header of the page.
  $('#currentDay').text(dayWeek + ', ' + todayDate.format("MMMM D, YYYY"));
});
    
