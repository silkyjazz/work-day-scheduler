
///getting the save button by the id
var saveBtn = $('.saveBtn');

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

  //getting the data back from local storage
  $("#9 .description").val(localStorage.getItem('9'));

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function updateHour(){  
    // var hour = $(this).parent().attr("id");
    var currentHour = dayjs().hour();

    var hourArr = [9,10,11,12,13,14,15,16,17]

    hourArr.forEach(hour => {
      if (hour === currentHour){
      $(".description").addClass("present")
      $(".description").removeClass("past")
      $(".description").removeClass("future")
    } else if (hour < currentHour){
      $(".description").removeClass("present")
      $(".description").addClass("past")
      $(".description").removeClass("future")
    } else {
      $(".description").removeClass("present")
      $(".description").removeClass("past")
      $(".description").addClass("future")

    }
      
    });
    
  }


  updateHour()


  // TODO: Add code to display the current date in the header of the page.
});
    
