$(function () {
 
  function saveEvent(){
    // This function is called whenever a save button is clicked
    // and stores the new event into the local storage

    // get the parent div of the save button and extract the ID
    divID = $(this).parent()[0].id;
    // navigate to the parent div of the save button and then to the textarea child element
    // once we get to tht textarea child element we extract the inputted value
    userInput = $(this).parent().eq(0).children('textarea').val();
    localStorage.setItem(divID, userInput); // add event to local storage using the parent DIVs id as a key
  }
  $('.saveBtn').on('click', saveEvent); // call the saveEvent function when the save button is clicked
  
 
  // get the current hour using the dayJS api
  var currentHour = dayjs().hour()
  // for each timeblock we get the id and from the id we determine if the current hour above
  // is less than, greater than or equal to the hour that each timeblock represents
  // based on this we color code the timeblocks
  // while we are color coding we also query the local storage using the timeblock's id for any saved events
  var timeBlocks = $('.time-block')
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeBlockID = timeBlocks[i].id // get ID of the timeblock
    // ID's are written as hour-# where # is an integer from 1 to 24 represent and hour
    // to extract just the integer from the id we utilize the split method with '-' as a delimiter 
    // and get the second element of the returned array
    var timeBlockHour = timeBlockID.split('-')[1] 
    var storedEvents = localStorage.getItem(timeBlockID);
    if (storedEvents !== null) { // make sure the key exist in local storage
      // set the value of the textacea of each timebloack that had a stored event to the event
      timeBlocks.eq(i).children('textarea').val(storedEvents); 
    }
    // check if the hour in the ID is less than, greater than or equal to the current hour
    // add a past, present, and future class to the timeblock depending on result
    if (currentHour > timeBlockHour){
      timeBlocks.eq(i).addClass('past')
    } else if (currentHour < timeBlockHour){
      timeBlocks.eq(i).addClass('future')
    } else {
      timeBlocks.eq(i).addClass('present')
    }
  }

  // Displaying the current date using the DayJS API
  var currentDate = dayjs() // get current date
  //we need to make the date ordinal based on month so we use a select case to determine the suffix
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
  var currentDateEl = $('#currentDay'); // get the p tag where we input the current date
  // format the date so that is shows the full day of the week followed by the full month name and the day
  // add the ordinal suffix
  // add it as the text to the #currentDate tag
  currentDateEl.text(currentDate.format('dddd, MMMM D') + ordinalSuffix); 

});
