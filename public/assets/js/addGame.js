/* eslint-disable linebreak-style */
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

// function initiateClickFunc() {
//   // initialize

//   // update function for demo purposes
//   $('#myButton').click(() => {});
// }

$(document).ready(() => {
  // const initiateClick = $('#initiate-click');
  const newGameForm = $('.add-game');
  const gameTypeInput = $('#game-type');
  const locationInput = $('#myDropdown');
  $(() => {
    // initialize
    $('.materialSelect').formSelect();

    // setup listener for custom event to re-initialize on change
    $('.materialSelect').on('contentChanged', () => {
      $(this).formSelect();
    });

    // update function for demo purposes

    // add new value
    const newOpt = $('<option>').attr('value', 1).text('newValue');

    console.log(newOpt);
    $('#myDropdown').append(newOpt);

    // fire custom event anytime you've updated select
    $('#myDropdown').trigger('contentChanged');
  });

  // initiateClick.on('click', () => {
  //   // eslint-disable-next-line no-alert

  //   // add new value
  //   const newValue = 'this a-hole works!';
  //   const $newOpt = $('<option>').attr('value', newValue).text(newValue);
  //   locationInput.append($newOpt);

  //   // fire custom event anytime you've updated select
  //   locationInput.trigger('contentChanged');

  //   // $.get('/api/locations').then((data) => {
  //   //   console.log(data);
  //   //   console.log(data[0].title);
  //   //   // add new value
  //   //   const newValue = 'this a-hole works!';
  //   //   const $newOpt = $('<option>').text(newValue);
  //   //   locationInput.append($newOpt);

  //   // });
  // });

  newGameForm.on('submit', (event) => {
    event.preventDefault();
    console.log(gameTypeInput.val());
    console.log(locationInput.val());

    displaySaved();
  });
});
