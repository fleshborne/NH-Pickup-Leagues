/* eslint-disable linebreak-style */
$(document).ready(() => {
  $('.collapsible').collapsible();
  $('.dropdown-trigger').dropdown();
});
$.get('/api/user_data').then((data) => {
  $('.member-name').text(data.username);
});
