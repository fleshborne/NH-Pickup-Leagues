const router = require('express').Router();

router.get('/', (req, res) => res.json('Sample API get endpoint'));

// GET index, all games for
// POST create new game
// PUT Updates a game by ID
router.get('user_schedule', (req, res) => {
  console.log(res);
  res.json('get all games from schedule');
});

router.get('/user_schedule/:id', (req, res) => {
  console.log(res);
  res.json('get all games from schedule');
});
module.exports = router;
