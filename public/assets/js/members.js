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
    const userid = data.id;
    console.log(userid);
    sessionStorage.setItem('id', JSON.stringify(userid));
  });
});
/* eslint-disable eol-last */
/* eslint-disable no-undef */
const mapDiv = $('#map');
const SearchBtn = $('#searchBtn');
const searchByGame = $('#searchByGame');
// const popup;
// const Popup;

const portsmouth = {
  lat: 43.071568,
  lng: -70.762245,
  name: 'Portsmouth',
  title: 'Portsmouth Park'
};

const PrescottPark = {
  lat: 43.0773108,
  lng: -70.7519975,
  name: 'Prescott Park',
  title: 'Prescott Park'
};

const allLocations = [
  portsmouth,
  PrescottPark,
];

function initMap() {
  // const newHampshire = {
  //   lat: 44.0,
  //   lng: -71.5,
  // };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: portsmouth,
    zoom: 10,
  });

  allLocations.forEach((location) => {
    // eslint-disable-next-line no-unused-vars
    const marker = new google.maps.Marker({
      position: {
        lat: location.lat,
        lng: location.lng,
      },
      map,
      title: location.name,
    });
    // will call marker when we establish what we want to show
  });
}

// Popup = createPopupClass();
// // eslint-disable-next-line prefer-const
// popup = new Popup(
//   new google.maps.LatLng(43.071, -70.762),
//   document.getElementById('content')
// );
// popup.setMap(map);

// function createPopupClass() {
//   /**
//    * A customized popup on the map.
//    * @param {!google.maps.LatLng} position
//    * @param {!Element} content The bubble div.
//    * @constructor
//    * @extends {google.maps.OverlayView}
//    */
//   initMap();

//   class Popup {
//     constructor(position, content) {
//       this.position = position;

//       content.classList.add('popup-bubble');

//       // This zero-height div is positioned at the bottom of the bubble.
//       const bubbleAnchor = document.createElement('div');
//       bubbleAnchor.classList.add('popup-bubble-anchor');
//       bubbleAnchor.appendChild(content);

//       // This zero-height div is positioned at the bottom of the tip.
//       this.containerDiv = document.createElement('div');
//       this.containerDiv.classList.add('popup-container');
//       this.containerDiv.appendChild(bubbleAnchor);

//       // Optionally stop clicks, etc., from bubbling up to the map.
//       google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
//     }

//     /** Called when the popup is added to the map. */
//     onAdd() {
//       this.getPanes().floatPane.appendChild(this.containerDiv);
//     }

//     /** Called when the popup is removed from the map. */
//     onRemove() {
//       if (this.containerDiv.parentElement) {
//         this.containerDiv.parentElement.removeChild(this.containerDiv);
//       }
//     }

//     /** Called each frame when the popup needs to draw itself. */
//     draw() {
//       const divPosition = this.getProjection().fromLatLngToDivPixel(this.position);

//       // Hide the popup when it is far out of view.
//       const display = Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
//         // eslint-disable-next-line operator-linebreak
//         'block' :
//         'none';

//       if (display === 'block') {
//         this.containerDiv.style.left = `${divPosition.x}px`;
//         this.containerDiv.style.top = `${divPosition.y}px`;
//       }
//       if (this.containerDiv.style.display !== display) {
//         this.containerDiv.style.display = display;
//       }
//     }
//   }
//   // ES5 magic to extend google.maps.OverlayView.
//   Popup.prototype = Object.create(google.maps.OverlayView.prototype);


//   return Popup;
// }

// Handles the dropdown logic
$(document).ready(() => {
  $('select').formSelect();
});

$(document).ready(() => {
  $('.collapsible').collapsible();
  $('.dropdown-trigger').dropdown();
  const gameTypeInput = $('#search-game-type');

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
  searchByGame.on('change', () => {
    console.log('game selected');
  });
  SearchBtn.on('click', () => {
    initMap();
    mapDiv.removeClass('hideMap');
  });
});

// get all the games
// eslint-disable-next-line no-undef
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
    } else {}
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
              </div>`
    );
  });
});