// const moment = require('moment');
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
  document.getElementById('display-message').innerHTML =
    'Game Saved to My Schedule!';
  setTimeout(() => {
    document.getElementById('display-message').innerHTML = ' ';
  }, 1000);
}
// add game request
function addGame(date, numOfPlayersSignedUp, LocationId, GameTypeID) {
  console.log(
    `inside POST - date:${date} numOfPlayers ${numOfPlayersSignedUp} Location ${LocationId} Type: ${GameTypeID}`);
  $.post('/api/games', {
    date,
    numOfPlayersSignedUp,
    LocationId,
    GameTypeID,
  })
    .then((res) => {
      console.log(res);
      window.location.replace('/members');
    })
    .catch((err) => {
      console.log(err);
    });
}
// get 7 days function
// function formatDate(date) {
//   const d = new Date(date),
//     month = '' + (d.getMonth() + 1),
//     day = '' + d.getDate(),
//     year = d.getFullYear();

//   if (month.length < 2) month = '0' + month;
//   if (day.length < 2) day = '0' + day;

//   return [year, month, day].join('-');
// }
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
      const newGame = $('<option>')
        .attr('value', game.id)
        .text(game.gameTypesName);
      gameTypeInput.append(newGame);
    });
    gameTypeInput.formSelect();
  });

  // get the Locations from db
  $.get('/api/locations').then((data) => {
    // loop over the titles
    data.forEach((park) => {
      // append them as select options
      const newLoc = $('<option>').attr('value', park.id).text(park.title);
      locationInput.append(newLoc);
    });
    locationInput.formSelect();
  });
  // get the dates for 7 days
  // current time

  // const now = new Date();
  // const first = now.getDate();
  // const firstDay = new Date(now.setDate(first)).toString();
  // let dateOptions = '';
  // for (let i = 0; i < 7; i++) {
  //   const next = new Date(now.getTime());
  //   next.setDate(first + i);
  //   dateOptions += '<option>' + formatDate(next.toString()) + '</option>';
  // }
  // dateInput.append(dateOptions);



  // const now = moment().format('MMM Do YY');
  // console.log(now);
  // const tomorrow = moment().add(1, 'days');
  // console.log(tomorrow);
  // for (let i = 0; i < 6; i++) {
  //   now = now;
  // }

  newGameForm.on('submit', (event) => {
    event.preventDefault();

    const gameData = {
      date: dateInput.val().trim(),
      numOfPlayersSignedUp: 1,
      LocationId: locationInput.val(),
      GameTypeId: gameTypeInput.val(),
    };
    console.log(`game data ${gameData.date} ${gameData.GameTypeId}`);
    // console.log(req.user.UserId)
    addGame(
      gameData.date,
      gameData.numOfPlayersSignedUp,
      gameData.LocationId,
      gameData.GameTypeId,
    );
    displaySaved();
  });
});
