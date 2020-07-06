/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
const portsmouth = {
  lat: 43.071568,
  lng: -70.762245,
  name: 'Portsmouth Park',
};
const allLocations = [portsmouth];
function initMap() {
  const newHampshire = { lat: 44.0, lng: -71.5 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: newHampshire,
    zoom: 4,
  });

  allLocations.forEach((location) => {
    const marker = new google.maps.Marker({
      position: {
        lat: location.lat,
        lng: location.lng,
      },
      map,
      title: location.name,
    });
  });
}
$(document).ready(() => {
  $('.collapsible').collapsible();
  $('.dropdown-trigger').dropdown();
  $('#searchBtn').on('click', initMap);
});
