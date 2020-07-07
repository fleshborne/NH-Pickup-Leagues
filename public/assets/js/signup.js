/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable no-alert*/
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
  // $('.modal').modal();
  // Getting references to our form and input
  const signUpForm = $('form.signup');
  const userNameInput = $('#username-input');
  const emailInput = $('#email-input');
  const passwordInput = $('#password-input');
  const errorElement = $('#error');

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on('submit', (event) => {
    event.preventDefault();
    // validation();
    // console.log(
    //   'CREDS',
    //   userNameInput.val(),
    //   emailInput.val(),
    //   passwordInput.val()
    //   );
    // function validation() {
    //   if (userNameInput.val() === '') {
    //     const mess = 'userName is empty';
    //     $('.modal-content').text(mess);
    //     $('#modal1').modal('open');
    //   } else if (emailInput.val() === '' && userNameInput.val() === '') {
    //     const mess = 'username and email is empty';
    //     $('.modal-content').text(mess);
    //     $('#modal1').modal('open');
    //   } else if (passwordInput.val() === '' && emailInput.val() === '') {
    //     const mess = 'email and password is empty';
    //     $('.modal-content').text(mess);
    //     $('#modal1').modal('open');
    //   }
    //   else{}
    // }
    const userData = {
      username: userNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };
    // console.log('OVJ', userData);
    // console.log(userData);
    if (!userData.email || !userData.password || !userData.username) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.email, userData.password);
    emailInput.val('');
    passwordInput.val('');
    userNameInput.val('');
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, email, password) {
    //  console.log('check 1' + username + email + password);
    $.post('/api/signup', { username, email, password })
      .then((res) => {
        //console.log('res' + res);
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
