/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
$(document).ready(() => {
  $('.collapsible').collapsible();
  $('.dropdown-trigger').dropdown();

  const signupbutton = $('#input-signup');

  signupbutton.on('submit', (event) => {
    event.preventDefault();
  });
});
