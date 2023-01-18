$(function () {
  function saveEvent(){
    divID = $(this).parent()[0].id;
    userInput = $(this).parent().eq(0).children('textarea').val();
    localStorage.setItem(divID, userInput);
  }
  $('.saveBtn').on('click', saveEvent);

  var currentHour = dayjs().hour()
  var timeBlocks = $('.time-block')
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlockHour = timeBlocks[i].id.split('-')[1]
    if (currentHour > timeBlockHour){
      timeBlocks.addClass('past')
    } else if (currentHour < timeBlockHour){
      timeBlocks.addClass('future')
    } else {
      timeBlocks.addClass('present')
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var currentDate = dayjs()
  switch(currentDate) {
    case 1:
      ordinalSuffix = 'st';
      break;
    case 2:
      ordinalSuffix = 'nd';
      break;
    case 3:
      ordinalSuffix = 'rd';
      break;
    default:
      ordinalSuffix = 'th';
  }
  var currentDateEl = $('#currentDay');
  currentDateEl.text(currentDate.format('dddd, MMMM D') + ordinalSuffix);

});
