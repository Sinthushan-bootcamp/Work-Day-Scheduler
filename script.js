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
    var timeBlockID = timeBlocks[i].id
    var timeBlockHour = timeBlockID.split('-')[1]
    var storedEvents = localStorage.getItem(timeBlockID);
    if (storedEvents !== null) {
      timeBlocks.eq(i).children('textarea').val(storedEvents);
    }
    if (currentHour > timeBlockHour){
      timeBlocks.eq(i).addClass('past')
    } else if (currentHour < timeBlockHour){
      timeBlocks.eq(i).addClass('future')
    } else {
      timeBlocks.eq(i).addClass('present')
    }
  }
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
