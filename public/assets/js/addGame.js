// On click "Game type", I request the list of game types from thw db.

// On click "Date", I pull up a calendar for this month

// On click "Time", I can enter time.

// On click "location", I request the list of locations from thw db.

// After entering data, it is appended to the page, and after the "Create" button appears.

// On click "Create", the new "game" is added to the table, to your games.
function displaySaved() {
  document.getElementById('display-message').innerHTML = 'Game Saved to My Schedule!';
  setTimeout(() => {
    document.getElementById('display-message').innerHTML = ' ';
  }, 1000);
}

$(document).ready(() => {
  const newGameForm = $('.add-game');
  const gameTypeInput = $('#game-type');

  // When the form is submitted, we validate there's an email and password entered
  newGameForm.on('submit', (event) => {
    event.preventDefault();
    // alert('button clicked');
    console.log(gameTypeInput.val());
    displaySaved();
  });
  //   function loginUser(email, password) {
  //     // sessionStorage.setItem('test', email);
  //     $.post('/api/login', {
  //       email,
  //       password,
  //     })
  //       .then(() => {
  //         window.location.replace('/members');
  //         // If there's an error, log the error
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
});
