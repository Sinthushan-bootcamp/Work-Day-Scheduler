// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
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
