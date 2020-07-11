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
function addGame(date, numOfPlayersSignedUp, LocationId, GameTypeId) {
  console.log(
    `inside POST - date:${date} numOfPlayers ${numOfPlayersSignedUp} Location ${LocationId} Type: ${GameTypeId}`,
  );
  $.post('/api/games', {
    date,
    numOfPlayersSignedUp,
    LocationId,
    GameTypeId,
  })
    .then((res) => {
      console.log(res);
      // window.location.replace('/members');
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
  // console.log(`console time ${now}`);
  // const first = now.getDate();
  // const firstDay = new Date(now.setDate(first)).toString();
  // let dateOptions = '';
  // for (let i = 0; i < 7; i++) {
  //   const next = new Date(now.getTime());
  //   next.setDate(first + i);
  //   dateOptions += '<option>' + formatDate(next.toString()) + '</option>';
  // }
  // dateInput.append(dateOptions);
  // dateInput.formSelect();

  newGameForm.on('submit', (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-undef
    let now = moment().format('MMM Do YY');
    console.log(now);
    // eslint-disable-next-line no-undef
    const tomorrow = moment().add(1, 'days');
    console.log(tomorrow);

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 6; i++) {
      // eslint-disable-next-line no-undef
      now = moment().format().add(i, 'days');
      // now = moment().format();
      // eslint-disable-next-line no-underscore-dangle
      console.log(now._d);
    }

    // convert date and time
    const date = dateInput.val();
    const time = timeInput.val();
    // eslint-disable-next-line no-undef
    const dateTime = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss').format();
    console.log(dateTime);
    const gameData = {
      date: dateTime,
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
