/* eslint-disable linebreak-style */
// const moment = require('moment');
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */

// function to display messages (could be used for entry validation)
function displaySaved() {
  document.getElementById('display-message').innerHTML =
    'Game Saved to My Schedule!';
  setTimeout(() => {
    document.getElementById('display-message').innerHTML = ' ';
  }, 1000);
}
// add game request
function addGame(date, numOfPlayersSignedUp, LocationId, GameTypeId, user) {
  console.log(
    `inside POST - date:${date} numOfPlayers ${numOfPlayersSignedUp} Location ${LocationId} Type: ${GameTypeId}`,
  );
  $.post('/api/games', {
      date,
      numOfPlayersSignedUp,
      LocationId,
      GameTypeId,
      user,
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
    console.log(data);
    data.forEach((park) => {
      // append them as select options
      const newLoc = $('<option>').attr('value', park.id).text(park.title);
      locationInput.append(newLoc);
    });
    locationInput.formSelect();
  });
  // get the dates for 7 days
  // eslint-disable-next-line no-undef
  let now = moment().format('YYYY-MM-DD');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 7; i++) {
    // eslint-disable-next-line no-undef
    now = moment().add(i, 'days').format('YYYY-MM-DD');
    const dateOpt = $('<option>').attr('value', now).text(now);
    dateInput.append(dateOpt);
  }
  dateInput.formSelect();
  // current time
  newGameForm.on('submit', (event) => {
    event.preventDefault();

    // convert date and time
    const date = dateInput.val();
    const hourInput = $('#hour-dropdown').val();
    const minuteInput = $('#min-dropdown').val();
    const amPmInput = $('#ampm-dropdown').val();
    const time = `${hourInput} ${minuteInput} ${amPmInput}`;
    // eslint-disable-next-line no-undef
    const dateTime = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm:ss').format();
    // Get user ID
    $.get('/api/user_data').then((data) => {
      $('.member-name').text(data.username);
      const userid = data.id;
      sessionStorage.setItem('id', JSON.stringify(userid));
      // eslint-disable-next-line no-use-before-define

      const gameData = {
        date: dateTime,
        numOfPlayersSignedUp: 1,
        LocationId: locationInput.val(),
        GameTypeId: gameTypeInput.val(),
        user: userid,
      };
      console.log(`game data ${gameData.date} ${gameData.GameTypeId}`);
      addGame(
        gameData.date,
        gameData.numOfPlayersSignedUp,
        gameData.LocationId,
        gameData.GameTypeId,
        gameData.user,
      );
      displaySaved();
    });
  });
  // eslint-disable-next-line eol-last
});