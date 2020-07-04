/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable space-infix-ops */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-template */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $('form.signup');
  //   const userNameInput = $('input#username-input');
  const emailInput = $('input#email-input');
  const passwordInput = $('input#password-input');

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on('submit', (event) => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      //   username: userNameInput.val().trim(),
    };

    console.log(userData);
    // !userData.username

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val('');
    passwordInput.val('');
    // userNameInput.val('');
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    console.log('check 1' + email + password);
    $.post('/api/signup', {
      //   username: username,
      email,
      password,
    })
      .then(() => {
        console.log('check 2');
        window.location.replace('/members');
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLoginErr(err) {
    $('#alert .msg').text(err.responseJSON);
    $('#alert').fadeIn(500);
  }
});
