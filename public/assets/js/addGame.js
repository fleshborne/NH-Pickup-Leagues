/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
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
function addGame(date, numOfPlayersSignedUp, locationId, gameTypeID) {
  $.post('/api/games', {
    date,
    numOfPlayersSignedUp,
    locationId,
    gameTypeID,
  })
    .then((res) => {
      console.log(res);
      window.location.replace('/members');
    })
    .catch((err) => {
      console.log(err);
    });
}

$(document).ready(() => {
  const newGameForm = $('.add-game');
  const gameTypeInput = $('#type-dropdown');
  const locationInput = $('#location-dropdown');
  const timeInput = $('#time-dropdown');
  const dateInput = $('#date-dropdown');

  // get the Gametype info
  $.get('/api/gametypes').then((data) => {
    // loop over the names
    console.log('data from addgame', data);
    data.forEach((game) => {
      // append them as select options
      const newGame = $('<option>').text(game.gameTypesName);
      gameTypeInput.append(newGame);
    });
    gameTypeInput.formSelect();
  });

  // get the Locations from db
  $.get('/api/locations').then((data) => {
    // loop over the titles
    data.forEach((park) => {
      // append them as select options
      const newLoc = $('<option>').text(park.title);
      locationInput.append(newLoc);
    });
    locationInput.formSelect();
  });

  newGameForm.on('submit', (event) => {
    event.preventDefault();

    const gameData = {
      date: dateInput.val().trim(),
      time: timeInput.val().trim(),
    };

    addGame(gameData.date);
    console.log(gameTypeInput.val());
    console.log(locationInput.val());
    console.log(timeInput.val());
    console.log(dateInput.val());
    displaySaved();
  });
});
