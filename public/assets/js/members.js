/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get('/api/user_data').then((data) => {
    $('.member-name').text(data.username);
    console.log(data);
    const userid = data.id;
    console.log(userid, 'user id');
    sessionStorage.setItem('id', JSON.stringify(userid));
    // cass the game schedule and passes user ID ID
    callGameScheudle(userid);
  });
});
/* eslint-disable eol-last */
/* eslint-disable no-undef */
// const mapDiv = $('#map');
// const SearchBtn = $('#searchBtn');

// const portsmouth = {
//   lat: 43.071568,
//   lng: -70.762245,
//   name: 'Portsmouth Park',
// };
// const allLocations = [portsmouth];

// function initMap() {
//   const newHampshire = {
//     lat: 44.0,
//     lng: -71.5,
//   };
//   const map = new google.maps.Map(document.getElementById('map'), {
//     center: newHampshire,
//     zoom: 4,
//   });

//   allLocations.forEach((location) => {
//     // eslint-disable-next-line no-unused-vars
//     const marker = new google.maps.Marker({
//       position: {
//         lat: location.lat,
//         lng: location.lng,
//       },
//       map,
//       title: location.name,
//     });
//     // will call marker when we establish what we want to show
//   });
// }
// Handles the dropdown logic
// $(document).ready(() => {
//   $('select').formSelect();
// });

$(document).ready(() => {
  $('.collapsible').collapsible();
  $('.dropdown-trigger').dropdown();
  $('select').formSelect();
  SearchBtn.on('click', () => {
    initMap();
    mapDiv.removeClass('.hideMap');
  });
});

// get all the games
// eslint-disable-next-line no-undef
const callGameScheudle = (userid) => {
  console.log(userid, 'inside pass game schedule');
  axios.get('/api//user_schedule').then((schedule) => {
    // code goes here
    console.log(schedule);
    schedule.data.forEach((game) => {
      console.log(game);
      const $table = $('#schedule-table tbody');
      const $rowCardTable = $('#rowCardAppend');
      let imageCardPath = './assets/images/';
      $table.append(`<tr>
      <td>${game.gameTypesName}</td>
      <td>${game.updatedAt}</td>
      <td>Prescott Park</td>
      <td>${game.minPlayers}</td>
      <td>${game.maxPlayers}</td>
    </tr>`);
      // try card
      if (game.gameTypesName === 'Soccer') {
        imageCardPath = `${imageCardPath}soccer.jpg`;
      } else if (game.gameTypesName === 'Volleyball') {
        imageCardPath = `${imageCardPath}vball.jpg`;
        // eslint-disable-next-line no-empty
      } else {
      }
      $rowCardTable.append(
        ` <div class="col s12 m7">
              <div class="card horizontal">
                <div class="card-image">
                  <img src="${imageCardPath}">
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i
                      class="material-icons">delete</i></a>
                  <span class="card-title">${game.gameTypesName}</span>
                </div>
                <div class="card-stacked">
                  <div class="card-content grey darken-3 card-font">
                    <p>Date: Sunday July 2
                    </p>
                    <p>Time: ${game.time}
                    </p>
                    <p>Players: ${game.minPlayers}
                    </p>
                  </div>
                </div>
              </div>
              </div>
              <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a> `
      );
    });
  });
};
