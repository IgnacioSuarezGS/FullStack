const router = require('express').Router();
const controller = require('./tweets.controller');

router.get('/', controller.seeAllTweets);

router.get('/:id', controller.seeTweetsById);

router.post('/', controller.newTweet);

router.delete('/:id', controller.delTweet);

module.exports = router;