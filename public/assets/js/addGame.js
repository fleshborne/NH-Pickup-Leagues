// On click "Game type", I request the list of game types from thw db.

// On click "Date", I pull up a calendar for this month

// On click "Time", I can enter time.

// On click "location", I request the list of locations from thw db.

// After entering data, it is appended to the page, and after the "Create" button appears.

// On click "Create", the new "game" is added to the table, to your games.
function displaySaved() {
  document.getElementById('display-message').innerHTML =
    'Game Saved to My Schedule!';
  setTimeout(() => {
    document.getElementById('display-message').innerHTML = ' ';
  }, 1000);
}

$(document).ready(() => {
  $.get('/api/locations').then((data) => {
    console.log(data);
    console.log('This is data');
  });

  const newGameForm = $('.add-game');
  const gameTypeInput = $('#game-type');
  const locationInput = $('#game-location');

  newGameForm.on('submit', (event) => {
    event.preventDefault();
    console.log(gameTypeInput.val());
    console.log(locationInput.val());

    displaySaved();
  });
});

// locationInput.append(`<option> `);
