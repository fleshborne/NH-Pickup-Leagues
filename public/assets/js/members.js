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
    // eslint-disable-next-line no-use-before-define
    callGameSchedule(userid);
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
const callGameSchedule = (userid) => {
  console.log(userid, 'inside pass game schedule');
  axios.get(`/api/user_schedule/${userid}`).then((schedule) => {
    // code goes here
    console.log(schedule);
    console.log(schedule.data);
    console.log(schedule.data.Games[0].GameType.gameTypesName);

    schedule.data.Games.forEach((game) => {
      console.log(game);
      const $table = $('#schedule-table tbody');
      // const $rowCardTable = $('#rowCardAppend');
      let imageCardPath = './assets/images/';
      imageCardPath = `${imageCardPath}${game.GameType.gameTypesName}.jpg`;
      $table.append(`<tr>
      <td><div class = "container containerimg"><div class="centered"><img src="${imageCardPath}" id="tablePic"><span>${game.GameType.gameTypesName}</span></div></div></td>
      <td>${game.updatedAt}</td>
      <td>${game.Location.title}</td>
      <td>${game.minPlayers}</td>
      <td>${game.maxPlayers}</td>
    </tr>`);
    });
  });
};
