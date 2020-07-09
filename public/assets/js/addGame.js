/* eslint-disable linebreak-style */
// On click "Game type", I request the list of game types from thw db.

// On click "Date", I pull up a calendar for this month

// On click "Time", I can enter time.

// On click "location", I request the list of locations from thw db.

// After entering data, it is appended to the page, and after the "Create" button appears.

// function to display messages (could be used for entry validation) 
function displaySaved() {
  document.getElementById('display-message').innerHTML = 'Game Saved to My Schedule!';
  setTimeout(() => {
    document.getElementById('display-message').innerHTML = ' ';
  }, 1000);
}

$(document).ready(() => {
  const newGameForm = $('.add-game');
  const gameTypeInput = $('#type-dropdown');
  const locationInput = $('#location-dropdown');
  const timeInput = $('time-dropdown');
  const dateInput = $('date-dropdown');

  // get the Gametype info
  $.get('/api/gametypes').then((data) => {
    console.log(data);
    // loop over the names
    data.forEach((game) => {
      console.log(game.gameTypesName);
      // append them as select options
      const newGame = $('<option>').attr('value', 1).text(game.gameTypesName);
      gameTypeInput.append(newGame);
    });
    gameTypeInput.formSelect();
  });

  // get the Locations from db
  $.get('/api/locations').then((data) => {
    // loop over the titles
    data.forEach((park) => {
      console.log(park.title);
      // append them as select options
      const newLoc = $('<option>').attr('value', 1).text(park.title);
      locationInput.append(newLoc);
    });
    locationInput.formSelect();
  });


  newGameForm.on('submit', (event) => {
    event.preventDefault();
    console.log(gameTypeInput.val());
    console.log(locationInput.val());
    console.log(timeInput.val());
    console.log(dateInput.val());
    displaySaved();
  });
});
