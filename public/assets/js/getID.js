module.exports = () => {
  $.get('/api/user_data').then((data) => {
    // console.log(data);
    const userid = data.id;
    // console.log(userid, 'user id');
    sessionStorage.setItem('id', JSON.stringify(userid));
    // cass the game schedule and passes user ID ID
    // eslint-disable-next-line no-use-before-define
    return userid;
  });
};